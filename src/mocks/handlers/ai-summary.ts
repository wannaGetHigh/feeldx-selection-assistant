import { http, HttpResponse } from 'msw'

import type { RoomConfigDto, RoomConfigPayload } from '@/dtos/room-config.dto'
import { generateSummary } from '@/feature/room-selector/lib/ai-summary'

export const aiSummaryHandlers = [
  http.post('/api/ai/generate-summary', async ({ request }) => {
    try {
      const { roomConfig, selections } = await request.json() as { roomConfig: RoomConfigDto; selections: RoomConfigPayload }

      await new Promise((resolve) => setTimeout(resolve, 500))

      const summary = generateSummary(roomConfig, selections)
      return HttpResponse.json(summary)
    } catch (err) {
      console.error('[MSW] /api/ai/generate-summary handler error:', err)
      return HttpResponse.json({ message: 'Failed to generate summary' }, { status: 500 })
    }
  }),
]
