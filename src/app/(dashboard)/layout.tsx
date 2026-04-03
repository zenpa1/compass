"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SidebarLogoutButton } from "@/components/features/SidebarLogoutButton";
// 1. Import your new Check Button component!
import { SidebarCheckButton } from "@/components/features/SidebarCheckButton"; 

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const projectsActive = pathname.startsWith("/projects");
  const calendarActive = pathname.startsWith("/calendar");
  // 2. Add an active state check for your tasks route!
  const tasksActive = pathname.startsWith("/tasks"); 

  return (
    <div className="flex h-screen bg-slate-50">
      
      {/* SIDEBAR SECTION */}
      <aside className="w-20 bg-slate-900 flex flex-col items-center py-6 h-full text-slate-300">
        
        {/* LOGO */}
        <div className="mb-8 h-10 w-10 rounded-full bg-slate-800" />

        {/* NAVIGATION SECTION */}
        <nav className="flex-1 flex flex-col gap-6 w-full px-4">
          
          {/* Projects Link */}
          <Link href="/projects">
            <Button
              variant="ghost"
              size="icon"
              className={`h-12 w-full hover:bg-slate-800 hover:text-white ${
                projectsActive ? "text-amber-500" : "text-slate-300"
              }`}
              aria-label="Projects"
            >
              <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7h6l2 2h10v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
              </svg>
            </Button>
          </Link>

          {/* Calendar Link */}
          <Link href="/calendar">
            <Button
              variant="ghost"
              size="icon"
              className={`h-12 w-full hover:bg-slate-800 hover:text-white ${
                calendarActive ? "text-amber-500" : "text-slate-300"
              }`}
              aria-label="Calendar"
            >
              <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
            </Button>
          </Link>

          {/* 3. Drop in your new Check Button and pass the active state! */}
          <SidebarCheckButton isActive={tasksActive} />

        </nav>

        {/* LOGOUT BUTTON */}
        <div className="mt-auto px-4 w-full">
          <SidebarLogoutButton />
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 overflow-y-auto bg-slate-50">
        <div className="p-10 max-w-full">{children}</div>
      </main>
    </div>
  );
}