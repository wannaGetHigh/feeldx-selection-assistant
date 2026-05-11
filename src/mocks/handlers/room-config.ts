import { http, HttpResponse } from "msw";
import { RoomTypeSchema, type RoomConfigPayload, type RoomType } from "@/dtos/room-config.dto";

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
  } catch (error) {
    if (import.meta.env.DEV) console.warn('[room-config] Failed to load from storage:', error);
  }
  return { ...DEFAULT_CONFIG };
}

function saveToStorage(config: Record<RoomType, RoomConfigPayload>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (error) {
    if (import.meta.env.DEV) console.warn('[room-config] Failed to save to storage:', error);
  }
}

let preferredConfig = loadFromStorage();

export const roomConfigHandlers = [
  http.get("/api/room-configs", () => {
    return HttpResponse.json(ROOM_CONFIGS);
  }),

  http.get("/api/room-configs/room", ({ request }) => {
    const roomParam = new URL(request.url).searchParams.get("room");
    const result = RoomTypeSchema.safeParse(roomParam);
    if (!result.success) {
      return HttpResponse.json({ error: "Invalid room type" }, { status: 400 });
    }
    return HttpResponse.json(preferredConfig[result.data] ?? null);
  }),

  http.put("/api/room-configs", async ({ request }) => {
    const { room, config } = (await request.json()) as {
      room: RoomType;
      config: RoomConfigPayload;
    };

    const updatedRoomConfig = { ...preferredConfig[room], ...config };
    preferredConfig = { ...preferredConfig, [room]: updatedRoomConfig };

    saveToStorage(preferredConfig);
    return HttpResponse.json(updatedRoomConfig);
  }),
];
