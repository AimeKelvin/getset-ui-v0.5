"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { accommodations } from "@/lib/data";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Step2() {
  const router = useRouter();
  const [pickedAccommodation, setPickedAccommodation] = useState<string | null>(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(accommodations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = accommodations.slice(startIndex, startIndex + itemsPerPage);

  const buttonClass =
    "py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200";

  return (
    <div className="min-h-screen text-foreground relative">
      {/* Top Buttons */}
      <div className="fixed top-12 left-4 right-4 sm:left-6 sm:right-6 z-20 flex flex-wrap justify-between items-center gap-4 px-5 py-4">
        <button
          onClick={() => router.push("/")}
          className={`${buttonClass} bg-muted text-foreground hover:bg-muted/80 sm:hidden flex items-center`}
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => router.push("/")}
          className={`${buttonClass} bg-black text-white hover:bg-muted/90 hidden sm:block hover:text-black`}
        >
          Cancel Plan
        </button>
        <Link href="/adventure/transport">
          <button className={`${buttonClass} bg-muted text-white hover:bg-muted/90 sm:hidden flex items-center`}>
            <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
        <Link href="/adventure/transport">
          <button className={`${buttonClass} bg-black text-white hover:bg-muted/90 hidden sm:block hover:text-black`}>
            Continue to Next Step
          </button>
        </Link>
      </div>

      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 mt-20 sm:mt-24 text-center">
        <h1 className="text-2xl sm:text-4xl font-bold text-primary mb-4">
          Choose Your Accommodation
        </h1>
        <p className="text-base sm:text-md text-muted-foreground mb-8 max-w-2xl mx-auto">
          Select the perfect place to stay during your adventure. Browse through our hand-picked accommodations in Kigali, Rwanda.
        </p>
      </div>

      {/* Accommodation Grid */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {currentItems.map((accommodation) => (
            <Link key={accommodation.slug} href={`/adventure/acommodation/${accommodation.slug}`}>
              <div
                className={`relative bg-muted rounded-xl shadow-md overflow-hidden transition-all duration-300 cursor-pointer group hover:shadow-xl hover:-translate-y-1 ${
                  pickedAccommodation === accommodation.slug
                    ? "border-2 border-primary bg-primary/5"
                    : "border-gray-100"
                }`}
              >
                <img
                  src={accommodation.image}
                  alt={accommodation.name}
                  className="w-full h-48 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-md sm:text-xl font-semibold text-black mb-2">
                    {accommodation.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-4 line-clamp-2">
                    {accommodation.description}
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-black">
                    {accommodation.price}
                  </p>
                   </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="absolute bottom-0 left-0 right-0 bg-background py-4 flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className={`${buttonClass} bg-muted text-foreground hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          Previous
        </button>
        <span className="text-sm font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className={`${buttonClass} bg-muted text-foreground hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
