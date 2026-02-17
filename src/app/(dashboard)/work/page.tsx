"use client";

import { useState, useEffect } from "react";
import WorkTabs, { WorkStatus } from "@/components/features/WorkTabs";
import { WorkCard } from "@/components/features/WorkCard";
import type { Work } from "@/type/work";

//console.log("params.id:", params.id)

export default function WorksPage() {
  const [selectedTab, setSelectedTab] = useState<WorkStatus>("OPEN");
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchWorks = async () => {
    setLoading(true);

    try {
      const res = await fetch(`/api/work?tab=${selectedTab}`);

      if (!res.ok) {
        const errorText = await res.text();
        console.error("API Error:", errorText);
        throw new Error("Failed to fetch works");
      }

      const data = await res.json();
      setWorks(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setWorks([]);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = async (workId: number) => {
    console.log("Applying workId:", workId); // should log 6
    try {
      const res = await fetch(`/api/work/${workId}/apply`, {
        method: "POST",
      });
      console.log("Fetch response status:", res.status); // log HTTP code
      const text = await res.text();
      console.log("Fetch response body:", text); // log body
      if (!res.ok) throw new Error("Failed to apply");
    } catch (err) {
      console.error(err);
    }
  };

  const handleAccept = async (workId: number) => {
    await fetch(`/api/work/${workId}/accept`, { method: "POST" });
    fetchWorks();
  };

  const handleDecline = async (workId: number) => {
    await fetch(`/api/work/${workId}/decline`, { method: "POST" });
    fetchWorks();
  };

  const handleWithdraw = async (workId: number) => {
    await fetch(`/api/work/${workId}/withdraw`, { method: "POST" });
    fetchWorks();
  };


  useEffect(() => {
    fetchWorks();
  }, [selectedTab]);

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-3xl font-bold tracking-tight">Works</h2>
        <div className="flex-1 h-px bg-gray-700"></div>
        <WorkTabs selected={selectedTab} onChange={setSelectedTab} />
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p className="text-slate-500 col-span-full">Loading works...</p>
        ) : works.length === 0 ? (
          <p className="text-slate-500 col-span-full">No works found</p>
        ) : (
          works.map((work) => (
            <WorkCard
              key={work.work_id}
              work={work}
              status={selectedTab}
              onApply={handleApply}
              onAccept={handleAccept}
              onDecline={handleDecline}
              onWithdraw={handleWithdraw}
            />
          ))
        )}
      </div>
    </div>
  );
}
