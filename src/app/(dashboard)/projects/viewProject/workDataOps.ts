'use server'

//File for all data operations related to project
import { Prisma } from "@/generated/prisma";
import { db } from "@/lib/prisma"; // Direct DB access

export interface Work {
  work_id: number;
  project_id: number;
  project_role: string;
  role_category: "PHOTO" | "VIDEO" | "EDITOR" | "ASSISTANT" | "ANY";
  expected_salary: number;
  is_open_pool: boolean;
  work_description: string;
  work_start_date: Date;
  work_start_time: Date;
  work_end_time: Date;
  work_status: "PENDING" | "OPEN" | "ASSIGNED" | "REVIEW" | "COMPLETED";
}

export default async function getWork(id: number) {
  const work = await db.work.findFirst({
    where: { work_id: id },
  });

  return work;
}

export async function getProjectWorks(id: number) {
  const works = await db.work.findMany({
    where: { project_id: id },
  });

  return works;
}

export async function createWork(new_project_id: number, new_project_role: string, 
    new_role_category: "PHOTO" | "VIDEO" | "EDITOR" | "ASSISTANT" | "ANY", 
    new_expected_salary: number, new_is_open_pool: boolean, new_work_description: string,
    new_work_start_date: Date, new_work_start_time: Date, new_work_end_time: Date,
    new_work_status: "PENDING" | "OPEN" | "ASSIGNED" | "REVIEW" | "COMPLETED") {
  await db.work.create({
    data: {
      project_id: new_project_id,
      project_role: new_project_role,
      role_category: new_role_category,
      expected_salary: new_expected_salary,
      is_open_pool: new_is_open_pool,
      work_description: new_work_description,
      work_start_date: new_work_start_date,
      work_start_time: new_work_start_time,
      work_end_time: new_work_end_time,
      work_status: new_work_status
    }
  })
}

export async function editWork(work_id: number, new_project_id: number,
    new_project_role: string,
    new_role_category: "PHOTO" | "VIDEO" | "EDITOR" | "ASSISTANT" | "ANY", 
    new_expected_salary: number, new_is_open_pool: boolean, new_work_description: string,
    new_work_start_date: Date, new_work_start_time: Date, new_work_end_time: Date,
    new_work_status: "PENDING" | "OPEN" | "ASSIGNED" | "REVIEW" | "COMPLETED") {
  await db.work.update({
    where: {work_id: work_id},
    data: {
      project_id: new_project_id,
      project_role: new_project_role,
      role_category: new_role_category,
      expected_salary: new_expected_salary,
      is_open_pool: new_is_open_pool,
      work_description: new_work_description,
      work_start_date: new_work_start_date,
      work_start_time: new_work_start_time,
      work_end_time: new_work_end_time,
      work_status: new_work_status
    }
  })
}

export async function checkDeleteWorkConflict(work_id: number) {
  const work = await db.work.findFirst({
    where: { AND: [
      {
        OR: [
            {work_status: "ASSIGNED"},
            {work_status: "REVIEW"}
        ]
      },
      {work_id: work_id}
    ]},
  });

  return work;
}

export async function deleteWork(work_id: number) {
  await db.work.delete({
    where: { work_id: work_id }
  });
}