import { http, HttpResponse } from "msw";
import type { RoomConfigPayload, RoomType } from "@/dtos/room-config.dto";

import { ROOM_CONFIGS } from "../data/rooms";

const STORAGE_KEY = "feeldx-room-configs";

const DEFAULT_CONFIG: Record<RoomType, RoomConfigPayload> = {
  kitchen: {},
  bathroom: {},
  "living-room": {},
  bedroom: {},
  laundry: {},
  "dining-room": {},
  "home-office": {},
  outdoor: {},
};

function loadFromStorage(): Record<RoomType, RoomConfigPayload> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<Record<RoomType, RoomConfigPayload>>;
      return { ...DEFAULT_CONFIG, ...parsed };
    }
  } catch {}
  return { ...DEFAULT_CONFIG };
}

function saveToStorage(config: Record<RoomType, RoomConfigPayload>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch {}
}

const preferredConfig = loadFromStorage();

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

    saveToStorage(preferredConfig);
    return HttpResponse.json(preferredConfig[room]);
  }),
];
