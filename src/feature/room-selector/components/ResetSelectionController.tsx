import { Button } from "@/components/ui/button";
import type { RoomConfigDto } from "@/dtos/room-config.dto";
import { useUpdateRoomConfigMutation } from "@/hooks/mutations/use-room-configs-mutation";
import { roomConfigsQK } from "@/hooks/queries/use-room-configs-queries";
import { useQueryClient } from "@tanstack/react-query";

interface ResetSelectionControllerProps {
  roomConfig: RoomConfigDto;
}
const ResetSelectionController = ({
  roomConfig,
}: ResetSelectionControllerProps) => {
  const queryClient = useQueryClient();
  const { mutate } = useUpdateRoomConfigMutation({
    onSettled(_data, _err, variables) {
      queryClient.invalidateQueries({
        queryKey: roomConfigsQK.detail(variables.room),
      });
    },
  });

  const handleReset = () => {
    mutate({
      room: roomConfig.type,
      config: {},
    });
  };

  return (
    <Button variant="outline" className='h-6' onClick={handleReset}>
      Reset
    </Button>
  );
};

export default ResetSelectionController;
