'use server'

import { db } from "@/lib/prisma"; // Your real DB connection
import ProjectDashboard from "@/app/(dashboard)/projects/projectDashboard";

export default async function ProjectsPage() {
  // FETCH REAL DATA
  const projects = await db.project.findMany({
    orderBy: { project_end_date: "asc" }, // Sort by deadline
  });

  return (
    // Houses the actual dashboard in a separate file
    // (cannot have a client component in a server file)
    <ProjectDashboard initialProjects={projects} />
  );
}
