"use client";

import { Button } from "@/components/ui/button";

export type CalendarTab = "personal tasks" | "North Studio works";

const workStatuses: CalendarTab[] = ["personal tasks", "North Studio works"];

type CalendarTabsProps = {
  selected: CalendarTab;
  onChange: (status: CalendarTab) => void;
};

export default function CalendarTabs({
  selected,
  onChange,
}: CalendarTabsProps) {
  return (
    <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:justify-end">
      {workStatuses.map((status) => (
        <Button
          key={status}
          variant={selected === status ? "default" : "outline"}
          onClick={() => onChange(status)}
          className="h-8 px-3 text-xs capitalize sm:h-9 sm:text-sm"
        >
          {status}
        </Button>
      ))}
    </div>
  );
}
