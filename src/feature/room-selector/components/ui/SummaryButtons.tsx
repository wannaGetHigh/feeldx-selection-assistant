import type { HTMLAttributes } from "react";
import { Button } from "@/components/ui/button";

export const Trigger = (props: HTMLAttributes<HTMLButtonElement>) => (
  <Button className="w-full" size="sm" {...props}>
    Generate AI Summary
  </Button>
);