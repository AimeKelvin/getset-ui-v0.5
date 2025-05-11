import { adventurePasses } from "@/app/dashboard/adventure-pass/data";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { generateQRCodeDataUrl } from "@/lib/generateQRCode";
import { IconCalendar, IconPlaneTilt } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

interface PassPageProps {
  params: {
    id: string;
  };
}

export default async function PassDetailPage({ params }: PassPageProps) {
  const pass = adventurePasses.find((p) => p.id === params.id);

  if (!pass) return notFound();

  const qrCode = await generateQRCodeDataUrl(pass.passCode);

  const statusBadge = {
    confirmed: { text: "Confirmed", color: "bg-green-600" },
    pending: { text: "Pending", color: "bg-yellow-500" },
    cancelled: { text: "Cancelled", color: "bg-red-600" },
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-6 text-black dark:text-white">
      <div className="pt-6">
        <Link
          href="/dashboard"
          className="text-sm text-orange-600 dark:text-orange-400 hover:underline"
        >
          ← Back to Dashboard
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{pass.title}</h1>
        <Badge className={`${statusBadge[pass.status].color} text-white`}>
          {statusBadge[pass.status].text}
        </Badge>
      </div>

      <p className="text-muted-foreground dark:text-neutral-400">{pass.description}</p>

      <div className="text-sm space-y-1 text-gray-700 dark:text-neutral-300">
        <div className="flex items-center gap-2">
          <IconCalendar className="w-4 h-4" />
          created at: <span className="font-medium">{pass.travelDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <IconPlaneTilt className="w-4 h-4" />
          Pass Code: <span className="font-medium">{pass.passCode}</span>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <Image
          src={qrCode}
          alt="QR Code"
          width={200}
          height={200}
          className="rounded-lg border border-gray-300 dark:border-gray-700"
        />
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3">Included Products</h2>
        <ul className="space-y-3">
          {pass.products.map((product, index) => (
            <li
              key={index}
              className="p-4 border rounded-lg bg-gray-50 dark:bg-neutral-800 border-gray-200 dark:border-gray-700"
            >
              <p>
                <strong>{product.name}</strong> — {product.type}
              </p>
              {product.provider && <p>Provider: {product.provider}</p>}
              {product.nights && <p>Duration: {product.nights} nights</p>}
            </li>
          ))}
        </ul>
      </div>

      {/* Back Button */}
      
    </div>
  );
}
