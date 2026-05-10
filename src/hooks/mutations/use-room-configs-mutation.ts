import { useMutation } from "@tanstack/react-query";

import { roomConfigApi } from "@/api";
import type { RoomConfigPayload, RoomType } from "@/dtos/room-config.dto";
import type { UseCustomMutationOptions } from "@/lib/tanstack-query";

export const useUpdateRoomConfigMutation = (
  options?: UseCustomMutationOptions<
    unknown,
    { room: RoomType; config: RoomConfigPayload }
  >,
) => {
  return useMutation({
    mutationFn: roomConfigApi.updateRoomConfig.bind(roomConfigApi),
    ...options,
  });
};
