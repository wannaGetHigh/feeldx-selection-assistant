import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { RoomConfig, Selections } from "../types";

interface SelectionPanelProps {
  roomConfig: RoomConfig;
  selections: Selections;
  onChange: (categoryId: string, optionId: string) => void;
}

export function SelectionPanel({
  roomConfig,
  selections,
  onChange,
}: SelectionPanelProps) {
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
              items={category.options.map(option => ({
                value: option.id,
                label: option.name
              }))}
              value={selections[category.id] ?? ""}
              onValueChange={(value) => {
                if (value !== null) onChange(category.id, value);
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
