//View Project
import ViewProject from "@/app/(dashboard)/projects/viewProject/viewProject";
import { Project, getProject } from "@/app/(dashboard)/projects/projectDataOps";

//Gets the id passed from the dashboard to load the project to be viewed
export default async function Page({ searchParams }: { searchParams: Promise<{ id: string }> }) {
  const { id } = await searchParams;
  const project = await getProject(Number.parseInt(id))

  if (!project) {
    return null;
  }

  // Houses the actual project view in a separate file
  // (cannot have a client component in a server file)
  return <ViewProject project={project}/>;
}