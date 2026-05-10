import { http, HttpResponse } from 'msw'
import { generateSummary } from '@/feature/room-selector/lib/ai-summary'
import type { RoomConfig, Selections } from '@/feature/room-selector/types'

export const aiSummaryHandlers = [
  http.post('/api/ai/generate-summary', async ({ request }) => {
    try {
      const { roomConfig, selections } = await request.json() as { roomConfig: RoomConfig; selections: Selections }

      await new Promise((resolve) => setTimeout(resolve, 500))

      const summary = generateSummary(roomConfig, selections)
      return HttpResponse.json(summary)
    } catch (err) {
      console.error('[MSW] /api/ai/generate-summary handler error:', err)
      return HttpResponse.json({ message: 'Failed to generate summary' }, { status: 500 })
    }
  }),
]
