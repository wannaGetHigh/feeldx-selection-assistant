import { lazy, Suspense } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import type { RoomConfigDto } from "@/dtos/room-config.dto";

import { SelectionPanel } from "./components/SelectionPanel";
import SectionContainer from "./components/ui/SectionContainer";
import { Trigger } from "./components/ui/SummaryButtons";

const ReviewSelectedSection = lazy(
  () => import("./components/ReviewSelectedSection"),
);

const SummarySection = lazy(() => import("./components/SummarySection"));

interface SelectionsSectionProps {
  roomConfig: RoomConfigDto;
}

export function SelectionsSection({ roomConfig }: SelectionsSectionProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <SectionContainer title={`${roomConfig.emoji} ${roomConfig.label} — Materials & Furniture`}>
          <SelectionPanel roomConfig={roomConfig} />
        </SectionContainer>
      </div>

      <div className="lg:col-span-1">
        <Suspense fallback={<Skeleton className="w-full h-full" />}>
          <ReviewSelectedSection roomConfig={roomConfig} />
        </Suspense>
      </div>

      <div className="lg:col-span-2">
        <Suspense
          fallback={
            <SectionContainer title="AI Summary">
              <Trigger />
            </SectionContainer>
          }
        >
          <SummarySection roomConfig={roomConfig} />
        </Suspense>
      </div>
    </div>
  );
}
