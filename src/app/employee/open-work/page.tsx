"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

type EmployeeTab = "PENDING" | "OPEN" | "ACTIVE";

type EmployeeWorkCard = {
  id: number;
  title: string;
  customer: string;
  role: string;
  description: string;
  date: string;
  time: string;
  location: string;
  rate: string;
  status: EmployeeTab;
  activeProgress?: "ONGOING" | "PENDING" | "COMPLETED";
  activeMarker?: "idle" | "loading" | "done";
};

const workCards: EmployeeWorkCard[] = [
  {
    id: 1,
    title: "JOSE AND ANGEL'S WEDDING",
    customer: "Jose Panganiban",
    role: "Main Photographer",
    description:
      "Main Photographer for the Cruz Wedding ceremony and reception. Call time is 1:00pm for setup. Please bring the 85mm lens and secondary flash units.",
    date: "JAN 16, 2029",
    time: "1PM Call Time",
    location: "Barasoain Church, Malolos Bulacan 3000",
    rate: "15,000 PHP",
    status: "OPEN",
  },
  {
    id: 2,
    title: "JOSE AND ANGEL'S WEDDING",
    customer: "Jose Panganiban",
    role: "Main Photographer",
    description:
      "Main Photographer for the Cruz Wedding ceremony and reception. Call time is 1:00pm for setup. Please bring the 85mm lens and secondary flash units.",
    date: "JAN 16, 2029",
    time: "1PM Call Time",
    location: "Barasoain Church, Malolos Bulacan 3000",
    rate: "15,000 PHP",
    status: "OPEN",
  },
  {
    id: 3,
    title: "OLIVIA BAPTISM EVENT",
    customer: "Mark Santos",
    role: "Videographer",
    description:
      "Capture highlights and family interactions during the baptism event and reception. Bring gimbal and backup batteries.",
    date: "FEB 02, 2029",
    time: "9AM Call Time",
    location: "San Agustin Church, Manila",
    rate: "9,000 PHP",
    status: "PENDING",
  },
  {
    id: 4,
    title: "The Cruz Wedding",
    customer: "Cruz Family",
    role: "Main Photographer",
    description:
      "Serve as the Lead Photographer for the ceremony and cocktail hour at the Grand Estate. Focus on capturing candid guest interactions and key family portraits during the sunset window.",
    date: "Oct 3, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Valenzuela City",
    rate: "10,000",
    status: "ACTIVE",
    activeProgress: "ONGOING",
    activeMarker: "idle",
  },
  {
    id: 5,
    title: "The Cruz Wedding",
    customer: "Cruz Family",
    role: "Main Photographer",
    description:
      "Serve as the Lead Photographer for the ceremony and cocktail hour at the Grand Estate. Focus on capturing candid guest interactions and key family portraits during the sunset window.",
    date: "Oct 3, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Valenzuela City",
    rate: "10,000",
    status: "ACTIVE",
    activeProgress: "PENDING",
    activeMarker: "loading",
  },
  {
    id: 6,
    title: "The Cruz Wedding",
    customer: "Cruz Family",
    role: "Main Photographer",
    description:
      "Serve as the Lead Photographer for the ceremony and cocktail hour at the Grand Estate. Focus on capturing candid guest interactions and key family portraits during the sunset window.",
    date: "Oct 3, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Valenzuela City",
    rate: "10,000",
    status: "ACTIVE",
    activeProgress: "COMPLETED",
    activeMarker: "done",
  },
  {
    id: 7,
    title: "The Cruz Wedding",
    customer: "Cruz Family",
    role: "Main Photographer",
    description:
      "Serve as the Lead Photographer for the ceremony and cocktail hour at the Grand Estate. Focus on capturing candid guest interactions and key family portraits during the sunset window.",
    date: "Oct 3, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Valenzuela City",
    rate: "10,000",
    status: "ACTIVE",
    activeProgress: "COMPLETED",
    activeMarker: "done",
  },
];

function tabClass(isActive: boolean) {
  return isActive
    ? "bg-slate-900 text-white hover:bg-slate-800"
    : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100";
}

function activeBadgeClass(progress: EmployeeWorkCard["activeProgress"]) {
  if (progress === "PENDING") {
    return "bg-amber-600 text-white";
  }

  if (progress === "COMPLETED") {
    return "bg-green-600 text-white";
  }

  return "bg-slate-300 text-slate-700";
}

export default function EmployeeOpenWorkPage() {
  const [selectedTab, setSelectedTab] = useState<EmployeeTab>("OPEN");
  const [applyTarget, setApplyTarget] = useState<EmployeeWorkCard | null>(null);
  const [declineTarget, setDeclineTarget] = useState<EmployeeWorkCard | null>(
    null,
  );
  const [withdrawTarget, setWithdrawTarget] = useState<EmployeeWorkCard | null>(
    null,
  );
  const [withdrawReason, setWithdrawReason] = useState("");

  const contentTab: EmployeeTab =
    selectedTab === "OPEN"
      ? "PENDING"
      : selectedTab === "PENDING"
        ? "OPEN"
        : "ACTIVE";

  const filteredCards = useMemo(
    () => workCards.filter((card) => card.status === contentTab),
    [contentTab],
  );

  const openApplyConfirm = (card: EmployeeWorkCard) => {
    setApplyTarget(card);
  };

  const openDeclineConfirm = (card: EmployeeWorkCard) => {
    setDeclineTarget(card);
  };

  const handleApplyConfirm = () => {
    // Frontend-only interaction for now; backend apply endpoint will be wired later.
    setApplyTarget(null);
  };

  const handleDeclineConfirm = () => {
    // Frontend-only interaction for now; backend decline endpoint will be wired later.
    setDeclineTarget(null);
  };

  const openWithdrawModal = (card: EmployeeWorkCard) => {
    setWithdrawTarget(card);
    setWithdrawReason("");
  };

  const handleWithdrawConfirm = () => {
    // Frontend-only interaction for now; backend withdraw endpoint will be wired later.
    setWithdrawTarget(null);
    setWithdrawReason("");
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            {selectedTab === "ACTIVE"
              ? "Active Work Details"
              : selectedTab === "PENDING"
                ? "Your Pending Invites"
                : "Open Work"}
          </h1>
          <div className="h-px w-40 bg-slate-300 md:w-[450px]" />
        </div>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            size="sm"
            className={`h-8 ${tabClass(selectedTab === "OPEN")}`}
            onClick={() => setSelectedTab("OPEN")}
          >
            Open Work
          </Button>
          <Button
            type="button"
            size="sm"
            className={`h-8 ${tabClass(selectedTab === "PENDING")}`}
            onClick={() => setSelectedTab("PENDING")}
          >
            Pending Invites
          </Button>
          <Button
            type="button"
            size="sm"
            className={`h-8 ${tabClass(selectedTab === "ACTIVE")}`}
            onClick={() => setSelectedTab("ACTIVE")}
          >
            Active Work
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {filteredCards.length === 0 ? (
          <div className="col-span-full rounded-md border border-slate-300 bg-white p-6 text-sm text-slate-600 shadow-sm">
            No work found for this tab.
          </div>
        ) : (
          filteredCards.map((card) => (
            <article
              key={card.id}
              className="rounded-md border border-slate-300 bg-white p-4 shadow-sm"
            >
              {contentTab === "ACTIVE" ? (
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-2xl font-semibold leading-tight text-slate-900">
                      {card.title}
                    </h2>
                    <div className="flex items-center gap-3">
                      {card.activeMarker === "done" ? (
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4 text-slate-600"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="m8 12 2.5 2.5L16 9" />
                        </svg>
                      ) : card.activeMarker === "loading" ? (
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4 animate-spin text-slate-400"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 12a9 9 0 1 1-9-9" />
                        </svg>
                      ) : (
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4 text-slate-600"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="9" />
                        </svg>
                      )}

                      <Button
                        type="button"
                        size="sm"
                        className="h-8 rounded-md bg-slate-800 px-3 text-xs text-white hover:bg-slate-700"
                        onClick={() => openWithdrawModal(card)}
                      >
                        Withdraw
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${activeBadgeClass(
                        card.activeProgress,
                      )}`}
                    >
                      {card.activeProgress ?? "ONGOING"}
                    </span>
                    <span className="text-sm text-slate-700">{card.role}</span>
                  </div>

                  <div className="h-px bg-slate-300" />

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_180px]">
                    <div>
                      <p className="text-4xl font-semibold text-slate-900">
                        P{card.rate}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        Expected Salary
                      </p>
                    </div>

                    <div className="space-y-2 text-sm text-slate-700">
                      <p className="flex items-center gap-2">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" />
                          <path d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                        {card.date}
                      </p>
                      <p className="flex items-center gap-2">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        {card.time}
                      </p>
                      <p className="flex items-start gap-2">
                        <svg
                          viewBox="0 0 24 24"
                          className="mt-0.5 h-4 w-4 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M12 21s-7-5.686-7-11a7 7 0 0 1 14 0c0 5.314-7 11-7 11z" />
                          <circle cx="12" cy="10" r="2.5" />
                        </svg>
                        <span>{card.location}</span>
                      </p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-700">
                    {card.description}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_220px]">
                  <div className="space-y-3">
                    <div>
                      <h2 className="text-xl font-semibold leading-tight text-slate-900">
                        {card.title}
                      </h2>
                      <p className="mt-1 text-sm text-slate-700">
                        Customer Name: {card.customer}
                      </p>
                      <p className="mt-1 text-sm text-slate-800">
                        ROLE: <span className="font-semibold">{card.role}</span>
                      </p>
                    </div>

                    <p className="max-w-xl text-sm leading-relaxed text-slate-700">
                      {card.description}
                    </p>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className="space-y-2 text-sm text-slate-700">
                      <p className="flex items-center gap-2">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" />
                          <path d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                        {card.date}
                      </p>
                      <p className="flex items-center gap-2">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        {card.time}
                      </p>
                      <p className="flex items-start gap-2">
                        <svg
                          viewBox="0 0 24 24"
                          className="mt-0.5 h-4 w-4 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M12 21s-7-5.686-7-11a7 7 0 0 1 14 0c0 5.314-7 11-7 11z" />
                          <circle cx="12" cy="10" r="2.5" />
                        </svg>
                        <span>{card.location}</span>
                      </p>
                      <p className="flex items-center gap-2 font-medium text-slate-900">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M12 20h9" />
                          <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                        </svg>
                        Expected Rate: {card.rate}
                      </p>
                    </div>

                    {contentTab === "OPEN" ? (
                      <div className="mt-3 flex justify-end gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          className="h-8 min-w-24 rounded-md border-rose-300 px-4 text-sm text-rose-600 hover:bg-rose-50"
                          onClick={() => openDeclineConfirm(card)}
                        >
                          Decline
                        </Button>
                        <Button
                          type="button"
                          className="h-8 min-w-24 rounded-md bg-green-600 px-5 text-sm text-white hover:bg-green-500"
                          onClick={() => openApplyConfirm(card)}
                        >
                          Apply
                        </Button>
                      </div>
                    ) : contentTab === "PENDING" ? (
                      <Button
                        type="button"
                        variant="outline"
                        className="mt-3 h-8 min-w-24 self-end rounded-md border-slate-300 px-4 text-sm text-slate-700"
                      >
                        Pending
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        variant="outline"
                        className="mt-3 h-8 min-w-24 self-end rounded-md border-slate-300 px-4 text-sm text-slate-700"
                      >
                        View
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </article>
          ))
        )}
      </div>

      {applyTarget ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Apply confirmation"
        >
          <div className="w-full max-w-sm rounded-xl bg-white p-5 text-center shadow-lg">
            <h3 className="text-base font-semibold text-slate-900">
              Apply to Work
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Do you want to apply for "{applyTarget.title}"?
            </p>
            <div className="mt-5 flex justify-center gap-3">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
                onClick={() => setApplyTarget(null)}
              >
                Cancel
              </Button>
              <Button type="button" size="sm" onClick={handleApplyConfirm}>
                Confirm
              </Button>
            </div>
          </div>
        </div>
      ) : null}

      {declineTarget ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Decline confirmation"
        >
          <div className="w-full max-w-sm rounded-xl bg-white p-5 text-center shadow-lg">
            <h3 className="text-base font-semibold text-slate-900">
              Decline Work
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Do you want to decline "{declineTarget.title}"?
            </p>
            <div className="mt-5 flex justify-center gap-3">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
                onClick={() => setDeclineTarget(null)}
              >
                Cancel
              </Button>
              <Button
                type="button"
                size="sm"
                className="bg-rose-600 text-white hover:bg-rose-500"
                onClick={handleDeclineConfirm}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      ) : null}

      {withdrawTarget ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Withdraw assignment confirmation"
        >
          <div className="w-full max-w-lg rounded-xl bg-white p-5 text-center shadow-lg">
            <h3 className="text-3xl font-semibold text-slate-900">
              Withdraw Assignment?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Please state the reason why you will withdraw.
            </p>

            <textarea
              value={withdrawReason}
              onChange={(event) => setWithdrawReason(event.target.value)}
              className="mt-4 h-32 w-full resize-none rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 outline-none focus-visible:border-slate-400"
              placeholder=""
            />

            <div className="mt-4 flex justify-center gap-3">
              <Button
                type="button"
                variant="outline"
                className="h-10 min-w-28 border-slate-300 text-slate-700 hover:bg-slate-50"
                onClick={() => setWithdrawTarget(null)}
              >
                Cancel
              </Button>
              <Button
                type="button"
                className="h-10 min-w-28"
                onClick={handleWithdrawConfirm}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
