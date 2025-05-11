"use client";

import { AdventurePassCard } from "@/components/pass-cards";

interface AdventurePass {
  id: string;
  title: string;
  description: string;
  travelDate: string;
  passCode: string;
  status: "confirmed" | "pending" | "cancelled";
  products: { name: string; type: string; provider?: string; nights?: number }[];
}

export const adventurePasses: AdventurePass[] = [
  {
    id: "1",
    title: "Kigali to Volcanoes National Park",
    description: "Experience the breathtaking Volcanoes National Park",
    travelDate: "May 15, 2025",
    passCode: "ADVP-20250515-XYZ",
    status: "confirmed",
    products: [
      { name: "Private Transport", type: "Transport", provider: "Getset Shuttle" },
      { name: "Hotel Gorillas", type: "Accommodation", nights: 2 },
      { name: "Park Entry Ticket", type: "Attraction" },
    ],
  },
  {
    id: "2",
    title: "Rwanda Explorer Pass",
    description: "Explore the best of Rwanda with this pass.",
    travelDate: "June 10, 2025",
    passCode: "RWXP-20250610-ABC",
    status: "pending",
    products: [
      { name: "National Museum Entry", type: "Attraction" },
      { name: "City Tour Bus", type: "Transport" },
    ],
  },
];

export default function AdventurePassesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Adventure Passes</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {adventurePasses.map((pass) => (
          <AdventurePassCard
            key={pass.id}
            title={pass.title}
            description={pass.description}
            travelDate={pass.travelDate}
            passCode={pass.passCode}
            status={pass.status}
            id={pass.id}
          />
        ))}
      </div>
    </div>
  );
}
