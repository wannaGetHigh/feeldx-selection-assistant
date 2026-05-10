import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import ReviewSelectedSection from "./components/ReviewSelectedSection";
import { SelectionPanel } from "./components/SelectionPanel";
import { SummarySection } from "./components/SummarySection";
import type { RoomConfig, Selections } from "./types";

interface SelectionsSectionProps {
  roomConfig: RoomConfig;
}

export function SelectionsSection({ roomConfig }: SelectionsSectionProps) {
  const [selections, setSelections] = useState<Selections>({});

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
            <SelectionPanel
              roomConfig={roomConfig}
              selections={selections}
              onChange={(categoryId, optionId) =>
                setSelections({ ...selections, [categoryId]: optionId })
              }
            />
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-1">
        <ReviewSelectedSection
          roomConfig={roomConfig}
          selections={selections}
        />
      </div>

      <div className="lg:col-span-2">
        <SummarySection roomConfig={roomConfig} selections={selections} />
      </div>
    </div>
  );
}
