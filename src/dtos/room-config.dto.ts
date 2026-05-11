import { z } from 'zod'

export const CostTierSchema = z.enum(['low', 'medium', 'high'])
export type CostTier = z.infer<typeof CostTierSchema>

export const ShadeSchema = z.enum(['light', 'neutral', 'dark'])
export type Shade = z.infer<typeof ShadeSchema>

export const MaterialOptionDtoSchema = z.object({
  id: z.string(),
  name: z.string(),
  costTier: CostTierSchema,
  shade: ShadeSchema.optional(),
  imageUrl: z.string().optional(),
})
export type MaterialOptionDto = z.infer<typeof MaterialOptionDtoSchema>

export const SelectionCategoryDtoSchema = z.object({
  id: z.string(),
  label: z.string(),
  options: z.array(MaterialOptionDtoSchema),
})
export type SelectionCategoryDto = z.infer<typeof SelectionCategoryDtoSchema>

export const RoomTypeSchema = z.enum(['kitchen', 'bathroom', 'living-room', 'bedroom', 'laundry', 'dining-room', 'home-office', 'outdoor'])
export type RoomType = z.infer<typeof RoomTypeSchema>

export const RoomConfigDtoSchema = z.object({
  type: RoomTypeSchema,
  label: z.string(),
  emoji: z.string(),
  categories: z.array(SelectionCategoryDtoSchema),
})

export type RoomConfigDto = z.infer<typeof RoomConfigDtoSchema>

export type RoomConfigPayload = Record<string, string>
