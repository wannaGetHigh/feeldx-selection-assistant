import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { generateAiSummary } from "@/api/ai-summary";
import type {
  AISummary,
  RoomConfig,
  Selections,
} from "@/feature/room-selector/types";

export function useAiSummaryMutation(
  options?: UseMutationOptions<
    AISummary,
    Error,
    { roomConfig: RoomConfig; selections: Selections }
  >,
) {
  return useMutation({
    mutationFn: ({ roomConfig, selections }) =>
      generateAiSummary(roomConfig, selections),
    ...options,
  });
}
