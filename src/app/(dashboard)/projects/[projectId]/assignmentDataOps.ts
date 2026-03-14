'use server'

import { db } from "@/lib/prisma"; // Direct DB access
import { Work } from "@/app/(dashboard)/projects/[projectId]/workDataOps";
import { release } from "os";

export interface UserProfile {
  profile_id: number;
  user_id: number;
  primary_role: "PHOTO" | "VIDEO" | "EDITOR" | "ASSISTANT" | "ANY";
  secondary_role:  "PHOTO" | "VIDEO" | "EDITOR" | "ASSISTANT" | "ANY" | null;
  reliability_score: number;
  is_setup_complete: boolean;
}

type category = "PHOTO" | "VIDEO" | "EDITOR" | "ASSISTANT" | "ANY";

export interface User {
  user_id: number;
  email: string;
  google_id: string | null;
  full_name: string | null;
  avatar_url: string | null;
  user_type: "EMPLOYEE" | "OWNER"
  created_at: Date;
}

export interface Assignment {
  assignment_id: number;
  work_id: number
  user_id: number | null;
  outsider_name: string | null;
  assignment_status: "PENDING" | "CONFIRMED";
  withdrawal_reason: string | null;
}

function getRole(description: string) {
  const roles = [] as category[];

  switch(description) {
    case "2nd Photographer":
      roles.push("ASSISTANT")
    case "Main Photographer":
    case "Photoman":
      roles.push("PHOTO")
      break;

    case "2nd Videographer":
      roles.push("ASSISTANT")  
    case "Main Videographer":
      roles.push("VIDEO")
      break;

    case "Same Day Video Editor":
      roles.push("EDITOR")
  }

  roles.push("ANY")
  return roles;
}

export async function getAssignment(work_id: number) {
  const assignment = await db.assignment.findFirst({
    where: {work_id: work_id}
  })

  return assignment;
}

export async function getAvailableAssignees(work: Work) {
  const available = await db.userprofile.findMany({
    where: {
      user: {
        assignment: {
          none: { work_id: work.work_id }
        }
      }
    },
    include: { user: true },
  });

  const assignees = available.map((available) => ({
    ...available,
    reliability_score: Number(available.reliability_score),
  }));

  const assigneesFinal = assignees.map((assignee) => {
    return {
      userProfile: assignee,
      user: assignee.user 
    }
  })

  return assigneesFinal;
}

export async function getRecommendedAssignees(work: Work, role: string) {
  const label = getRole(role);

  const recommended = await db.userprofile.findMany({
    where: {
      user: {
        assignment: {
          none: { 
            work_id: work.work_id
          }
        }
      }
    },
    orderBy: { reliability_score: "desc" },
    include: { user: true },
    take: 3
  });

  const assignees = recommended.map((recommended) => ({
    ...recommended,
    reliability_score: Number(recommended.reliability_score),
  }));

  const assigneesFinal = assignees.map((assignee) => {
    return {
      userProfile: assignee,
      user: assignee.user
    }
  })

  return assigneesFinal;
}

export async function assignPerson(assignmentId: number, user: User) {
  await db.assignment.update({
    where: {assignment_id: assignmentId},
    data: {user_id: user.user_id}
  })
}

export async function removeWithdrawal(assignmentId: number) {
  await db.assignment.update({
    where: {assignment_id: assignmentId},
    data: {user_id: null, withdrawal_reason: null, assignment_status: "PENDING"}
  })
}

export async function getApplications(workId: number) {
  const users = await db.workapplication.findMany({
    where: {
      work_id: workId,
      application_status: "PENDING",
    },
    include: { user: {
      include: { userprofile: true }
    } },
  });


  const applications = users.map((applicant) => {
    const { userprofile, ...restOfUser } = applicant.user;
    const profile = userprofile!;

    return {
      user: restOfUser,
      userProfile: {
        ...profile,
        reliability_score: Number(profile.reliability_score)
      },
    }
  })

  return applications;
}

export async function acceptApplication(workId: number, userId: number) {
  const application = await db.workapplication.findFirst({
    where: {
      work_id: workId,
      user_id: userId,
    },
  });

  const assignment = await db.assignment.findFirst({
    where: {work_id: workId}
  });

  await db.workapplication.update({
    where: {application_id: application!.application_id},
    data: {application_status: "APPROVED"}
  })

  await db.workapplication.updateMany({
    where: {
      AND: [
        {NOT: {application_id: application!.application_id}},
        {work_id: workId},
      ]
    },
    data: {application_status: "REJECTED"}
  })

  await db.work.update({
    where: {work_id: workId},
    data: {work_status: "ASSIGNED"}
  })

  await db.assignment.update({
    where: {assignment_id: assignment!.assignment_id},
    data: {user_id: userId}
  })
}