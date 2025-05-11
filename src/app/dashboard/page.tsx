// app/dashboard/adventure-pass/[id]/page.tsx

'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { adventurePasses, AdventurePass } from './adventure-passes/data';
import { Badge } from "@/components/ui/badge";
import { generateQRCodeDataUrl } from "@/lib/generateQRCode";
import { IconCalendar, IconPlaneTilt } from "@tabler/icons-react";

export default function AdventurePassDetailPage() {
  const { id } = useParams();
  const [pass, setPass] = useState<AdventurePass | null>(null);
  const [qrUrl, setQrUrl] = useState<string | null>(null);

  useEffect(() => {
    const selected = adventurePasses.find((p) => p.id === id);
    if (selected) {
      setPass(selected);
      generateQRCodeDataUrl(selected.passCode).then(setQrUrl);
    }
  }, [id]);

  if (!pass) return <div className="p-6 text-white">Loading adventure pass...</div>;

  const statusBadge = {
    confirmed: { text: "Confirmed", color: "bg-green-600" },
    pending: { text: "Pending", color: "bg-yellow-500" },
    cancelled: { text: "Cancelled", color: "bg-red-600" },
  };

  return (
    <div className="p-6 max-w-4xl mx-auto text-white">
      <h1 className="text-2xl font-bold mb-2">{pass.title}</h1>
      <Badge className={`${statusBadge[pass.status].color} text-white mb-4`}>
        {statusBadge[pass.status].text}
      </Badge>

      <div className="space-y-4 text-sm md:text-base">
        <p className="text-muted-foreground">{pass.description}</p>

        <div className="flex items-center gap-2">
          <IconCalendar className="w-4 h-4 text-muted-foreground" />
          Travel Date: <span className="text-white">{pass.travelDate}</span>
        </div>

        <div className="flex items-center gap-2">
          <IconPlaneTilt className="w-4 h-4 text-muted-foreground" />
          Pass Code: <span className="text-white">{pass.passCode}</span>
        </div>

        <div>
          <p className="font-semibold">Included Products:</p>
          <ul className="list-disc list-inside text-muted-foreground">
            {pass.products.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
        </div>

        {qrUrl && (
          <div className="mt-6">
            <p className="font-medium">QR Code:</p>
            <img src={qrUrl} alt="QR Code" className="w-40 h-40 border border-white rounded-lg mt-2" />
          </div>
        )}
      </div>
    </div>
  );
}
