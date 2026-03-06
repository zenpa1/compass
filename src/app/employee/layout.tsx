import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SidebarLogoutButton } from "@/components/features/SidebarLogoutButton";

export default function EmployeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-slate-50">
      <aside className="w-20 bg-slate-900 text-slate-300">
        <div className="flex h-full flex-col items-center py-6">
          <div className="mb-8 h-10 w-10 rounded-full bg-slate-800" />

          <nav className="flex w-full flex-1 flex-col gap-6 px-4">
            <Link href="/employee/open-work" aria-label="Open Work">
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-full text-amber-400 hover:bg-slate-800 hover:text-amber-300"
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
                  <path d="M4 11h16" />
                  <path d="M12 4v16" />
                  <path d="M7 7l10 10" />
                  <path d="M17 7L7 17" />
                </svg>
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-full hover:bg-slate-800 hover:text-white"
              aria-label="Completed Work"
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
                <circle cx="12" cy="12" r="9" />
                <path d="m8 12 2.5 2.5L16 9" />
              </svg>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-full hover:bg-slate-800 hover:text-white"
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
          </nav>

          <div className="mt-auto w-full px-4">
            <SidebarLogoutButton />
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto bg-slate-50">
        <div className="p-10 max-w-full">{children}</div>
      </main>
    </div>
  );
}
