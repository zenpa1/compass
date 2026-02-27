'use server'

//File for all data operations related to project
import { Prisma } from "@/generated/prisma";
import { db } from "@/lib/prisma"; // Direct DB access

export interface Project {
  project_id: number;
  project_name: string;
  client_name: string;
  project_location: string;
  project_description: string;
  project_start_date: Date;
  project_end_date: Date;
  project_status: "ACTIVE" | "ARCHIVED";
}

//Interface for basic alert windows
export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

//Checks if the project being created uses a project name that already exists 
// in the database
export default async function checkCreateProjectConflict(name: string) {
  const val = await db.project.findFirst({
    where: { project_name: name },
  });

  return val;
}

//Creates the project using the inputs
export async function createProject(new_project_name: string, new_client_name: string, 
    new_project_start_date: Date, new_project_end_date: Date, new_project_location: 
    string, new_project_description: string, ) {
      await db.project.create({
        data: {
          project_name: new_project_name,
          client_name: new_client_name,
          project_location: new_project_location,
          project_description: new_project_description,
          project_start_date: new_project_start_date,
          project_end_date: new_project_end_date
        }
      })
}

//Checks if a project has active works
export async function checkProjectWorks(name: string) {
  const project = await db.project.findFirst({
    where: { project_name: name },
  });

  const projectId = project?.project_id;

  const works = await db.work.findFirst({
    where: { project_id: projectId },
  });

  return works;
}

//Gets the project's id using the inputted name
export async function getProjectId(name: string) {
  const project = await db.project.findFirst({
    where: { project_name: name },
  });

  return project?.project_id;
}

//Gets the project based on its id
export async function getProject(id: number) {
  const project = await db.project.findFirst({
    where: { project_id: id },
  });

  return project;
}

//Deletes the project based on its id
export async function deleteProject(id: number) {
  await db.project.delete({
    where: { project_id: id }
  });
}

//Gets the projects. Has an optional value for returning projects based on 
// the user's filters
export async function getProjects(filterOptions: String[]) {
  //Initializes optional filters (if any)
  const alphabetical = filterOptions.find((value) => value == "alpha");
  const deadline = filterOptions.find((value) => value == "deadline");
  const completed = filterOptions.find((value) => value == "completed");
  const notCompleted = filterOptions.find((value) => value == "not-completed");

  //Initializes the 'order by' part of the sql command (if filters were inputted)
  let orderBy = {}
  if(alphabetical && deadline) { orderBy = [{project_name: "asc"}, {project_end_date: "asc"}] }
  else if(alphabetical && !deadline) {orderBy = {project_name: "asc"}}
  else {orderBy = {project_end_date: "asc"}}

  //Initializes the 'where' part of the sql command (if filters were inputted)
  let where: Prisma.ProjectWhereInput = {}
  if(completed && !notCompleted) {where.project_status = "ARCHIVED"}
  else if(!completed && notCompleted) {where.project_status = "ACTIVE"}

  //Uses the initialized conditions to find the projects
  //If there were no filters, it just returns all projects without any organization
  const projects = await db.project.findMany({
      where: where,
      orderBy: orderBy,
      take: 10, // Limit for now
  });

  return projects;
}

//Edits a project based on its projectId
export async function editProject(project_id: number, new_project_name: string, 
  new_client_name: string, new_project_start_date: Date, new_project_end_date: Date,
  new_project_location: string, new_project_description: string) {
    await db.project.update({
      where: {project_id: project_id},
      data: {
        project_name: new_project_name,
        client_name: new_client_name,
        project_location: new_project_location,
        project_description: new_project_description,
        project_start_date: new_project_start_date,
        project_end_date: new_project_end_date
      }
    })
}

//Checks if a user tries to edit a project's name to another project name that
//already exists in the database (and it isnt the original name of the project)
export async function checkEditProjectConflict(project_id: number, project_name: string) {
  const val = await db.project.findFirst({
    where: { 
      AND: [ { project_id: { not: project_id } }, { project_name: project_name } ]
    },
  });

  return val;
}

//Archives the project
export async function archiveProject(project_id: number) {
  await db.project.update({
      where: {project_id: project_id},
      data: {project_status: "ARCHIVED"}
    })
}

//Checks if the project has active works (AKA works that are not marked as completed)
export async function checkProjectActiveWorks(project_id: number) {
  const works = await db.work.findFirst({
    where: { 
      AND: {
        project_id: project_id,
        NOT: {work_status: "COMPLETED"}
      }
    },
  });

  return works;
}

//Gets the remaining days before the project's deadline
export async function getRemainingDays(project_id: number) {
  const project = await db.project.findFirst({
    where: { project_id: project_id }
  });

  const deadline = project?.project_end_date;
  const current = new Date();
  const difference = deadline!.getTime() - current.getTime();

  return Math.round(difference / (24 * 60 * 60 * 1000));
}

//Activates or un-archives the project
export async function activateProject(project_id: number) {
  await db.project.update({
      where: {project_id: project_id},
      data: {project_status: "ACTIVE"}
    })
}