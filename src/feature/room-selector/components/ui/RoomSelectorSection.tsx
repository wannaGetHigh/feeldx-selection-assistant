import type { PropsWithChildren } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function RoomSelectorSection({ children }: PropsWithChildren) {
  return (
    <Card>
      <CardHeader className="pb-1">
        <CardTitle className="text-base">Select a Room</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
