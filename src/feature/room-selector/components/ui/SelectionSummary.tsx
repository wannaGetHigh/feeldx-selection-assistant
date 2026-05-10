import { match } from 'ts-pattern'

import { Badge } from '@/components/ui/badge'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import type { CostTier, RoomConfigDto, RoomConfigPayload } from '@/dtos/room-config.dto'

interface SelectionSummaryProps {
  roomConfig: RoomConfigDto
  selections: RoomConfigPayload
}

function getCostBadgeVariant(tier: CostTier): 'default' | 'secondary' | 'destructive' {
  return match(tier)
    .with('low', () => 'secondary' as const)
    .with('medium', () => 'default' as const)
    .with('high', () => 'destructive' as const)
    .exhaustive()
}

function getCostTierDescription(tier: CostTier): string {
  return match(tier)
    .with('low', () => 'Budget-friendly option with minimal cost impact')
    .with('medium', () => 'Mid-range option with moderate cost impact')
    .with('high', () => 'Premium option with significant cost impact')
    .exhaustive()
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
