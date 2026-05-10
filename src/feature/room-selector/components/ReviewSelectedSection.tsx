import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { SelectionSummary } from "./ui/SelectionSummary";
import type { RoomConfig, Selections } from "../types";

interface ReviewSelectedSectionProps {
  roomConfig: RoomConfig;
  selections: Selections;
}

const ReviewSelectedSection = ({ roomConfig, selections }: ReviewSelectedSectionProps) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Selected Items</CardTitle>
      </CardHeader>
      <CardContent>
        <SelectionSummary roomConfig={roomConfig} selections={selections} />
      </CardContent>
    </Card>
  );
};

export default ReviewSelectedSection;
