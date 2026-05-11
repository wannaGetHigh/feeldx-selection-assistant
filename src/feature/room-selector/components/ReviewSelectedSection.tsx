import type { RoomConfigDto } from "@/dtos/room-config.dto";
import { useRoomConfigQuery } from "@/hooks/queries/use-room-configs-queries";

import { PreviewGallery } from "./PreviewGallery";
import SectionContainer from "./ui/SectionContainer";
import { SelectionSummary } from "./ui/SelectionSummary";

interface ReviewSelectedSectionProps {
  roomConfig: RoomConfigDto;
}

const ReviewSelectedSection = ({ roomConfig }: ReviewSelectedSectionProps) => {
  const { data: selections = {} } = useRoomConfigQuery(roomConfig.type);

  return (
    <SectionContainer title='Selected Items'>
      <PreviewGallery roomConfig={roomConfig} selections={selections} />
      <div className="mt-3 border-t border-border pt-3">
        <SelectionSummary roomConfig={roomConfig} selections={selections} />
      </div>
    </SectionContainer>
  )
};

export default ReviewSelectedSection;
