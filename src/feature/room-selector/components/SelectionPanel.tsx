import { useQueryClient } from "@tanstack/react-query";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { RoomConfigDto, RoomConfigPayload } from "@/dtos/room-config.dto";

import { useUpdateRoomConfigMutation } from "@/hooks/mutations/use-room-configs-mutation";
import {
  roomConfigsQK,
  useRoomConfigQuery,
} from "@/hooks/queries/use-room-configs-queries";

interface SelectionPanelProps {
  roomConfig: RoomConfigDto;
}

export function SelectionPanel({
  roomConfig,
}: SelectionPanelProps) {
  const queryClient = useQueryClient();

  const { data: selections = {} } = useRoomConfigQuery(roomConfig.type);

  const { mutate } = useUpdateRoomConfigMutation({
    onMutate(variables) {
      queryClient.setQueryData<RoomConfigPayload>(
        roomConfigsQK.detail(variables.room),
        (old = {}) => ({ ...old, ...variables.config }),
      );
    },
    onError() {
      queryClient.invalidateQueries({
        queryKey: roomConfigsQK.detail(roomConfig.type),
      });
    },
  });

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {roomConfig.categories.map((category) => {
        const id = `select-${category.id}`;

        return (
          <div key={id} className="space-y-1.5">
            <label htmlFor={id} className="text-sm font-medium text-foreground">
              {category.label}
            </label>
            <Select
              items={category.options.map((option) => ({
                value: option.id,
                label: option.name,
              }))}
              value={selections[category.id] ?? ""}
              onValueChange={(value) => {
                if (value !== null)
                  mutate({
                    room: roomConfig.type,
                    config: { [category.id]: value },
                  });
              }}
            >
              <SelectTrigger id={id} className="w-full">
                <SelectValue placeholder="— Select —" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {category.options.map((option) => (
                    <SelectItem key={option.id} value={option.id}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        );
      })}
    </div>
  );
}
