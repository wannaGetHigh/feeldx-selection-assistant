import { apiClient } from '@/lib/axios'
import type { RoomConfig, Selections, AISummary } from '@/feature/room-selector/types'

export async function generateAiSummary(roomConfig: RoomConfig, selections: Selections): Promise<AISummary> {
  const { data } = await apiClient.post<AISummary>('/ai/generate-summary', { roomConfig, selections })
  return data
}
