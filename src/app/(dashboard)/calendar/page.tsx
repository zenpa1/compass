"use client";

import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import CalendarTabs, { CalendarTab } from "@/components/features/CalendarTabs";

export default function CalendarPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [selectedTab, setSelectedTab] = useState<CalendarTab>("personal tasks");
  const [isMobile, setIsMobile] = useState(false);

  const handleDateClick = (arg: any) => {
    alert("Date clicked: " + arg.dateStr);
  };

  useEffect(() => {
    async function fetchEvents() {
      const tabParam = selectedTab === "North Studio works" ? "works" : "tasks";

      const res = await fetch(`/api/calendar?tab=${tabParam}`);
      const data = await res.json();

      setEvents(data);
    }

    fetchEvents();
  }, [selectedTab]);

  useEffect(() => {
    const updateMobile = () => setIsMobile(window.innerWidth <= 640);
    updateMobile();

    window.addEventListener("resize", updateMobile);
    return () => window.removeEventListener("resize", updateMobile);
  }, []);

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* HEADER */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full items-center gap-3 sm:w-auto">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Calendar
          </h2>
          <div className="h-px flex-1 bg-gray-700 sm:min-w-[120px]" />
        </div>

        <CalendarTabs selected={selectedTab} onChange={setSelectedTab} />
      </div>

      {/* CALENDAR */}
      <div className="rounded-lg bg-white p-2 text-black shadow sm:p-4">
        <div className="compact-mobile-calendar">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            dateClick={handleDateClick}
            events={events}
            height="auto"
            fixedWeekCount
            dayMaxEventRows={1}
            dayMaxEvents={1}
            eventDisplay="list-item"
            dayHeaderContent={(arg) =>
              isMobile ? arg.text.slice(0, 1) : arg.text
            }
            eventTimeFormat={{
              hour: 'numeric',
              minute: '2-digit',
              meridiem: 'short' // This results in '5:08pm' or '5:08p' depending on space
            }}
          />
        </div>
      </div>
    </div>
  );
}
