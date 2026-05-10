import match from 'match-ts'

import { Badge } from '@/components/ui/badge'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import type { CostTier, RoomConfig, Selections } from '@/feature/room-selector/types'

interface SelectionSummaryProps {
  roomConfig: RoomConfig
  selections: Selections
}

function getCostBadgeVariant(tier: CostTier): 'default' | 'secondary' | 'destructive' {
  return match(tier)
    .on((t) => t === 'low', () => 'secondary' as const)
    .on((t) => t === 'medium', () => 'default' as const)
    .on((t: CostTier) => t === 'high', () => 'destructive' as const)
    .otherwise(() => { throw new Error(`Unknown cost tier: ${tier}`) })
}

function getCostTierDescription(tier: CostTier): string {
  return match(tier)
    .on((t) => t === 'low', () => 'Budget-friendly option with minimal cost impact')
    .on((t) => t === 'medium', () => 'Mid-range option with moderate cost impact')
    .on((t: CostTier) => t === 'high', () => 'Premium option with significant cost impact')
    .otherwise(() => { throw new Error(`Unknown cost tier: ${tier}`) })
}

export function SelectionSummary({ roomConfig, selections }: SelectionSummaryProps) {
  return (
    <TooltipProvider>
    <div className="space-y-0">
      {roomConfig.categories.map((category) => {
        const option = category.options.find((o) => o.id === selections[category.id])
        return (
          <div
            key={category.id}
            className="flex items-center justify-between gap-2 py-2.5 border-b border-border last:border-0"
          >
            <span className="text-sm text-muted-foreground shrink-0">{category.label}</span>
            {option ? (
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-sm font-medium truncate">{option.name}</span>
                <Tooltip>
                  <TooltipTrigger render={<span />}>
                    <Badge variant={getCostBadgeVariant(option.costTier)} className="text-xs capitalize shrink-0">
                      {option.costTier}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>{getCostTierDescription(option.costTier)}</TooltipContent>
                </Tooltip>
              </div>
            ) : (
              <span className="text-sm text-muted-foreground italic">Not selected</span>
            )}
          </div>
        )
      })}
    </div>
    </TooltipProvider>
  )
}
