import { roomConfigApi } from "@/api";
import type { RoomType } from "@/dtos/room-config.dto";
import { createQueryHook } from "@/lib/tanstack-query";

export const roomConfigsQK = {
  _base: "room-configs",
  all: () => [roomConfigsQK._base],
  detail: (room: RoomType) => [...roomConfigsQK.all(), room]
};

export const useRoomConfigsQuery = createQueryHook(
  roomConfigsQK.all,
  roomConfigApi.listRoomConfigs.bind(roomConfigApi),
);

export const useRoomConfigQuery = createQueryHook(
  roomConfigsQK.detail,
  roomConfigApi.roomConfig.bind(roomConfigApi)
)
