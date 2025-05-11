// filepath: app/adventure/acommodation/[id]/page.tsx
import { notFound } from "next/navigation";
import { accommodations } from "@/lib/data";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

export default function AccommodationDetailPage({ params }: Props) {
  const { id } = params;

  const accommodation = accommodations.find((item) => item.id === id);

  if (!accommodation) return notFound();

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-12 py-12 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          <Image
            src={accommodation.image}
            alt={accommodation.name}
            width={800}
            height={500}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4 text-primary">{accommodation.name}</h1>
            <p className="text-gray-700 text-lg mb-6">{accommodation.description}</p>
            <p className="text-xl font-semibold text-black mb-4">{accommodation.price}</p>
          </div>
          <button className="mt-4 py-3 px-6 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 text-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
