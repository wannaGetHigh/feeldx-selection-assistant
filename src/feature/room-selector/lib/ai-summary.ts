import type { CostTier, RoomConfigDto, RoomConfigPayload } from "@/dtos/room-config.dto";
import type { AISummaryDto, AISummaryItemDto } from "@/dtos/ai-summary.dto";
import { getCostRange, sumCostRanges } from "@/lib/cost-ranges";

const COST_RANK: Record<CostTier, number> = { low: 0, medium: 1, high: 2 };

const CATEGORY_ID = {
  FLOORING: 'flooring',
  WALL_FINISH: 'wall-finish',
  LIGHTING: 'lighting',
} 

const CATEGORY_LABEL = {
  LIGHTING: 'Lighting',
};

function highestCostTier(tiers: CostTier[]): CostTier {
  if (tiers.length === 0) return "low";
  return tiers.reduce((prev, curr) =>
    COST_RANK[curr] > COST_RANK[prev] ? curr : prev,
  );
}

export function generateSummary(
  roomConfig: RoomConfigDto,
  selections: RoomConfigPayload,
): AISummaryDto {
  const selectedItems: AISummaryItemDto[] = [];
  const missingCategories: string[] = [];

  for (const category of roomConfig.categories) {
    const option = category.options.find(
      (o) => o.id === selections[category.id],
    );
    if (option) {
      selectedItems.push({
        categoryLabel: category.label,
        optionName: option.name,
        costTier: option.costTier,
        estimatedCost: getCostRange(category.id, option.costTier),
      });
    } else {
      missingCategories.push(category.label);
    }
  }

  const overallCostTier = highestCostTier(selectedItems.map((i) => i.costTier));
  const totalEstimatedCost = sumCostRanges(selectedItems.map((i) => i.estimatedCost));
  const warnings: string[] = [];

  const flooringOption = roomConfig.categories
    .find((c) => c.id === CATEGORY_ID.FLOORING)
    ?.options.find((o) => o.id === selections[CATEGORY_ID.FLOORING]);
  const wallOption = roomConfig.categories
    .find((c) => c.id === CATEGORY_ID.WALL_FINISH)
    ?.options.find((o) => o.id === selections[CATEGORY_ID.WALL_FINISH]);

  if (flooringOption?.shade === "dark" && wallOption?.shade === "dark") {
    warnings.push(
      "Both your flooring and wall finish are dark tones — the room may feel smaller and darker. Consider adding lighter accents or maximising lighting.",
    );
  }

  const hasMarble = selectedItems.some((i) =>
    i.optionName.toLowerCase().includes("marble"),
  );
  if (hasMarble) {
    warnings.push(
      "Marble selections typically incur premium costs for materials, sealing, and installation. Factor ongoing maintenance into your budget.",
    );
  }

  const highCostCount = selectedItems.filter(
    (i) => i.costTier === "high",
  ).length;
  if (highCostCount >= 3) {
    warnings.push(
      `You have ${highCostCount} high-cost selections — your overall budget may be significantly elevated.`,
    );
  }

  const recommendations: string[] = [];

  if (missingCategories.includes(CATEGORY_LABEL.LIGHTING)) {
    recommendations.push(
      "Add a lighting selection — it is one of the most impactful elements in any room.",
    );
  }

  const otherMissing = missingCategories.filter((c) => c !== CATEGORY_LABEL.LIGHTING);
  if (otherMissing.length > 0) {
    recommendations.push(
      `Complete your selections for: ${otherMissing.join(", ")}.`,
    );
  }

  if (overallCostTier === "high") {
    recommendations.push(
      "Consider swapping one or two high-cost items for mid-range alternatives to reduce cost without compromising the aesthetic.",
    );
  } else if (overallCostTier === "low") {
    recommendations.push(
      "Your selections are budget-friendly. You may have room to upgrade a key feature item for added impact.",
    );
  }

  if (flooringOption?.shade === "dark" && !selections[CATEGORY_ID.LIGHTING]) {
    recommendations.push(
      "With dark flooring, strategic lighting will be essential — prioritise your lighting selection.",
    );
  }

  if (warnings.length === 0 && missingCategories.length === 0) {
    recommendations.push(
      "Your selections look well-balanced. Consider visiting showrooms to verify material samples before finalising.",
    );
  }

  return {
    roomLabel: roomConfig.label,
    selectedItems,
    overallCostTier,
    totalEstimatedCost,
    warnings,
    missingCategories,
    recommendations,
  };
}
