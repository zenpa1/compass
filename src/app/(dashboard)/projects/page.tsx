// Assemble pages by combining the layout, component, and database in one file
import { db } from "@/lib/prisma"; // Ensure this matches your actual db path (e.g. @/lib/db or @/lib/prisma)
import { ProjectCard } from "@/components/features/ProjectCard";
import { Button } from "@/components/ui/button";
import LogoutButton from "@/components/LogoutButton"; // <--- 1. Import the new button

// async as it must wait for the database to reply
export default async function ProjectsPage() {
  // FETCH DATA (Server-Side)
  // This runs on the server before the HTML is sent to the browser
  const projects = await db.project.findMany({
    orderBy: { project_end_date: "asc" },
    take: 10, // Limit for now
  });

  return (
    <div className="space-y-6">
      {/* HEADER SECTION */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Project Dashboard
          </h2>
        </div>
        
        {/* 2. Group the buttons together on the right side */}
        <div className="flex items-center gap-4">
            <LogoutButton />
            <Button>+</Button>
        </div>
      </div>

      {/* GRID FOR CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length === 0 ? (
          <p className="text-slate-500 col-span-full">
            No projects found. Create one!
          </p>
        ) : (
          projects.map((proj) => (
            <ProjectCard
              key={proj.project_id}
              name={proj.project_name}
              client={proj.client_name}
              deadline={proj.project_end_date.toLocaleDateString()}
              status={proj.project_status}
            />
          ))
        )}
      </div>
    </div>
  );
}
