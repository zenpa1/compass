"use client";

export type CalendarTab = "personal tasks" | "North Studio works";

const workStatuses: CalendarTab[] = ["personal tasks", "North Studio works"];

type CalendarTabsProps = {
  selected: CalendarTab;
  onChange: (status: CalendarTab) => void;
};

export default function CalendarTabs({ selected, onChange }: CalendarTabsProps) {
  return (
    <div className="flex w-fit rounded-md border border-slate-600 overflow-hidden text-sm">
      {workStatuses.map((status, i) => (
        <button
          key={status}
          onClick={() => onChange(status)}
          className={`px-3 py-1.5 font-medium capitalize transition-colors ${
            i !== 0 ? "border-l border-slate-600" : ""
          } ${
            selected === status
              ? "bg-slate-800 text-white"
              : "bg-transparent text-slate-400 hover:text-white hover:bg-slate-700"
          }`}
        >
          {status}
        </button>
      ))}
    </div>
  );
}