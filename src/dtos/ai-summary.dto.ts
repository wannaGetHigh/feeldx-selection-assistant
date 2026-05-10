import { z } from 'zod'

import { CostTierSchema } from '@/dtos/room-config.dto'

const AISummaryItemDtoSchema = z.object({
  categoryLabel: z.string(),
  optionName: z.string(),
  costTier: CostTierSchema,
})
export type AISummaryItemDto = z.infer<typeof AISummaryItemDtoSchema>

export const AISummaryDtoSchema = z.object({
  roomLabel: z.string(),
  selectedItems: z.array(AISummaryItemDtoSchema),
  overallCostTier: CostTierSchema,
  warnings: z.array(z.string()),
  missingCategories: z.array(z.string()),
  recommendations: z.array(z.string()),
})
export type AISummaryDto = z.infer<typeof AISummaryDtoSchema>
