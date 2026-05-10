import { Badge } from '@/components/ui/badge'
import type { AISummaryDto } from '@/dtos/ai-summary.dto'
import type { CostTier } from '@/dtos/room-config.dto'

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
    <div className="space-y-5">
      <section>
        <h3 className="text-sm font-semibold mb-2">Your Selections</h3>
        {summary.selectedItems.length > 0 ? (
          <ul className="space-y-1">
            {summary.selectedItems.map((item) => (
              <li key={item.categoryLabel} className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{item.categoryLabel}</span>
                <span className="font-medium">{item.optionName}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">No items selected yet.</p>
        )}
      </section>

      <section>
        <h3 className="text-sm font-semibold mb-1">Overall Cost Estimate</h3>
        <p className={`text-sm font-medium ${COST_COLOR[summary.overallCostTier]}`}>
          {COST_LABEL[summary.overallCostTier]}
        </p>
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
