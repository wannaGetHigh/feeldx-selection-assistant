import { setupWorker } from 'msw/browser'
import { aiSummaryHandlers } from './handlers/ai-summary'
import { roomConfigHandlers } from './handlers/room-config'

export const worker = setupWorker(...aiSummaryHandlers, ...roomConfigHandlers)
