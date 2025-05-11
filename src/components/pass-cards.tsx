'use client';
import Link from "next/link";
import { useEffect, useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { generateQRCodeDataUrl } from "@/lib/generateQRCode";

interface AdventurePassCardProps {
  title: string;
  createdAt: string;
  passCode: string;
  status: "confirmed" | "pending" | "cancelled";
  id: string; // Added id prop
}

export function AdventurePassCard({
  title,
  createdAt,
  passCode,
  status,
}: AdventurePassCardProps) {
  const [qrUrl, setQrUrl] = useState<string | null>(null);

  useEffect(() => {
    generateQRCodeDataUrl(passCode).then(setQrUrl);
  }, [passCode]);

  {/* 
    Status Badge 
    
    const statusBadge = {
    confirmed: { text: "Confirmed", color: "bg-green-600" },
    pending: { text: "Pending", color: "bg-yellow-500" },
    cancelled: { text: "Cancelled", color: "bg-red-600" },
  };
    */}
  




  return (
    <div className="w-full flex justify-center px-4 py-6">
<Link href={`/adventure-pass/${id}`} className="block">
      <Card className="bg-white dark:bg-black text-black dark:text-white w-full max-w-4xl flex flex-col md:flex-row p-6 items-center relative">
        {/* LEFT SECTION */}
        <div className="flex-1 space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">{title}</h2>
          </div>
          <div className="space-y-1 text-sm">
            <p className='dark:text-gray-300 text-gray-600'>
              <span className="font-medium"> created:</span> {createdAt}
            </p>
           
            <p className="text-gray-500 dark:text-gray-500  text-sm pt-2">
              Scan this QR code at check-in points to access your services.
            </p>
          </div>
        </div>

        {/* DOTTED VERTICAL LINE */}
        <div className="hidden md:block w-px h-32 mx-4 border-l border-dotted border-gray-300 dark:border-gray-600" />

        {/* RIGHT: QR CODE */}
        <div className="flex justify-center items-center mt-6 md:mt-0">
          {qrUrl ? (
            <img
              src={qrUrl}
              alt="QR Code"
              className="w-40 h-40 border border-white rounded-md"
            />
          ) : (
            <p className="text-gray-400 text-sm">Generating QR Code...</p>
          )}
        </div>
      </Card>
      </Link>
    </div>
  );
}
