"use client"
// filepath: c:\Users\aimek\OneDrive\Documents\GitHub\getset_v0\client\src\app\adventure\step-2\page.tsx
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { accommodations } from "@/lib/data";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Step2() {
  const router = useRouter();
  const [pickedAccommodation, setPickedAccommodation] = useState<string | null>(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Maximum 8 cards per page (2 rows, 4 cards each)

  // Calculate pagination
  const totalPages = Math.ceil(accommodations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = accommodations.slice(startIndex, startIndex + itemsPerPage);

  // Handlers for pagination
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="min-h-screen text-foreground relative">
      {/* Top Buttons */}
      <div className="fixed top-12 left-4 right-4 sm:left-6 sm:right-6 z-20 flex flex-wrap justify-between items-center gap-4 px-5 py-5">
        <button
          onClick={() => router.push('/')}
          className="py-2 px-4 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors duration-200 text-sm font-medium flex items-center sm:hidden"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => router.push('/')}
          className="py-2 px-4 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors duration-200 text-sm font-medium hidden sm:block"
        >
          Cancel Plan
        </button>
        <Link href="/adventure/step-3" passHref>
          <button className="py-2 px-4 bg-muted text-white rounded-lg hover:bg-muted/90 transition-colors duration-200 text-sm font-medium flex items-center sm:hidden">
            <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
        <Link href="/adventure/step-3" passHref>
          <button className="py-2 px-4 bg-muted text-white rounded-lg hover:bg-muted/90 transition-colors duration-200 text-sm font-medium hidden sm:block">
            Continue to Next Step
          </button>
        </Link>
      </div>

      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 mt-20 sm:mt-24 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
          Choose Your Accommodation
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Select the perfect place to stay during your adventure. Browse through our hand-picked accommodations in Kigali, Rwanda.
        </p>
      </div>

      {/* Accommodation Grid */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {currentItems.map((accommodation) => (
            <Link key={accommodation.name} href={accommodation.link} passHref>
              <div
                className={`relative bg-black rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group ${
                  pickedAccommodation === accommodation.name
                    ? 'border-2 border-primary bg-primary/5'
                    : 'border-gray-100'
                }`}
              >
                <img
                  src={accommodation.image}
                  alt={accommodation.name}
                  className="w-full h-48 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">{accommodation.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 line-clamp-2">{accommodation.description}</p>
                  <p className="text-base sm:text-lg font-semibold text-primary">{accommodation.price}</p>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setPickedAccommodation(accommodation.name);
                    }}
                    className="mt-4 py-2 px-4 sm:px-6 bg-muted text-white font-semibold rounded-lg hover:bg-primary/90 hover:text-black transition-colors duration-200 text-sm"
                  >
                    Pick
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-background py-4 flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="py-2 px-4 rounded-lg text-sm font-medium bg-muted text-foreground hover:bg-muted/80 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="text-sm font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="py-2 px-4 rounded-lg text-sm font-medium bg-muted text-foreground hover:bg-muted/80 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}