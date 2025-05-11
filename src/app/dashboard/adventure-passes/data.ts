// app/dashboard/adventure-pass/data.ts

export interface AdventurePass {
    id: string;
    title: string;
    description: string;
    travelDate: string;
    passCode: string;
    status: "confirmed" | "pending" | "cancelled";
    products: string[];
  }
  
  export const adventurePasses: AdventurePass[] = [
    {
      id: "1",
      title: "Kigali Cultural Tour",
      description: "Explore the museums and landmarks of Kigali.",
      travelDate: "2025-05-15",
      passCode: "KGCL-20250515",
      status: "confirmed",
      products: ["Kigali Genocide Memorial", "Inema Art Center", "City Tour Bus"],
    },
    {
      id: "2",
      title: "Volcanoes National Park",
      description: "Experience the mountain gorillas up close.",
      travelDate: "2025-06-10",
      passCode: "VOLC-20250610",
      status: "pending",
      products: ["Gorilla Permit", "Guided Trek", "Park Entry Fee"],
    },
  ];
  