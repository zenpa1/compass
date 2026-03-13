import { db } from "@/lib/prisma";
import { getRemainingDays, getProjectMissingWorks, getProjectWorks } 
  from "@/app/(dashboard)/projects/projectDataOps";
import { getEnrichedWorks } from "@/app/(dashboard)/projects/[projectId]/workDataOps";
import ManageWorksPage from "@/app/(dashboard)/projects/[projectId]/manageWorks";

interface ProjectDetailPageProps {
  params: { projectId: string };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const parameters = await params;
  const projectId = Number(parameters.projectId);
  const project = Number.isNaN(projectId)
    ? null
    : await db.project.findUnique({
        where: { project_id: projectId },
      });

  const remainingDays = await getRemainingDays(projectId);
  const missingWorks = await getProjectMissingWorks(projectId);

  const enrichedWorks = await getEnrichedWorks(project!.project_id)

  return (
    <ManageWorksPage project={project!} enrichedWorks={enrichedWorks}
    remainingDays={remainingDays} missingWorks={missingWorks}/>
  );
}
