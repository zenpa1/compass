"use client";

import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import CalendarTabs, { CalendarTab } from "@/components/features/CalendarTabs";

export default function CalendarPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [selectedTab, setSelectedTab] = useState<CalendarTab>("personal tasks");

  const handleDateClick = (arg: any) => {
    alert("Date clicked: " + arg.dateStr);
  };

  useEffect(() => {
    async function fetchEvents() {
      const tabParam =
        selectedTab === "North Studio works"
          ? "works"
          : "tasks";

      const res = await fetch(`/api/calendar?tab=${tabParam}`);
      const data = await res.json();

      setEvents(data);
    }

    fetchEvents();
  }, [selectedTab]);

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-3xl font-bold tracking-tight">Calendar</h2>
        <div className="flex-1 h-px bg-gray-700"></div>

        <CalendarTabs
          selected={selectedTab}
          onChange={setSelectedTab}
        />
      </div>

      {/* CALENDAR */}
      <div className="bg-white text-black p-4 rounded-lg shadow">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
          events={events}
        />
      </div>
    </div>
  );
}