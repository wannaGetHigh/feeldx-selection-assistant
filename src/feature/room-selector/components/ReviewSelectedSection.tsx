import type { RoomConfigDto } from "@/dtos/room-config.dto";
import { useRoomConfigQuery } from "@/hooks/queries/use-room-configs-queries";

import SectionContainer from "./ui/SectionContainer";
import { SelectionSummary } from "./ui/SelectionSummary";

interface ReviewSelectedSectionProps {
  roomConfig: RoomConfigDto;
}

const ReviewSelectedSection = ({ roomConfig }: ReviewSelectedSectionProps) => {
  const { data: selections = {} } = useRoomConfigQuery(roomConfig.type);

  return (
    <SectionContainer title='Selected Items'>
      <SelectionSummary roomConfig={roomConfig} selections={selections} />
    </SectionContainer>
  )
};

export default ReviewSelectedSection;
