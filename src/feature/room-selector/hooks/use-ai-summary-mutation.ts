import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

import { aiSummaryApi } from "@/api";
import type { AISummaryDto } from "@/dtos/ai-summary.dto";
import type { RoomConfigDto, RoomConfigPayload } from "@/dtos/room-config.dto";

export function useAiSummaryMutation(
  options?: UseMutationOptions<
    AISummaryDto | null,
    Error,
    { roomConfig: RoomConfigDto; selections: RoomConfigPayload }
  >,
) {
  return useMutation({
    mutationFn: ({ roomConfig, selections }) =>
      aiSummaryApi.generateSummary(roomConfig, selections),
    ...options,
  });
}
