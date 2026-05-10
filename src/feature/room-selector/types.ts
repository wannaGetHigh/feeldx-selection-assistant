export type RoomType = 'kitchen' | 'bathroom' | 'living-room' | 'bedroom' | 'laundry'

export type CostTier = 'low' | 'medium' | 'high'
export type Shade = 'light' | 'neutral' | 'dark'

export interface MaterialOption {
  id: string
  name: string
  costTier: CostTier
  shade?: Shade
}

export interface SelectionCategory {
  id: string
  label: string
  options: MaterialOption[]
}

export interface RoomConfig {
  type: RoomType
  label: string
  emoji: string
  categories: SelectionCategory[]
}

export type Selections = Record<string, string>

export interface AISummaryItem {
  categoryLabel: string
  optionName: string
  costTier: CostTier
}

export interface AISummary {
  roomLabel: string
  selectedItems: AISummaryItem[]
  overallCostTier: CostTier
  warnings: string[]
  missingCategories: string[]
  recommendations: string[]
}
