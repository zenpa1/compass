import { db } from "@/lib/prisma"; // Your real DB connection
import { ProjectCard } from "@/components/features/ProjectCard"; // Your restored component
import { OrganizeButton } from "@/components/features/OrganizeButton";
import { Button } from "@/components/ui/button";
import { AddProjectButton } from "@/components/features/AddProjectButton";

export default async function ProjectsPage() {
  // 1. FETCH REAL DATA
  const projects = await db.project.findMany({
    orderBy: { project_end_date: "asc" }, // Sort by deadline
  });

  const hasProjects = projects.length > 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Project Dashboard
          </h2>
        </div>
        <OrganizeButton />
      </div>

      {hasProjects ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((proj) => (
            <ProjectCard
              key={proj.project_id}
              projectId={proj.project_id}
              // --- MAPPING HAPPENS HERE ---
              // Left side = Component Prop | Right side = Database Column
              name={proj.project_name}
              client={proj.client_name}
              // Convert Date Object to readable string (e.g., "3/15/2026")
              deadline={
                proj.project_end_date
                  ? proj.project_end_date.toLocaleDateString()
                  : "No Date"
              }
              // Ensure the string matches the exact "ACTIVE" | "ARCHIVED" type
              status={proj.project_status as "ACTIVE" | "ARCHIVED"}
            />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[65vh] flex-col items-center justify-center text-center">
          <p className="text-lg font-semibold text-slate-900">No Projects</p>
          <AddProjectButton variant="empty" />
          <p className="mt-3 text-sm text-slate-500">Click to add</p>
        </div>
      )}

      {hasProjects ? <AddProjectButton /> : null}
    </div>
  );
}
