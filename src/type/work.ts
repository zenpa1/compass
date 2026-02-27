export type Work = {
  work_id: number;
  project_role: string;
  role_category: string;
  expected_salary: number;
  is_open_pool: boolean;
  work_description: string;
  work_start_date: string;
  work_start_time?: string | null;
  work_end_time?: string | null;
  work_status: "OPEN" | "ASSIGNED" | "REVIEW" | "COMPLETED";
  project: {
    project_name: string;
    client_name: string;
    project_end_date: string;
    project_status: "ACTIVE" | "ARCHIVED";
    project_location: string;
  };
  workapplication: {
    application_id: number;
    application_status: "PENDING" | "APPROVAL" | "APPROVED" | "REJECTED";
    user_id: number;
    work_id: number;
  }[];
};