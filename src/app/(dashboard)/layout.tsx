/*
The layout.tsx is the file that creates the frame such as the sidebar.
This is your main way of wrapping all your pages, much like a header or a footer.
It is always visible even upon switching pages.
*/
import Link from "next/link"; // Swaps the content instantly without reloading the browser
import { Button } from "@/components/ui/button"; // from Shadcn UI

export default function DashboardLayout({
  children, // Special React prop that represents the page you are currently looking at
}: {
  children: React.ReactNode; // TypeScript ensuring 'children' is valid HTML/React code
}) {
  return (
    <div className="flex h-screen bg-slate-50">
      {/* PARENT CONTAINER */}

      {/* SIDEBAR SECTION */}
      <aside className="w-64 bg-white border-r hidden md:flex flex-col">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
            LOGO
          </h1>
        </div>

        {/* NAVIGATION SECTION of SIDEBAR */}
        <nav className="flex-1 p-4 space-y-2">
          {/* Navigation Links */}
          <Link href="/projects">
            {/* This link wraps the Button. When clicked, URL changes to /projects */}
            <Button variant="ghost" className="w-full justify-start">
              {/* variant="ghost" is a button with no background until hovered over */}
              📂
            </Button>
          </Link>
          <Link href="/calendar">
            <Button variant="ghost" className="w-full justify-start">
              📅
            </Button>
          </Link>
          <Link href="/freelancers">
            <Button variant="ghost" className="w-full justify-start">
              👥
            </Button>
          </Link>
        </nav>

        {/* LOGOUT BUTTON */}
        <div className="p-4 border-t">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-slate-200"></div>
            <div className="text-sm">
              <p className="font-medium">Leave Button</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 overflow-y-auto">
        {/* overflow-y-auto makes the grey area scrollable while the Sidebar stays in place */}
        <div className="p-8 max-w-7xl mx-auto">{children}</div>
        {/* children is where code from 'page.tsx' gets injected */}
      </main>
    </div>
  );
}
