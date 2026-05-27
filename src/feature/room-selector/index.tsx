import { lazy, Suspense } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import type { RoomConfigDto } from "@/dtos/room-config.dto";
import ResetSelectionController from "./components/ResetSelectionController";
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
		<div className="flex flex-col lg:flex-row gap-6">
			<div className="flex flex-col gap-6 lg:flex-2">
				<SectionContainer
					title={`${roomConfig.emoji} ${roomConfig.label} — Materials & Furniture`}
					actions={<ResetSelectionController roomConfig={roomConfig} />}
				>
					<SelectionPanel roomConfig={roomConfig} />
				</SectionContainer>

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

			<div className="flex-1">
				<Suspense fallback={<Skeleton className="w-full h-full" />}>
					<ReviewSelectedSection roomConfig={roomConfig} />
				</Suspense>
			</div>
		</div>
	);
}
