"use client";

import { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import CalendarTabs, { CalendarTab } from "@/components/features/CalendarTabs";

interface EventPopover {
  title: string;
  start?: string;
  end?: string;
  extendedProps?: Record<string, any>;
  x: number;
  y: number;
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
  return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
}

export default function CalendarPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [selectedTab, setSelectedTab] = useState<CalendarTab>("personal tasks");
  const [isMobile, setIsMobile] = useState(false);
  const [popover, setPopover] = useState<EventPopover | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

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

  const handleEventClick = (info: any) => {
    const rect = info.el.getBoundingClientRect();
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    const x = rect.left + scrollX + rect.width / 2;
    const y = rect.bottom + scrollY + 8;

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
    const popoverWidth = 288; // w-72
    const vw = window.innerWidth;
    let left = popover.x - popoverWidth / 2;
    if (left < 8) left = 8;
    if (left + popoverWidth > vw - 8) left = vw - popoverWidth - 8;
    return { top: popover.y, left };
  };

  const props = popover?.extendedProps ?? {};

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* HEADER */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full items-center gap-3 sm:flex-1">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Calendar</h2>
          <div className="h-px flex-1 bg-gray-700"></div>
        </div>
        <CalendarTabs selected={selectedTab} onChange={setSelectedTab} />
      </div>

      {/* CALENDAR */}
      <div className="rounded-lg bg-white p-2 text-black shadow sm:p-4">
        <div className="compact-mobile-calendar">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            height="auto"
            fixedWeekCount
            dayMaxEventRows={1}
            dayMaxEvents={1}
            eventDisplay="list-item"
            dayHeaderContent={(arg) =>
              isMobile ? arg.text.slice(0, 1) : arg.text
            }
            eventClick={handleEventClick}
          />
        </div>
      </div>

      {/* FLOATING POPOVER */}
      {popover && (
        <div
          ref={popoverRef}
          style={{ ...getPopoverStyle(), position: "absolute" }}
          className="z-50 w-72 rounded-xl border border-slate-200 bg-white shadow-xl ring-1 ring-black/5 animate-in fade-in slide-in-from-top-1 duration-150"
        >
          {/* Header strip */}
          <div className="flex items-start justify-between rounded-t-xl bg-slate-900 px-4 py-3">
            <h3 className="pr-2 text-sm font-semibold leading-snug text-white">
              {popover.title}
            </h3>
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

          {/* Body */}
          <div className="space-y-2.5 px-4 py-3 text-sm text-slate-700">
            {/* Date */}
            {formatDate(popover.start) && (
              <div className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                <span>{formatDate(popover.start)}</span>
              </div>
            )}

            {/* Time */}
            {formatTime(popover.start) && (
              <div className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
                </svg>
                <span>
                  {formatTime(popover.start)}
                  {formatTime(popover.end) ? ` – ${formatTime(popover.end)}` : ""}
                </span>
              </div>
            )}

            {/* Location */}
            {props.location && (
              <div className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-5.686-7-11a7 7 0 0 1 14 0c0 5.314-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" />
                </svg>
                <span>{props.location}</span>
              </div>
            )}

            {/* Role / Category */}
            {(props.role ?? props.role_category) && (
              <div className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
                <span>{props.role ?? props.role_category}</span>
              </div>
            )}

            {/* Client */}
            {(props.client ?? props.client_name) && (
              <div className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                </svg>
                <span>{props.client ?? props.client_name}</span>
              </div>
            )}

            {/* Status */}
            {props.status && (
              <div className="flex items-center gap-2.5">
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" /><path d="m8 12 2.5 2.5L16 9" />
                </svg>
                <span
                  className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                    props.status === "COMPLETED"
                      ? "bg-green-100 text-green-700"
                      : props.status === "ONGOING" || props.status === "ASSIGNED"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {props.status}
                </span>
              </div>
            )}

            {/* Description */}
            {props.description && (
              <>
                <div className="h-px bg-slate-100" />
                <p className="text-xs leading-relaxed text-slate-500">
                  {props.task_desc}
                  {props.description}
                </p>
              </>
            )}

            {/* Salary / Rate */}
            {(props.expected_salary ?? props.rate) && (
              <div className="flex items-center gap-2.5 font-medium text-slate-900">
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" /><path d="M12 7v10M9.5 9.5h3a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 0 0 3H13" />
                </svg>
                <span>₱{props.expected_salary ?? props.rate}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}