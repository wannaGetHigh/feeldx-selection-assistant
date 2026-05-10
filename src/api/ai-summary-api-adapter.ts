import { AISummaryDtoSchema, type AISummaryDto } from "@/dtos/ai-summary.dto";
import type { RoomConfig, Selections } from "@/feature/room-selector/types";
import { serializeData } from "@/lib/serialize";

import { BaseApiAdapterClass } from "./base-api-adapter";

export class AiSummaryApiAdapterClass extends BaseApiAdapterClass {
  private getSummaryUrl() {
    return "/ai/generate-summary";
  }

  async generateSummary(roomConfig: RoomConfig, selections: Selections) {
    const raw = await this.post<AISummaryDto>(this.getSummaryUrl(), {
      roomConfig,
      selections,
    });
    return serializeData(raw, AISummaryDtoSchema);
  }
}
