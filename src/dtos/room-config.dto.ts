import { z } from 'zod'

const MaterialOptionDtoSchema = z.object({
  id: z.string(),
  name: z.string(),
  costTier: z.enum(['low', 'medium', 'high']),
  shade: z.enum(['light', 'neutral', 'dark']).optional(),
})

const SelectionCategoryDtoSchema = z.object({
  id: z.string(),
  label: z.string(),
  options: z.array(MaterialOptionDtoSchema),
})

export const RoomConfigDtoSchema = z.object({
  type: z.enum(['kitchen', 'bathroom', 'living-room', 'bedroom', 'laundry']),
  label: z.string(),
  emoji: z.string(),
  categories: z.array(SelectionCategoryDtoSchema),
})

export type RoomConfigDto = z.infer<typeof RoomConfigDtoSchema>
