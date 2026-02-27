'use client'

import { Project } from "@/app/(dashboard)/projects/projectDataOps";

export default function ViewProject(props: {project: Project}) {
  const {project} = props;

  //Will add other details once ManageWorks Subsystem is complete
  return (
    <div>
      <h1>{project.project_name}</h1>
      <p>Client: {project.client_name}</p>
      <p>Start Date: {project.project_start_date.toLocaleDateString()}</p>
      <p>End Date: {project.project_end_date.toLocaleDateString()}</p>
      <p>Location: {project.project_location}</p>
      <p>Description: {project.project_description}</p>
    </div>
  );
}
