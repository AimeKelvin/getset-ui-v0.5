"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { IconCalendar, IconPlaneTilt } from "@tabler/icons-react";
import { generateQRCodeDataUrl } from "@/lib/generateQRCode";

interface PassDetails {
  id: string;
  title: string;
  description: string;
  travelDate: string;
  passCode: string;
  status: "confirmed" | "pending" | "cancelled";
}

export default function PassDetailsPage() {
  const router = useRouter();
  const { id } = router.query; // Get the pass ID from the URL
  const [pass, setPass] = useState<PassDetails | null>(null);
  const [qrUrl, setQrUrl] = useState<string | null>(null);

  // Simulate fetching pass details
  useEffect(() => {
    if (!id) return;

    // Replace this with your actual API call
    const fetchPassDetails = async () => {
      const mockData: PassDetails = {
        id: id as string,
        title: "Kigali to Volcanoes National Park",
        description: "Adventure Pass",
        travelDate: "May 15, 2025",
        passCode: "ADVP-20250515-XYZ",
        status: "confirmed",
      };
      setPass(mockData);
      const qrCode = await generateQRCodeDataUrl(mockData.passCode);
      setQrUrl(qrCode);
    };

    fetchPassDetails();
  }, [id]);

  if (!pass) {
    return <p className="text-center text-white">Loading pass details...</p>;
  }

  const statusBadge = {
    confirmed: { text: "Confirmed", color: "bg-green-600" },
    pending: { text: "Pending", color: "bg-yellow-500" },
    cancelled: { text: "Cancelled", color: "bg-red-600" },
  };

  return (
    <div className="px-4 lg:px-6 py-4">
      <Card className="bg-black shadow-md max-w-3xl mx-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-bold text-white">
              {pass.title}
            </CardTitle>
            <Badge
              variant="default"
              className={`${statusBadge[pass.status].color} text-white`}
            >
              {statusBadge[pass.status].text}
            </Badge>
          </div>
          <CardDescription className="text-muted-foreground mt-2">
            {pass.description}
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Left Section: Details */}
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <IconCalendar className="w-4 h-4 text-muted-foreground" />
              Travel Date: <span className="text-white">{pass.travelDate}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <IconPlaneTilt className="w-4 h-4 text-muted-foreground" />
              Pass Code: <span className="text-white">{pass.passCode}</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Use this pass code at check-in points to access your services.
            </p>
          </div>

          {/* Right Section: QR Code */}
          <div className="flex-shrink-0">
            {qrUrl ? (
              <img
                src={qrUrl}
                alt="QR Code"
                className="w-40 h-40 border border-white rounded-lg"
              />
            ) : (
              <p className="text-muted-foreground text-sm">Generating QR Code...</p>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}