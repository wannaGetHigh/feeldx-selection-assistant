import type { ComponentProps, ReactNode } from "react";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AppTabsProps<T> {
  tabs: Array<{ value: T; label: ReactNode }>;
}
export function AppTabsList<T extends string>({
  tabs,
  ...delegated
}: AppTabsProps<T> & ComponentProps<typeof TabsList>) {
  return (
    <TabsList {...delegated}>
      {tabs.map(({ value, label }) => (
        <TabsTrigger key={value} value={value}>
          {label}
        </TabsTrigger>
      ))}
    </TabsList>
  );
}
