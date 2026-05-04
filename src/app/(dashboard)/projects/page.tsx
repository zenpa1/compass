import { db } from "@/lib/prisma"; // Your real DB connection
import ProjectDashboard from "@/app/(dashboard)/projects/projectDashboard";
import { getRemainingDays, getProjectMissingWorks, getProjectWorks, isCompleteProjectTone } 
  from "@/app/(dashboard)/projects/projectDataOps";

export const dynamic = 'force-dynamic';
// async as it must wait for the database to reply
export default async function ProjectsPage() {
  // FETCH REAL DATA
  const projects = await db.project.findMany({
    orderBy: { project_end_date: "asc" },
  });

  const enrichedProjects = await Promise.all(projects.map(async (project) => {
      const projectData = project;
      const activeWorks = await getProjectMissingWorks(project.project_id);
      const allWorks = await getProjectWorks(project.project_name)!;
      const allWorksLength = allWorks?.length || 0;
      const isComplete = await isCompleteProjectTone(project.project_id);
  
      return {
        project: projectData,
        activeWorks: allWorksLength - activeWorks,
        allWorks: allWorksLength,
        isComplete: isComplete
      };
    }));

  return (
    // Houses the actual dashboard in a separate file
    // (cannot have a client component in a server file)
    <ProjectDashboard initialProjects={enrichedProjects} />
  );
}