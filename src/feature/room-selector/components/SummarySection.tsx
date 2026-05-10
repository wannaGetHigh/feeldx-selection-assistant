import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import { useAiSummaryMutation } from "../hooks/use-ai-summary-mutation";
import type { RoomConfig, Selections } from "../types";
import { AISummaryPanel } from "./ui/AISummaryPanel";

interface SummarySectionProps {
  roomConfig: RoomConfig;
  selections: Selections;
}

export function SummarySection({
  roomConfig,
  selections,
}: SummarySectionProps) {
  const {
    mutate,
    data: aiSummary,
    isPending,
    isError,
    reset,
  } = useAiSummaryMutation();

  function handleGenerate() {
    mutate({ roomConfig, selections });
  }

  return (
    <Card>
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <CardTitle className="text-base">AI Summary</CardTitle>
        {aiSummary && !isPending && (
          <Button
            variant="ghost"
            size="sm"
            onClick={reset}
            className="text-xs text-muted-foreground h-auto py-1"
          >
            Clear
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {isPending ? (
          <div className="space-y-3">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ) : aiSummary ? (
          <>
            <AISummaryPanel summary={aiSummary} />
            <Button
              variant="outline"
              size="sm"
              onClick={handleGenerate}
              className="mt-4 w-full"
            >
              Regenerate
            </Button>
          </>
        ) : isError ? (
          <div className="space-y-3">
            <p className="text-sm text-destructive">
              Failed to generate summary. Please try again.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={handleGenerate}
              className="w-full"
            >
              Retry
            </Button>
          </div>
        ) : (
          <Button onClick={handleGenerate} className="w-full" size="sm">
            Generate AI Summary
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
