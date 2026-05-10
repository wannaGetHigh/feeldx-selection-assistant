import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { aiSummaryApi } from "@/api";
import type { AISummary, RoomConfig, Selections } from "@/feature/room-selector/types";

export function useAiSummaryMutation(
  options?: UseMutationOptions<
    AISummary | null,
    Error,
    { roomConfig: RoomConfig; selections: Selections }
  >,
) {
  return useMutation({
    mutationFn: ({ roomConfig, selections }) =>
      aiSummaryApi.generateSummary(roomConfig, selections),
    ...options,
  });
}
