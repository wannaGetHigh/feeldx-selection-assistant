import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { RoomConfigDto } from "@/dtos/room-config.dto";

import ReviewSelectedSection from "./components/ReviewSelectedSection";
import { SelectionPanel } from "./components/SelectionPanel";
import { SummarySection } from "./components/SummarySection";

interface SelectionsSectionProps {
  roomConfig: RoomConfigDto;
}

export function SelectionsSection({ roomConfig }: SelectionsSectionProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">
              {roomConfig.emoji} {roomConfig.label} — Materials &amp; Furniture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SelectionPanel roomConfig={roomConfig} />
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-1">
        <ReviewSelectedSection roomConfig={roomConfig} />
      </div>

      <div className="lg:col-span-2">
        <SummarySection roomConfig={roomConfig} />
      </div>
    </div>
  );
}
