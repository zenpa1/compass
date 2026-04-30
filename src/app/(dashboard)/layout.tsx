"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SidebarLogoutButton } from "@/components/features/SidebarLogoutButton";
import { SidebarCheckButton } from "@/components/features/SidebarCheckButton";
import { useState, useEffect } from "react";
import { getProfilePicture } from "@/app/(dashboard)/projects/projectDataOps";
import { SidebarUserManagementButton } from "@/components/features/SidebarUserManagementButton";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const projectsActive = pathname.startsWith("/projects");
  const calendarActive = pathname.startsWith("/calendar");
  const workActive = pathname.startsWith("/work");
  const tasksActive = pathname.startsWith("/tasks");
  const settingsActive = pathname.startsWith("/manageprofile");

  const [avatarUrl, setAvatarUrl] = useState("");
  const [userType, setUserType] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchUrls = async () => {
      const url = await getProfilePicture();
      const session = await fetch("/api/session").then(r => r.json());
      setAvatarUrl(url!);
      setUserType(session.user_type);
    };
    fetchUrls();
  }, []);

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <div className="flex h-screen bg-slate-50">

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR SECTION */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-30 w-20 bg-slate-900
          flex flex-col items-center py-6 text-slate-300
          transform transition-transform duration-200 ease-in-out
          md:static md:translate-x-0 md:z-auto
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* LOGO */}
        <div className="mb-8 h-10 w-10 rounded-full bg-slate-800 overflow-hidden">
          {avatarUrl ? <img src={avatarUrl} alt="Profile" /> : null}
        </div>

        {/* NAVIGATION SECTION */}
        <nav className="flex-1 flex flex-col gap-6 w-full px-4">
          {/* Projects icon — OWNER and ADMIN only */}
          {(userType === "OWNER" || userType === "ADMIN") && (
            <Link href="/projects">
              <Button variant="ghost" size="icon"
                className={`h-12 w-full hover:bg-slate-800 hover:text-white ${
                  projectsActive ? "text-amber-500" : "text-slate-300"
                }`}
              >
                <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7h6l2 2h10v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
                </svg>
              </Button>
            </Link>
          )}

          {/* Work icon — EMPLOYEE and ADMIN only */}
          {(userType === "EMPLOYEE" || userType === "ADMIN") && (
            <Link href="/work">
              <Button variant="ghost" size="icon"
                className={`h-12 w-full hover:bg-slate-800 hover:text-white ${
                  workActive ? "text-amber-500" : "text-slate-300"
                }`}
              >
                <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                </svg>
              </Button>
            </Link>
          )}

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

          <SidebarCheckButton isActive={tasksActive} />

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

          <SidebarUserManagementButton />
        </nav>

        <div className="mt-auto px-4 w-full">
          <SidebarLogoutButton />
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        <header className="md:hidden flex items-center gap-3 px-4 py-3 bg-slate-900 text-slate-300">
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
            className="p-1"
          >
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
          {/* <div className="h-7 w-7 rounded-full bg-slate-800 overflow-hidden">
            {avatarUrl ? <img src={avatarUrl} alt="Profile" /> : null}
          </div> */}
        </header>

        <main className="flex-1 overflow-y-auto bg-slate-50">
          <div className="p-10 max-w-full">{children}</div>
        </main>
      </div>

    </div>
  );
}