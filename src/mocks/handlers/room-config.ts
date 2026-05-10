import { http, HttpResponse } from 'msw'
import { ROOM_CONFIGS } from '@/feature/room-selector/data/rooms'

export const roomConfigHandlers = [
  http.get('/api/room-configs', () => {
    return HttpResponse.json(ROOM_CONFIGS)
  }),
]
