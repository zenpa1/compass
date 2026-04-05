"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SidebarLogoutButton } from "@/components/features/SidebarLogoutButton";
// 1. Import your new Check Button component!
import { SidebarCheckButton } from "@/components/features/SidebarCheckButton"; 
import { useState, useEffect } from "react";
import { getProfilePicture, getSidebarUrl } 
  from "@/app/(dashboard)/projects/projectDataOps";

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
  
  // Fixed: Changed this to check for "/manageprofile" instead of "/settings"
  const settingsActive = pathname.startsWith("/manageprofile");

  const [avatarUrl, setAvatarUrl] = useState("");
  const [sidebarUrl, setSidebarUrl] = useState("");

  useEffect(() => {
    const fetchUrls = async () => { 
      const url = await getProfilePicture();
      const sidebar = await getSidebarUrl();

      setAvatarUrl(url!);
      setSidebarUrl(sidebar)
    }

    fetchUrls();
  }, [])


  return (
    <div className="flex h-screen bg-slate-50">
      
      {/* SIDEBAR SECTION */}
      <aside className="w-20 bg-slate-900 flex flex-col items-center py-6 h-full text-slate-300">
        
        {/* LOGO */}
        <div className="mb-8 h-10 w-10 rounded-full bg-slate-800 overflow-hidden">
          {avatarUrl ? <img src={avatarUrl} alt="Profile" /> : null}
        </div>

        {/* NAVIGATION SECTION */}
        <nav className="flex-1 flex flex-col gap-6 w-full px-4">
          
          {/* Projects Link */}
          <Link href={sidebarUrl}>
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

          {/* Manage Profile Link (Swapped to Person Icon) */}
          <Link href="/manageprofile">
            <Button
              variant="ghost"
              size="icon"
              className={`h-12 w-full hover:bg-slate-800 hover:text-white ${
                settingsActive ? "text-amber-500" : "text-slate-300"
              }`}
              aria-label="Manage Profile"
            >
              <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Button>
          </Link>

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