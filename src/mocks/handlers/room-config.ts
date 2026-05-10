import { http, HttpResponse } from "msw";
import type { RoomConfigPayload, RoomType } from "@/dtos/room-config.dto";

import { ROOM_CONFIGS } from "../data/rooms";

const preferredConfig: Record<RoomType, RoomConfigPayload> = {
  kitchen: {},
  bathroom: {},
  "living-room": {},
  bedroom: {},
  laundry: {},
};

export const roomConfigHandlers = [
  http.get("/api/room-configs", () => {
    return HttpResponse.json(ROOM_CONFIGS);
  }),

  http.get("/api/room-configs/room", ({ request }) => {
    const room = new URL(request.url).searchParams.get("room") as RoomType;
    return HttpResponse.json(preferredConfig[room] ?? null);
  }),

  http.put("/api/room-configs", async ({ request }) => {
    const { room, config } = (await request.json()) as {
      room: RoomType;
      config: RoomConfigPayload;
    };

    preferredConfig[room] = {
      ...preferredConfig[room],
      ...config,
    };

    return HttpResponse.json(preferredConfig[room]);
  }),
];
