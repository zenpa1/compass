/*
The layout.tsx is the file that creates the frame such as the sidebar.
This is your main way of wrapping all your pages, much like a header or a footer.
It is always visible even upon switching pages.
*/
import Link from "next/link"; // Swaps the content instantly without reloading the browser
import { Button } from "@/components/ui/button"; // from Shadcn UI
import { SidebarLogoutButton } from "@/components/features/SidebarLogoutButton";

export default function DashboardLayout({
  children, // Special React prop that represents the page you are currently looking at
}: {
  children: React.ReactNode; // TypeScript ensuring 'children' is valid HTML/React code
}) {
  return (
    <div className="flex h-screen bg-slate-50">
      {/* PARENT CONTAINER */}

      {/* SIDEBAR SECTION */}
      <aside className="w-20 bg-slate-900 flex flex-col items-center py-6 h-full text-slate-300">
        {/* LOGO */}
        <div className="mb-8 h-10 w-10 rounded-full bg-slate-800" />

        {/* NAVIGATION SECTION of SIDEBAR */}
        <nav className="flex-1 flex flex-col gap-6 w-full px-4">
          {/* Navigation Links */}
          <Link href="/projects">
            {/* This link wraps the Button. When clicked, URL changes to /projects */}
            <Button
              variant="ghost"
              size="icon"
              className="w-full h-12 hover:bg-slate-800 hover:text-white text-amber-500"
              aria-label="Projects"
            >
              {/* variant="ghost" is a button with no background until hovered over */}
              <svg
                viewBox="0 0 24 24"
                className="size-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 7h6l2 2h10v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
              </svg>
            </Button>
          </Link>
          <Link href="/calendar">
            <Button
              variant="ghost"
              size="icon"
              className="w-full h-12 hover:bg-slate-800 hover:text-white"
              aria-label="Calendar"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
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
        {/* overflow-y-auto makes the grey area scrollable while the Sidebar stays in place */}
        <div className="p-10 max-w-full">{children}</div>
        {/* children is where code from 'page.tsx' gets injected */}
      </main>
    </div>
  );
}
