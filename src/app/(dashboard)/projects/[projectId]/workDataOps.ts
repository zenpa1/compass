'use server'

//File for all data operations related to project
import { Prisma } from "@/generated/client";
import { db } from "@/lib/prisma"; // Direct DB access
import { Decimal } from "@prisma/client/runtime/client";
import { printAssignee, printStatus } 
  from "@/app/(dashboard)/projects/[projectId]/workMiscOps";

export interface Work {
  work_id: number;
  project_id: number;
  project_role: string;
  role_category: "PHOTO" | "VIDEO" | "EDITOR" | "ASSISTANT" | "ANY";
  expected_salary: number;
  is_open_pool: boolean;
  work_description: string;
  work_start_date: Date | null;
  work_start_time: Date | null;
  work_end_time: Date | null;
  work_status: "PENDING" | "OPEN" | "ASSIGNED" | "REVIEW" | "COMPLETED";
}

export default async function getWork(id: number) {
  const work = await db.work.findFirst({
    where: { work_id: id },
  });

  if(work) {return {
    ...work,
    expected_salary: Number(work.expected_salary)
  };}
  else return null;
}

export async function getProjectWorks(id: number) {
  const works = await db.work.findMany({
    where: { project_id: id },
  });

  const worksWithNumberSalary = works.map((work) => ({
  ...work,
  expected_salary: Number(work.expected_salary), // or parseFloat(work.salary)
  }));

  return worksWithNumberSalary;
}

export async function createWork(new_project_id: number, new_project_role: string, 
    new_role_category: "PHOTO" | "VIDEO" | "EDITOR" | "ASSISTANT" | "ANY", 
    new_expected_salary: number, new_is_open_pool: boolean, new_work_description: string,
    new_work_start_date: Date, new_work_start_time: Date, new_work_end_time: Date,
    new_work_status: "PENDING" | "OPEN" | "ASSIGNED" | "REVIEW" | "COMPLETED") {

  const convertSalary = Decimal(new_expected_salary);
  await db.work.create({
    data: {
      project_id: new_project_id,
      project_role: new_project_role,
      role_category: new_role_category,
      expected_salary: convertSalary,
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
    new_expected_salary: number, new_is_open_pool: boolean, new_work_description: string,
    new_work_start_date: Date, new_work_start_time: Date | null, new_work_end_time: Date | null) {
  
    const convertSalary = Decimal(new_expected_salary);
    await db.work.update({
    where: {work_id: work_id},
    data: {
      project_id: new_project_id,
      expected_salary: convertSalary,
      is_open_pool: new_is_open_pool,
      work_description: new_work_description,
      work_start_date: new_work_start_date,
      work_start_time: new_work_start_time,
      work_end_time: new_work_end_time,
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

export async function getAssignee(work_id: number) {
  const assignment = await db.assignment.findFirst({
    where: { work_id: work_id }
  });

  const user_id = assignment?.user_id ?? 0;
  
  const user = await db.user.findFirst({
    where: { user_id: user_id }
  });

  return user;
}

export async function checkWithdrawal(work_id: number) {
  const assignment = await db.assignment.findFirst({
    where: { work_id: work_id }
  });

  return assignment?.assignment_status;
}

export async function getEnrichedWorks(project_id: number) {
  const works = await getProjectWorks(project_id);

  const enrichedWorks = await Promise.all(works.map(async (work) => {
      const printedAssignee = await printAssignee(work);
      const printedStatus = await printStatus(work);
      
      return {
        work: work,
        printedAssignee: printedAssignee ?? "",
        printedStatus: printedStatus
      };
  }));

  return enrichedWorks;
}

export async function isWorkActive(work_id: number) {
  const work = await getWork(work_id) as Work

  return work.work_status == "ASSIGNED" || work.work_status == "REVIEW";
}


export async function cancelRequest(work_id: number) {
  const assignment = await db.assignment.findFirst({
    where: { work_id: work_id },
  });

  await db.assignment.delete({
    where: { assignment_id: assignment!.assignment_id }
  });
}

export async function markWorkAsComplete(work_id: number) {
    await db.work.update({
    where: {work_id: work_id},
    data: {
      work_status: "COMPLETED"
    }
  })
}