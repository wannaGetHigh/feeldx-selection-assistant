import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { RoomConfigDto } from "@/dtos/room-config.dto";
import { useRoomConfigQuery } from "@/hooks/queries/use-room-configs-queries";

import { SelectionSummary } from "./ui/SelectionSummary";

interface ReviewSelectedSectionProps {
  roomConfig: RoomConfigDto;
}

const ReviewSelectedSection = ({ roomConfig }: ReviewSelectedSectionProps) => {
  const { data: selections = {} } = useRoomConfigQuery(roomConfig.type);

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
