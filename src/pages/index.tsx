import { AppTabsList } from "@/components/shared/app-tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { SelectionsSection } from "@/feature/room-selector";
import RoomSelectorHeader from "@/feature/room-selector/components/ui/RoomSelectorHeader";
import { RoomSelectorSection } from "@/feature/room-selector/components/ui/RoomSelectorSection";
import { useRoomConfigs } from "@/queries/use-room-config-queries";

export function RoomSelectionPage() {
  const { data: roomConfigs = [], isLoading } = useRoomConfigs();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto p-4 sm:p-8 space-y-6">
        <RoomSelectorHeader />

        {isLoading ? (
          <Skeleton className="h-10 w-full" />
        ) : (
          <Tabs className="gap-6">
            <RoomSelectorSection>
              <AppTabsList
                tabs={roomConfigs.map((config) => ({
                  value: config.type,
                  label: `${config.emoji} ${config.label}`,
                }))}
                variant="line"
                className="w-full bg-neutral-100"
              />
            </RoomSelectorSection>

            {roomConfigs.map((config) => (
              <TabsContent key={config.type} value={config.type}>
                <SelectionsSection roomConfig={config} />
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </div>
  );
}
