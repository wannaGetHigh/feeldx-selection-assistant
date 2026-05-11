import { AppTabsList } from "@/components/shared/app-tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { SelectionsSection } from "@/feature/room-selector";
import RoomSelectorHeader from "@/feature/room-selector/components/ui/RoomSelectorHeader";
import { RoomSelectorSection } from "@/feature/room-selector/components/ui/RoomSelectorSection";
import { useRoomConfigsQuery } from "@/hooks/queries/use-room-configs-queries";

export function RoomSelectionPage() {
  const { data: roomConfigs = [], isLoading, isError } = useRoomConfigsQuery();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto p-4 sm:p-8 space-y-6">
        <RoomSelectorHeader />

        {isLoading ? (
          <Skeleton className="h-10 w-full" />
        ) : isError ? (
          <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-center text-sm text-destructive">
            Failed to load room configurations. Please refresh the page.
          </div>
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
              <TabsContent
                key={config.type}
                value={config.type}
                className="animate-in fade-in-0 slide-in-from-bottom-2 duration-200"
              >
                <SelectionsSection roomConfig={config} />
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </div>
  );
}
