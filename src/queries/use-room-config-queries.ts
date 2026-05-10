import { roomConfigApi } from "@/api";
import { createQueryHook } from "@/lib/tanstack-query";

const roomQK = {
  _base: "room-configs",
  all: () => [roomQK._base],
};

export const useRoomConfigs = createQueryHook(
  roomQK.all,
  roomConfigApi.listRoomConfigs.bind(roomConfigApi),
);
