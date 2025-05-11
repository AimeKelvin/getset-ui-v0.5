'use client';

import { useEffect, useState } from 'react';
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconPlaneTilt, IconCalendar } from "@tabler/icons-react";
import { generateQRCodeDataUrl } from "@/lib/generateQRCode";

interface AdventurePassCardProps {
  title: string;
  description?: string;
  travelDate: string;
  passCode: string;
  status: "confirmed" | "pending" | "cancelled";
}

export function AdventurePassCard({
  title,
  travelDate,
  passCode,
  status,
}: AdventurePassCardProps) {
  const [qrUrl, setQrUrl] = useState<string | null>(null);

  useEffect(() => {
    generateQRCodeDataUrl(passCode).then(setQrUrl);
  }, [passCode]);

  const statusBadge = {
    confirmed: { text: "Confirmed", color: "bg-green-600" },
    pending: { text: "Pending", color: "bg-yellow-500" },
    cancelled: { text: "Cancelled", color: "bg-red-600" },
  };

  return (
    <div className="w-full flex justify-center px-4 py-6">
    <Card className="bg-black shadow-md w-full max-w-3xl p-4 md:flex md:items-center gap-6">
      {/* LEFT: DETAILS */}
      <div className="flex-1 space-y-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-white">{title}</CardTitle>
          <Badge
            variant="default"
            className={`${statusBadge[status].color} text-white text-xs`}
          >
            {statusBadge[status].text}
          </Badge>
        </div>
  
        <div className="text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <IconCalendar className="w-4 h-4" />
            Travel Date: <span className="text-white">{travelDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <IconPlaneTilt className="w-4 h-4" />
            Adventure Pass
          </div>
          <p className="text-muted-foreground mt-2">
            Scan this QR code at check-in points to access your services.
          </p>
        </div>
      </div>
  
      {/* RIGHT: QR CODE */}
      <div className="mt-6 md:mt-0 flex justify-center items-center">
        {qrUrl ? (
          <img
            src={qrUrl}
            alt="QR Code"
            className="w-40 h-40 md:w-44 md:h-44 border border-white rounded-lg"
          />
        ) : (
          <p className="text-muted-foreground text-sm">Generating QR Code...</p>
        )}
      </div>
    </Card>
  </div>
  
  );
}
