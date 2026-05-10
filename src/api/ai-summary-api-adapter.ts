import { serializeData } from "@/lib/serialize";

import type { RoomConfigDto, RoomConfigPayload } from "@/dtos/room-config.dto";
import { AISummaryDtoSchema, type AISummaryDto } from "@/dtos/ai-summary.dto";

import { BaseApiAdapterClass } from "./base-api-adapter";

export class AiSummaryApiAdapterClass extends BaseApiAdapterClass {
  private getSummaryUrl() {
    return "/ai/generate-summary";
  }

  async generateSummary(roomConfig: RoomConfigDto, selections: RoomConfigPayload) {
    const raw = await this.post<AISummaryDto>(this.getSummaryUrl(), {
      roomConfig,
      selections,
    });
    return serializeData(raw, AISummaryDtoSchema);
  }
}
