'use server'

//File for all data operations related to project
import { assignment_assignment_status, Prisma } from "@/generated/client";
import { db } from "@/lib/prisma"; // Direct DB access
import { Decimal } from "@prisma/client/runtime/client";
import { printAssignee, printStatus }
  from "@/app/(dashboard)/projects/[projectId]/workMiscOps";
import { getAvailableAssignees, getRecommendedAssignees, getAssignment, getApplications }
  from "@/app/(dashboard)/projects/[projectId]/assignmentDataOps";
import { da } from "date-fns/locale";
import { availableMemory } from "process";
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { sendEmail } from "@/lib/email";

type category = "PHOTO" | "VIDEO" | "EDITOR" | "ASSISTANT" | "ANY";

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

  if (work) {
    return {
      ...work,
      expected_salary: Number(work.expected_salary)
    };
  }
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
      work_status: new_work_status,

      assignment: {
        create: {

        }
      }
    }
  });
}

export async function editWork(work_id: number, new_project_id: number,
  new_expected_salary: number, new_is_open_pool: boolean, new_work_description: string,
  new_work_start_date: Date, new_work_start_time: Date | null, new_work_end_time: Date | null) {

  const convertSalary = Decimal(new_expected_salary);
  const work = await getWork(work_id);

  const status = (work!.work_status == "ASSIGNED" ||
    work!.work_status == "REVIEW" ||
    work!.work_status == "COMPLETED"
  ) ? work!.work_status :
    (new_is_open_pool) ? "OPEN" : "PENDING"


  await db.work.update({
    where: { work_id: work_id },
    data: {
      project_id: new_project_id,
      expected_salary: convertSalary,
      is_open_pool: new_is_open_pool,
      work_description: new_work_description,
      work_start_date: new_work_start_date,
      work_start_time: new_work_start_time,
      work_end_time: new_work_end_time,
      work_status: status
    }
  })

  if (!new_is_open_pool) {
    await db.workapplication.updateMany({
      where: { work_id: work_id },
      data: { application_status: "REJECTED" }
    })
  }
//--------EMAIL SENDING LOGIC DISABLE IF IT MESSES EVERYTHING UP
  if (work!.work_status === "ASSIGNED" || work!.work_status === "REVIEW") {

    // Fetch the assignments linked to this work, and include the associated user's email
    const activeAssignments = await db.assignment.findMany({
      where: {
        work_id: work_id,
        user_id: { not: null } // Exclude any assignments made to an 'outsider_name' without a user_id
      },
      include: {
        user: {
          select: { email: true }
        }
      }
    });

    // Loop through the assignments (just in case there are multiple users assigned) and email them
    for (const assignment of activeAssignments) {
      if (assignment.user?.email) {
        const subject = `Update on your assigned work: Task #${work_id}`;
        const text = `Hello,\n\nThe details for your assigned work (ID: ${work_id}) have just been updated.\n\nUpdated Description: ${new_work_description}\n\nPlease check Compass for the full updated details!`;

        await sendEmail(assignment.user.email, subject, text);
      }
    }
  }
}

export async function checkDeleteWorkConflict(work_id: number) {
  const work = await db.work.findFirst({
    where: {
      AND: [
        {
          OR: [
            { work_status: "ASSIGNED" },
            { work_status: "REVIEW" }
          ]
        },
        { work_id: work_id }
      ]
    },
  });

  return work;
}

export async function deleteWork(work_id: number) {
  const assignment = await db.assignment.findFirst({
    where: { work_id: work_id }
  })

  await db.assignment.delete({
    where: { assignment_id: assignment?.assignment_id }
  })

  await db.workapplication.deleteMany({
    where: { work_id: work_id }
  })

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
    const availableAssignees = await getAvailableAssignees(work);
    const recommendedAssignees = await getRecommendedAssignees(work, work.project_role);
    const applications = await getApplications(work.work_id);
    const assignment = await getAssignment(work.work_id);

    return {
      work: work,
      printedAssignee: printedAssignee ?? "",
      printedStatus: printedStatus,
      availableAssignees: availableAssignees,
      recommendedAssignees: recommendedAssignees,
      applications: applications,
      assignment: assignment!
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

  await db.work.updateMany({
    where: {
      work_id: work_id,
      is_open_pool: true
    },
    data: { work_status: "OPEN" }
  })

  await db.assignment.update({
    where: { assignment_id: assignment!.assignment_id },
    data: { user_id: null }
  });

  await db.workapplication.deleteMany({
    where: { work_id: work_id }
  })
}

export async function markWorkAsComplete(work_id: number) {
  await db.work.update({
    where: { work_id: work_id },
    data: {
      work_status: "COMPLETED"
    }
  })

  const work = await db.work.findFirst({where: {work_id: work_id}});
  const path = "/projects/" + work?.project_id;
  
  revalidatePath(path)
  redirect(path)
}

export async function getFreelancer(work_id: number) {
  const assignment = await db.assignment.findFirst({
    where: { work_id: work_id }
  });

  return assignment?.outsider_name;
}

export async function isValidWorkDeadline(project_id: number, date: Date) {
  const project = await db.project.findFirst({ where: { project_id: project_id } });

  const d1 = project!.project_start_date.setHours(0, 0, 0, 0);
  const d2 = date.setHours(0, 0, 0, 0);

  const check = d1 > d2;

  return (check) ? 1 : 0;
}

export async function isValidWithdraw(work_id: number) {
  const work = await db.work.findFirst({ where: { work_id: work_id } });
  work!.work_start_date.setHours(0, 0, 0, 0)
  const currentDate = new Date();

  const d1 = work!.work_start_date.setDate(work!.work_start_date.getDate() - 7);
  const d2 = currentDate.setHours(0, 0, 0, 0);

  const check = (d1 < d2) ? 1 : 0;
  return check;
}

export async function isValidRole(role: string, date: Date, projectId: number) {
  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date(date);
  endOfDay.setHours(23, 59, 59, 999);

  const works = await db.work.findMany({
    where: {
      work_start_date: {
        gte: startOfDay,
        lte: endOfDay
      },
      project_role: role,
      project_id: projectId
    }
  })

  return works.length;
}

export async function markWorkAsNotComplete(work_id: number) {
    const assignment = await db.assignment.findFirst({where: {work_id: work_id}})

  if (assignment!.user_id != undefined) {
    await db.workapplication.create({
      data: {
        work_id: work_id,
        user_id: assignment!.user_id!,
        application_status: "APPROVED"
      }
    })
  }

  await db.work.update({
    where: { work_id: work_id },
    data: {
      work_status: "REVIEW"
    }
  })

  const work = await db.work.findFirst({where: {work_id: work_id}});
  const path = "/projects/" + work?.project_id;
  
  revalidatePath(path)
  redirect(path)
}

export async function isValidRoleEdit(work_id: number, date: Date, projectId: number, role: string) {
  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date(date);
  endOfDay.setHours(23, 59, 59, 999);

  const works = await db.work.findMany({
    where: {
      work_start_date: {
        gte: startOfDay,
        lte: endOfDay
      },
      project_id: projectId,
      project_role: role,
      NOT: { work_id: work_id }
    }
  })

  return works.length;
}