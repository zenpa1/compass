"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  createWork, 
  isValidWorkDeadline,
  isValidRole } 
  from "@/app/(dashboard)/projects/[projectId]/workDataOps";
import toISODate from "@/app/(dashboard)/projects/projectMiscOps";
import { Project } from "@/app/(dashboard)/projects/projectDataOps";
import DatePicker from "react-datepicker";
import { Listbox } from '@headlessui/react'

interface AddWorkButtonProps {
  project: Project;
  refresh: () => void;
  openNullWindow: () => void;
  openDeadlineWindow: () => void;
  openRoleWindow: () => void;
  openWorkDateWindow: () => void;
}

const roleOptions = [
  "Main Photographer",
  "Main Videographer",
  "2nd Videographer",
  "2nd Photographer",
  "Booth Operator",
  "Same Day Video Editor",
  "Photoman",
];

export function AddWorkButton({
  project,
  refresh,
  openNullWindow,
  openDeadlineWindow,
  openRoleWindow,
  openWorkDateWindow
}: AddWorkButtonProps) {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState(roleOptions[0]);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(project.project_start_date);
  const [salary, setSalary] = useState(0.0);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [setToTba, setSetToTba] = useState(false);
  const [publishToOpenPool, setPublishToOpenPool] = useState(false);

  const validTimes = ["TBA", 
    ...Array.from({ length: 24 }, (_, i) => {
        const hour = i % 12 || 12;
        const suffix = i < 12 ? " AM" : " PM";
        return hour + suffix;
      })
    ]

  const [startTimeForm, setStartTimeForm] = useState(0);
  const [endTimeForm, setEndTimeForm] = useState(0);

  const closeModal = () => {
    resetValues();
    setOpen(false);
  };

  const resetValues = () => {
    setRole(roleOptions[0]);
    setDescription("");
    setDate(project.project_start_date);
    setSalary(0.0);
    setStartTime(new Date());
    setEndTime(new Date());
    setPublishToOpenPool(false);
    setSetToTba(false);
    setStartTimeForm(0);
    setEndTimeForm(0);
  };

  const handleConfirm = async () => {
    if (description == "" || date == null) {
      // Notifies the user of unfilled form values via a new window
      openNullWindow();
    } else {
      const deadlineCheck = await isValidWorkDeadline(project.project_id, date);

      if(deadlineCheck == 1) {
        openWorkDateWindow();
      }
      else {
        const roleCheck = await isValidRole(role, date, project.project_id);

        if(roleCheck != 0) {
          openRoleWindow();
        }
        else {
          createWork(
            project.project_id,
            role,
            getCategory(),
            salary,
            publishToOpenPool,
            description,
            date,
            startTime,
            endTime,
            publishToOpenPool ? "OPEN" : "PENDING",
          );

          //Resets the values in the form so that they are empty when the user
          //opens it again
          resetValues();

          refresh();
          closeModal();
        }
      }
    }
  };

  const handleStartDateChange = (event: any) => {
    const dateString = event.target.value;
    if (dateString) {
      setDate(new Date(dateString));
    }
  };

  const handleStartTimeChange = (newTime: string) => {
    const timeString = newTime;

    const time = validTimes.indexOf(timeString);
    if(time != 0) setSetToTba(false);

    setStartTimeForm(time);
    if(time == 0) setStartTime(null);
    else setStartTime(new Date(0, 0, 0, time-1, 0));
  }

  const handleEndTimeChange = (newTime: string) => {
    const timeString = newTime;

    const time = validTimes.indexOf(timeString);
    if(time != 0) setSetToTba(false);

    setEndTimeForm(time);
    setEndTime(new Date(0, 0, 0, time-1, 0));
  }

  const handleSetToTbaChange = () => {
    if(setToTba) {
      setSetToTba(false);
    }
    else {
      setStartTimeForm(0);
      setEndTimeForm(0);
      setStartTime(null);
      setEndTime(null);
      setSetToTba(true);
    }
  }

  const getCategory = () => {
    if (role == roleOptions[0] || role == roleOptions[6]) return "PHOTO";
    else if (role == roleOptions[1]) return "VIDEO";
    else if (
      role == roleOptions[2] ||
      role == roleOptions[3] ||
      role == roleOptions[4]
    )
      return "ASSISTANT";
    else if (role == roleOptions[5]) return "EDITOR";
    return "ANY";
  };

  return (
    <>
      <Button
        type="button"
        className="h-9 w-full rounded-md bg-slate-900 text-sm font-semibold uppercase tracking-wide text-white hover:bg-slate-800"
        onClick={() => setOpen(true)}
      >
        + Add Work
      </Button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4">
          <div className="w-full max-w-lg rounded-md border border-slate-300 bg-white p-5 shadow-xl">
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-xl font-semibold leading-none text-slate-900">
                Enter Work Details
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close add work modal"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-3 text-sm text-slate-800">
              <div className="flex items-center gap-2">
                <label className="text-sm font-semibold text-slate-900">
                  Select Role:
                </label>
                {/*<select
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                  className="h-9 flex-1 rounded-md border border-slate-300 px-3 text-sm text-slate-800 focus:border-slate-500 focus:outline-none"
                >
                  {roleOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>*/}

                <div className="relative flex-auto">
                  <Listbox value={role} onChange={setRole}>
                    <Listbox.Button className="h-9 w-full flex-1 rounded-md border border-slate-300 px-3 text-sm text-slate-800 focus:border-slate-500 focus:outline-none">
                      {role || "Role"}
                    </Listbox.Button>

                    <Listbox.Options className="z-1 absolute w-full max-h-75 overflow-y-auto mt-1 bg-white border rounded-md shadow-lg">
                      {roleOptions.map((r) => (
                        <Listbox.Option key={r} value={r ?? ""}
                          className={({ active }) =>
                            `cursor-pointer px-4 py-2 ${
                              active ? 'bg-[#2a3f54] text-white' : 'text-slate-700'
                            }`
                          }
                        >
                          {r}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                </div>

                <div className="flex-1"/>
              </div>

              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Enter work description here."
                className="h-24 w-full resize-none rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none"
              />

              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-900">
                    Date:
                  </span>
                  <Input
                    type="date"
                    value={toISODate(date)}
                    onChange={handleStartDateChange}
                    placeholder="dd/mm/yy"
                    className="h-8 border-slate-300 px-2 text-xs"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-900">
                    Talent Fee:
                  </span>
                  <div className="relative overflow-hidden">
                    <Input
                      type="number"
                      min="0"
                      value={salary}
                      onChange={(event) =>
                        setSalary(parseFloat(event.target.value))
                      }
                      placeholder="Enter fee in pesos"
                      className="h-9 border-slate-300 px-3 text-sm  [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    />

                    <div className="absolute right-1 top-1.5 flex h-xs flex-col pl-1 gap-0.5">
                      <button
                        onClick={() => setSalary(salary + 500)}
                        type="button"
                        className="flex flex-1 items-center px-2 hover:bg-slate-100 text-slate-500 text-[10px] leading-none rounded-md"
                      >
                        ▲
                      </button>
                      <button
                        onClick={() => {
                          if(salary - 500 < 0) setSalary(0);
                          else setSalary(salary - 500);
                        }}
                        type="button"
                        className="flex flex-1 items-center px-2 hover:bg-slate-100 text-slate-500 text-[10px]"
                      >
                        ▼
                      </button>
                    </div>
                  </div> 
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-900">
                    Start Time:
                  </span>
                  <div className="relative basis-128">
                    <Listbox value={validTimes.at(startTimeForm)} onChange={handleStartTimeChange}>
                      <Listbox.Button className={`flex-1 w-full px-3 py-2 rounded-md bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 focus:ring-2 focus:ring-slate-500/20 text-sm outline-none transition-all ${(startTime == new Date()) ? "text-slate-400" : "text-slate-700"}`}>
                        {validTimes.at(startTimeForm) || "Start Time"}
                      </Listbox.Button>

                      <Listbox.Options className="z-1 absolute w-full max-h-100 overflow-y-auto bottom-full mb-1 bg-white border rounded-md shadow-lg">
                        {validTimes.map((t) => (
                          <Listbox.Option key={t} value={t}
                            className={({ active }) =>
                              `cursor-pointer px-4 py-2 ${
                                active ? 'bg-[#2a3f54] text-white' : 'text-slate-700'
                              }`
                            }
                          >
                            {t}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Listbox>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-900">
                    End Time:
                  </span>
                  <div className="relative basis-128">
                    <Listbox value={validTimes.at(endTimeForm)} onChange={handleEndTimeChange}>
                      <Listbox.Button className={`flex-1 w-full px-3 py-2 rounded-md bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 focus:ring-2 focus:ring-slate-500/20 text-sm outline-none transition-all ${(endTime == new Date()) ? "text-slate-400" : "text-slate-700"}`}>
                        {validTimes.at(endTimeForm) || "End Time"}
                      </Listbox.Button>

                      <Listbox.Options className="z-1 absolute w-full max-h-100 overflow-y-auto bottom-full mb-1 bg-white border rounded-md shadow-lg">
                        {validTimes.map((t) => (
                          <Listbox.Option key={t} value={t}
                            className={({ active }) =>
                              `cursor-pointer px-4 py-2 ${
                                active ? 'bg-[#2a3f54] text-white' : 'text-slate-700'
                              }`
                            }
                          >
                            {t}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Listbox>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1 text-sm font-medium text-slate-800">
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={setToTba}
                    onChange={handleSetToTbaChange}
                    className="h-4 w-4 rounded border-slate-300"
                  />
                  Set Time to TBA
                </label>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={publishToOpenPool}
                    onChange={(event) =>
                      setPublishToOpenPool(event.target.checked)
                    }
                    className="h-4 w-4 rounded border-slate-300"
                  />
                  Publish to Open Pool?
                </label>
              </div>

              <div className="pt-1 text-center">
                <Button
                  type="button"
                  size="sm"
                  onClick={handleConfirm}
                  className="min-w-28 bg-slate-800 text-sm font-semibold text-white hover:bg-slate-700"
                >
                  CONFIRM
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
