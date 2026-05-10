import { Badge } from '@/components/ui/badge'
import type { AISummaryDto } from '@/dtos/ai-summary.dto'
import type { CostTier } from '@/dtos/room-config.dto'
import { formatCostRange } from '@/lib/cost-ranges'

interface AISummaryPanelProps {
  summary: AISummaryDto
}

const COST_LABEL: Record<CostTier, string> = {
  low: 'Low — budget-friendly range',
  medium: 'Medium — mid-range investment',
  high: 'High — premium finish',
}

const COST_COLOR: Record<CostTier, string> = {
  low: 'text-emerald-600',
  medium: 'text-amber-600',
  high: 'text-red-600',
}

export function AISummaryPanel({ summary }: AISummaryPanelProps) {
  return (
    <div className="space-y-5 animate-in fade-in-0 duration-300">
      <section>
        <h3 className="text-sm font-semibold mb-2">Your Selections</h3>
        {summary.selectedItems.length > 0 ? (
          <ul className="space-y-1.5">
            {summary.selectedItems.map((item) => (
              <li key={item.categoryLabel} className="flex items-center justify-between text-sm gap-3">
                <span className="text-muted-foreground shrink-0">{item.categoryLabel}</span>
                <div className="flex items-center gap-2 min-w-0">
                  <span className="font-medium truncate">{item.optionName}</span>
                  <span className="text-xs text-muted-foreground shrink-0 tabular-nums">
                    {formatCostRange(item.estimatedCost)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">No items selected yet.</p>
        )}
      </section>

      <section className="rounded-md bg-muted/50 px-3 py-2.5 space-y-0.5">
        <h3 className="text-sm font-semibold">Estimated Total</h3>
        <p className={`text-lg font-bold tabular-nums ${COST_COLOR[summary.overallCostTier]}`}>
          {formatCostRange(summary.totalEstimatedCost)}
        </p>
        <p className="text-xs text-muted-foreground">{COST_LABEL[summary.overallCostTier]}</p>
      </section>

      {summary.missingCategories.length > 0 && (
        <section>
          <h3 className="text-sm font-semibold mb-2">Missing Selections</h3>
          <div className="flex flex-wrap gap-1.5">
            {summary.missingCategories.map((cat) => (
              <Badge key={cat} variant="outline" className="text-xs">
                {cat}
              </Badge>
            ))}
          </div>
        </section>
      )}

      {summary.warnings.length > 0 && (
        <section>
          <h3 className="text-sm font-semibold mb-2">Design Notes</h3>
          <ul className="space-y-2">
            {summary.warnings.map((warning, i) => (
              <li key={i} className="flex gap-2 text-sm">
                <span className="text-amber-500 shrink-0">⚠</span>
                <span>{warning}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {summary.recommendations.length > 0 && (
        <section>
          <h3 className="text-sm font-semibold mb-2">Recommended Next Actions</h3>
          <ul className="space-y-2">
            {summary.recommendations.map((rec, i) => (
              <li key={i} className="flex gap-2 text-sm">
                <span className="text-blue-500 shrink-0">→</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
