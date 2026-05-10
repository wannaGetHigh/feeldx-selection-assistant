import { z } from 'zod'

const AISummaryItemDtoSchema = z.object({
  categoryLabel: z.string(),
  optionName: z.string(),
  costTier: z.enum(['low', 'medium', 'high']),
})

export const AISummaryDtoSchema = z.object({
  roomLabel: z.string(),
  selectedItems: z.array(AISummaryItemDtoSchema),
  overallCostTier: z.enum(['low', 'medium', 'high']),
  warnings: z.array(z.string()),
  missingCategories: z.array(z.string()),
  recommendations: z.array(z.string()),
})

export type AISummaryDto = z.infer<typeof AISummaryDtoSchema>
