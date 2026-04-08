"use client";

import { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import CalendarTabs, { CalendarTab } from "@/components/features/CalendarTabs";
import timeGridPlugin from "@fullcalendar/timegrid";

interface EventPopover {
  title: string;
  start?: string;
  end?: string;
  extendedProps?: Record<string, any>;
  x: number;
  y: number;
}

interface CalendarEvent {
  title: string;
  start?: string;
  end?: string;
  extendedProps?: Record<string, any>;
}

function formatDate(dateStr?: string) {
  if (!dateStr) return null;
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatTime(dateStr?: string) {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  if (d.getHours() === 0 && d.getMinutes() === 0) return null;
  const h = d.getHours();
  const m = d.getMinutes();
  const period = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  const mins = m === 0 ? "" : `:${String(m).padStart(2, "0")}`;
  return `${hour}${mins} ${period}`;
}

function statusColors(status: string) {
  if (status === "COMPLETED") return "bg-green-100 text-green-700";
  if (status === "ONGOING" || status === "ASSIGNED") return "bg-blue-100 text-blue-700";
  return "bg-amber-100 text-amber-700";
}

function toLocalDateStr(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function EventDetail({ event }: { event: CalendarEvent }) {
  const props = event.extendedProps ?? {};
  return (
    <div className="space-y-2 text-sm text-slate-700">
      {formatDate(event.start) && (
        <div className="flex items-start gap-2.5">
          <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          <span>{formatDate(event.start)}</span>
        </div>
      )}
      {(formatTime(props.start_time) || formatTime(event.start)) && (
        <div className="flex items-start gap-2.5">
          <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
          </svg>
          <span>
            {formatTime(props.start_time ?? event.start)}
            {formatTime(props.end_time) ? ` – ${formatTime(props.end_time)}` : ""}
          </span>
        </div>
      )}
      {props.location && (
        <div className="flex items-start gap-2.5">
          <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 21s-7-5.686-7-11a7 7 0 0 1 14 0c0 5.314-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" />
          </svg>
          <span>{props.location}</span>
        </div>
      )}
      {(props.role ?? props.role_category) && (
        <div className="flex items-start gap-2.5">
          <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
          </svg>
          <span>{props.role ?? props.role_category}</span>
        </div>
      )}
      {(props.client ?? props.client_name) && (
        <div className="flex items-start gap-2.5">
          <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          </svg>
          <span>{props.client ?? props.client_name}</span>
        </div>
      )}
      {props.status && (
        <div className="flex items-center gap-2.5">
          <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" /><path d="m8 12 2.5 2.5L16 9" />
          </svg>
          <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${statusColors(props.status)}`}>
            {props.status}
          </span>
        </div>
      )}
      {props.description && (
        <>
          <div className="h-px bg-slate-100" />
          <p className="text-xs leading-relaxed text-slate-500">{props.description}</p>
        </>
      )}
      {(props.expected_salary ?? props.rate) && (
        <div className="flex items-center gap-2.5 font-medium text-slate-900">
          <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" /><path d="M12 7v10M9.5 9.5h3a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 0 0 3H13" />
          </svg>
          <span>₱{props.expected_salary ?? props.rate}</span>
        </div>
      )}
    </div>
  );
}

export default function CalendarPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [selectedTab, setSelectedTab] = useState<CalendarTab>("personal tasks");
  const [isMobile, setIsMobile] = useState(false);
  const [popover, setPopover] = useState<EventPopover | null>(null);
  const [calendarView, setCalendarView] = useState<"dayGridMonth" | "timeGridWeek">("dayGridMonth");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedDayEvents, setSelectedDayEvents] = useState<CalendarEvent[]>([]);

  const popoverRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<FullCalendar>(null);

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

  useEffect(() => {
    setSelectedDate(null);
    setSelectedDayEvents([]);
  }, [selectedTab, calendarView]);

  useEffect(() => {
    const handleScroll = () => setPopover(null);
    if (popover) {
      window.addEventListener("scroll", handleScroll, true);
      return () => window.removeEventListener("scroll", handleScroll, true);
    }
  }, [popover]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setPopover(null);
      }
    }
    if (popover) {
      const t = setTimeout(() => document.addEventListener("mousedown", handleClickOutside), 10);
      return () => {
        clearTimeout(t);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [popover]);

  const handleViewChange = (view: "dayGridMonth" | "timeGridWeek") => {
    setCalendarView(view);
    const mobileView = view === "timeGridWeek" ? "dayGridWeek" : "dayGridMonth";
    calendarRef.current?.getApi().changeView(isMobile ? mobileView : view);
  };

  const handleDateClick = (info: any) => {
    if (!isMobile) return;
    const clickedDate = info.dateStr; // already YYYY-MM-DD local from FullCalendar, safe
    setSelectedDate(clickedDate);
    const dayEvents = events.filter((ev) => ev.start && toLocalDateStr(ev.start) === clickedDate);
    setSelectedDayEvents(dayEvents);
  };

  const handleEventClick = (info: any) => {
    if (isMobile) {
      const dateStr = toLocalDateStr(info.event.startStr);
      setSelectedDate(dateStr);
      const dayEvents = events.filter((ev) => ev.start && toLocalDateStr(ev.start) === dateStr);
      setSelectedDayEvents(dayEvents);
      return;
    }

    const rect = info.el.getBoundingClientRect();
    const x = rect.left + window.scrollX + rect.width / 2;
    const y = rect.bottom + window.scrollY + 8;

    setPopover({
      title: info.event.title,
      start: info.event.startStr,
      end: info.event.endStr,
      extendedProps: info.event.extendedProps,
      x,
      y,
    });
  };

  const getPopoverStyle = (): React.CSSProperties => {
    if (!popover) return {};
    const popoverWidth = 288;
    const popoverHeight = 320;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    let left = popover.x - window.scrollX - popoverWidth / 2;
    if (left < 8) left = 8;
    if (left + popoverWidth > vw - 8) left = vw - popoverWidth - 8;

    let top = popover.y - window.scrollY;
    if (top + popoverHeight > vh - 8) top = top - popoverHeight - 16;
    if (top < 8) top = 8;

    return { top, left };
  };

  const fcView = isMobile
    ? calendarView === "timeGridWeek" ? "dayGridWeek" : "dayGridMonth"
    : calendarView;

  return (
    <div className="space-y-4 sm:space-y-6">

    {/* Mobile calendar event styles */}
    <style>{`
      @media (max-width: 640px) {
        .fc .fc-daygrid-event .fc-event-title,
        .fc .fc-daygrid-event .fc-event-time {
          display: none;
        }
        .fc .fc-daygrid-event {
          min-height: 6px;
          border-radius: 2px;
        }

        .fc .fc-daygrid-day-events {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    `}</style>
      {/* HEADER */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Calendar</h2>
        
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="flex w-fit self-start rounded-md border border-slate-600 overflow-hidden text-sm">
            <button
              onClick={() => handleViewChange("dayGridMonth")}
              className={`px-3 py-1.5 font-medium transition-colors ${
                calendarView === "dayGridMonth"
                  ? "bg-slate-800 text-white"
                  : "bg-transparent text-slate-400 hover:text-white hover:bg-slate-700"
              }`}
            >
              Month
            </button>
            <button
              onClick={() => handleViewChange("timeGridWeek")}
              className={`px-3 py-1.5 font-medium transition-colors border-l border-slate-600 ${
                calendarView === "timeGridWeek"
                  ? "bg-slate-800 text-white"
                  : "bg-transparent text-slate-400 hover:text-white hover:bg-slate-700"
              }`}
            >
              Week
            </button>
          </div>
          <CalendarTabs selected={selectedTab} onChange={setSelectedTab} />
        </div>
      </div>

      {/* CALENDAR */}
      <div className="rounded-lg bg-white p-2 text-black shadow sm:p-4">
        <div className="compact-mobile-calendar">
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={fcView}
            events={events}
            height="auto"
            fixedWeekCount={calendarView === "dayGridMonth"}
            dayMaxEventRows={isMobile ? 3 : undefined}
            dayMaxEvents={isMobile ? 3 : undefined}
            dateClick={handleDateClick}
            dayHeaderContent={(arg) => isMobile ? arg.text.slice(0, 1) : arg.text}
            eventClick={handleEventClick}
            eventTimeFormat={{
              hour: "numeric",
              minute: "2-digit",
              meridiem: "short",
            }}
            eventInteractive={true}
          />
        </div>
      </div>

      {/* MOBILE: Selected day event list */}
      {isMobile && selectedDate && (
        <div className="space-y-3">
          {/* Day header */}
          <div className="flex items-center justify-between rounded-lg bg-slate-900 px-4 py-3">
            <h3 className="text-sm font-semibold text-white">
              {new Date(selectedDate + "T00:00:00").toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </h3>
            <button
              onClick={() => { setSelectedDate(null); setSelectedDayEvents([]); }}
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {selectedDayEvents.length === 0 ? (
            <p className="py-4 text-center text-sm text-slate-400">No events for this day.</p>
          ) : (
            selectedDayEvents.map((ev, i) => (
              <div key={i} className="rounded-lg border border-slate-200 bg-white shadow">
                <div className="rounded-t-lg bg-slate-900 px-4 py-3">
                  <p className="text-sm font-semibold text-white">{ev.title}</p>
                </div>
                <div className="px-4 py-3">
                  <EventDetail event={ev} />
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* DESKTOP: Floating popover */}
      {!isMobile && popover && (
        <div
          ref={popoverRef}
          style={{ ...getPopoverStyle(), position: "fixed" }}
          className="z-[10000] w-72 rounded-xl border border-slate-200 bg-white shadow-xl ring-1 ring-black/5 animate-in fade-in slide-in-from-top-1 duration-150"
        >
          <div className="flex items-start justify-between rounded-t-xl bg-slate-900 px-4 py-3">
            <h3 className="pr-2 text-sm font-semibold leading-snug text-white">{popover.title}</h3>
            <button
              onClick={() => setPopover(null)}
              className="mt-0.5 shrink-0 text-slate-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="px-4 py-3">
            <EventDetail event={{ title: popover.title, start: popover.start, end: popover.end, extendedProps: popover.extendedProps }} />
          </div>
        </div>
      )}
    </div>
  );
}