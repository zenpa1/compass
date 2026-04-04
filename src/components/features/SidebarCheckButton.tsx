import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SidebarCheckButton({ isActive }: { isActive?: boolean }) {
  return (
    <Link href="/tasks" className="w-full block">
      <Button
        variant="ghost"
        size="icon"
        className={`w-full h-12 hover:bg-slate-800 hover:text-white ${
          isActive ? "text-amber-500" : "text-slate-300"
        }`}
        aria-label="Tasks"
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
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </Button>
    </Link>
  );
}