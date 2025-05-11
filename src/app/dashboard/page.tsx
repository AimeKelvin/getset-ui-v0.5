"use client";

import { AdventurePassCard } from "@/components/pass-cards";
import { adventurePasses } from "@/app/dashboard/adventure-pass/data";

export default function AdventurePassesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">Adventure Passes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {adventurePasses.map((pass) => (
          <AdventurePassCard
            key={pass.id}
            id={pass.id}
            title={pass.title}
            travelDate={pass.travelDate}
            passCode={pass.passCode}
            status={pass.status}
          />
        ))}
      </div>
    </div>
  );
}
