import type { CostTier } from '@/dtos/room-config.dto'

export interface CostRange {
  min: number
  max: number
}

const CATEGORY_COST_RANGES: Record<string, Record<CostTier, CostRange>> = {
  flooring:            { low: { min: 800,  max: 2000  }, medium: { min: 2500,  max: 6000  }, high: { min: 8000,  max: 20000 } },
  'wall-finish':       { low: { min: 300,  max: 800   }, medium: { min: 1000,  max: 3000  }, high: { min: 3500,  max: 9000  } },
  benchtop:            { low: { min: 800,  max: 1500  }, medium: { min: 2000,  max: 4000  }, high: { min: 5000,  max: 12000 } },
  cabinetry:           { low: { min: 3000, max: 6000  }, medium: { min: 7000,  max: 15000 }, high: { min: 18000, max: 40000 } },
  lighting:            { low: { min: 200,  max: 500   }, medium: { min: 600,   max: 1500  }, high: { min: 2000,  max: 6000  } },
  sofa:                { low: { min: 500,  max: 1200  }, medium: { min: 1500,  max: 3500  }, high: { min: 4000,  max: 10000 } },
  table:               { low: { min: 200,  max: 500   }, medium: { min: 600,   max: 1800  }, high: { min: 2000,  max: 6000  } },
  chair:               { low: { min: 200,  max: 600   }, medium: { min: 800,   max: 2000  }, high: { min: 2500,  max: 6000  } },
  bed:                 { low: { min: 500,  max: 1200  }, medium: { min: 1500,  max: 4000  }, high: { min: 5000,  max: 15000 } },
  'dining-table':      { low: { min: 300,  max: 800   }, medium: { min: 1000,  max: 3000  }, high: { min: 4000,  max: 12000 } },
  'dining-chair':      { low: { min: 400,  max: 1000  }, medium: { min: 1200,  max: 3000  }, high: { min: 3500,  max: 8000  } },
  desk:                { low: { min: 200,  max: 500   }, medium: { min: 600,   max: 1500  }, high: { min: 2000,  max: 5000  } },
  decking:             { low: { min: 1000, max: 2500  }, medium: { min: 3000,  max: 7000  }, high: { min: 8000,  max: 20000 } },
  'outdoor-furniture': { low: { min: 500,  max: 1500  }, medium: { min: 2000,  max: 5000  }, high: { min: 6000,  max: 15000 } },
}

const FALLBACK: Record<CostTier, CostRange> = {
  low:    { min: 200,  max: 800   },
  medium: { min: 800,  max: 3000  },
  high:   { min: 3000, max: 10000 },
}

export function getCostRange(categoryId: string, costTier: CostTier): CostRange {
  return CATEGORY_COST_RANGES[categoryId]?.[costTier] ?? FALLBACK[costTier]
}

export function sumCostRanges(ranges: CostRange[]): CostRange {
  return ranges.reduce(
    (acc, r) => ({ min: acc.min + r.min, max: acc.max + r.max }),
    { min: 0, max: 0 },
  )
}

export function formatCostRange({ min, max }: CostRange): string {
  const fmt = (n: number) => (n >= 1000 ? `$${(n / 1000).toFixed(0)}k` : `$${n}`)
  return `${fmt(min)} – ${fmt(max)}`
}
