"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/features/ProjectCard"; // Your restored component
import { OrganizeButton } from "@/components/features/OrganizeButton";
import { AddProjectButton } from "@/components/features/AddProjectButton";
import {
  Project,
  getProjects,
  getRemainingDays,
  getProjectMissingWorks, 
  getProjectWorks,
  isCompleteProject
} from "@/app/(dashboard)/projects/projectDataOps";
import ProjectNullValuesWindow, {
  ProjectWorksExistWindow,
  ProjectInvalidDeadlineWindow,
  ProjectInvalidNameLengthWindow
} from "@/components/features/ProjectAlerts";
import PrintReportButton from "@/components/features/PrintReportButton";
import dynamic from 'next/dynamic';

type enrichedProjects = {
  project: Project;
  activeWorks: number;
  allWorks: number;
  isComplete?: number;
}

interface ProjectListProps {
  initialProjects: enrichedProjects[];
}

interface PrintReportButtonProps {
  openNullWindow: () => void;
}

export default function ProjectDashboard({
  initialProjects,
}: ProjectListProps) {
  const [projects, setProjects] = useState<enrichedProjects[]>(initialProjects);

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8;

  //Variables for alert windows
  const [nullWindow, setNullWindow] = useState(false);
  const [worksWindow, setWorksWindow] = useState(false);
  const [deadlineWindow, setDeadlineWindow] = useState(false);
  const [lengthWindow, setLengthWindow] = useState(false);

  const PrintComponent = dynamic<PrintReportButtonProps>(
    () => import('@/components/features/PrintReportButton'), 
    { ssr: false } // This tells Next.js: "Don't run this on the server!"
  );

  //Gets the projects in the database and assigns them to the projects displayed in the
  //dashboard. The method is passed down to most child components so they can "refresh"
  //the dashboard at will after performing CRUD
  async function refresh(filters: string[] = []) {
    const newProjects = await getProjects(filters);

    const enrichedProjects = await Promise.all(newProjects.map(async (project) => {
          const projectData = project;
          const activeWorks = await getProjectMissingWorks(project.project_id);
          const allWorks = await getProjectWorks(project.project_name)!;
          const allWorksLength = allWorks?.length || 0;
          const isComplete = await isCompleteProject(project.project_id);
      
          return {
            project: projectData,
            activeWorks: allWorksLength - activeWorks,
            allWorks: allWorksLength,
            isComplete: isComplete
          };
        }));

    setProjects(() => enrichedProjects);
  }

  const returnToPageOne = () => { setCurrentPage(1); }

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const hasProjects = projects.length > 0;

  return (
    <div className="flex flex-col min-h-[80vh] space-y-5 sm:space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Project Dashboard
          </h2>
        </div>
        <div className="flex gap-x-3">
          <PrintComponent openNullWindow={() => setNullWindow(true)}/>
          <OrganizeButton refresh={refresh} returnToPageOne={returnToPageOne} />
        </div>
      </div>

      {hasProjects ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {currentProjects.map((proj) => (
            <ProjectCard
              key={proj.project.project_id}
              projectId={proj.project.project_id}
              // --- MAPPING HAPPENS HERE ---
              // Left side = Component Prop | Right side = Database Column
              name={proj.project.project_name}
              client={proj.project.client_name}
              startDate={proj.project.project_start_date}
              endDate={proj.project.project_end_date}
              location={proj.project.project_location}
              description={proj.project.project_description}
              // Ensure the string matches the exact "ACTIVE" | "ARCHIVED" type
              status={proj.project.project_status as "ACTIVE" | "ARCHIVED"}
              activeWorks={proj.activeWorks}
              allWorks={proj.allWorks}
              isComplete={proj.isComplete}
              //Passese some parameters of the alert windows so that they can be opened
              //from another component
              openNullWindow={() => setNullWindow(true)}
              openWorkConflictWindow={() => setWorksWindow(true)}
              openInvalidDeadlineWindow={() => setDeadlineWindow(true)}
              openInvalidLengthWindow={() => setLengthWindow(true)}
              refresh={refresh}
            />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[65vh] flex-col items-center justify-center text-center">
          <p className="text-lg font-semibold text-slate-900">No Projects</p>
          <AddProjectButton
            variant="empty"
            refresh={refresh}
            openNullWindow={() => setNullWindow(true)}
            openWorkConflictWindow={() => setWorksWindow(true)}
            openInvalidDeadlineWindow={() => setDeadlineWindow(true)}
            openInvalidLengthWindow={() => setLengthWindow(true)}
          />
          <p className="mt-3 text-sm text-slate-500">Click to add</p>
        </div>
      )}

      <div className="fixed bottom-4 left-0 right-0 flex justify-center pointer-events-none">
        <div className="flex items-center gap-4 py-3 px-6 bg-white shadow-lg border border-slate-200 rounded-full pointer-events-auto">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          <span className="text-sm text-slate-600">
            Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
          </span>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>

      {hasProjects ? (
        <AddProjectButton
          refresh={refresh}
          openNullWindow={() => setNullWindow(true)}
          openWorkConflictWindow={() => setWorksWindow(true)}
          openInvalidDeadlineWindow={() => setDeadlineWindow(true)}
          openInvalidLengthWindow={() => setLengthWindow(true)}
        />
      ) : null}

      {/* Window that appears if one of the required inputs is null */}
      <ProjectNullValuesWindow
        open={nullWindow}
        onClose={() => setNullWindow(false)}
      />

      {/* Window that appears if project has active works */}
      <ProjectWorksExistWindow
        open={worksWindow}
        onClose={() => setWorksWindow(false)}
      />

      {/* Window that appears if owner sets the deadline to be before the current date */}
      <ProjectInvalidDeadlineWindow
        open={deadlineWindow}
        onClose={() => setDeadlineWindow(false)}
      />

      {/* Window that appears if entered project name is more than 50 characters */}
      <ProjectInvalidNameLengthWindow
        open={lengthWindow}
        onClose={() => setLengthWindow(false)}
      />
    </div>
  );
}
