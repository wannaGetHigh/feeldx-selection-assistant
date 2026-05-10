import { z } from 'zod'

import { CostTierSchema } from '@/dtos/room-config.dto'

const CostRangeSchema = z.object({ min: z.number(), max: z.number() })

const AISummaryItemDtoSchema = z.object({
  categoryLabel: z.string(),
  optionName: z.string(),
  costTier: CostTierSchema,
  estimatedCost: CostRangeSchema,
})
export type AISummaryItemDto = z.infer<typeof AISummaryItemDtoSchema>

export const AISummaryDtoSchema = z.object({
  roomLabel: z.string(),
  selectedItems: z.array(AISummaryItemDtoSchema),
  overallCostTier: CostTierSchema,
  totalEstimatedCost: CostRangeSchema,
  warnings: z.array(z.string()),
  missingCategories: z.array(z.string()),
  recommendations: z.array(z.string()),
})
export type AISummaryDto = z.infer<typeof AISummaryDtoSchema>
