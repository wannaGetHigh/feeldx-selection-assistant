import { setupWorker } from 'msw/browser'
import { aiSummaryHandlers } from './handlers/ai-summary'

export const worker = setupWorker(...aiSummaryHandlers)
