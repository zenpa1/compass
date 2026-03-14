"use client";

import { Button } from "@/components/ui/button";

export type CalendarTab = "personal tasks" | "North Studio works";

const workStatuses: CalendarTab[] = [
  "personal tasks",
  "North Studio works"
];

type CalendarTabsProps = {
  selected: CalendarTab;
  onChange: (status: CalendarTab) => void;
};

export default function CalendarTabs({ selected, onChange }: CalendarTabsProps) {
  return (
    <div className="flex items-center gap-2">
      {workStatuses.map((status) => (
        <Button
          key={status}
          variant={selected === status ? "default" : "outline"}
          onClick={() => onChange(status)}
          className="capitalize"
        >
          {status}
        </Button>
      ))}
    </div>
  );
}