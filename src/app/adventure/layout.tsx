"use client"
// app/adventure/layout.tsx
import React from 'react';
import { usePathname } from 'next/navigation';

const steps = [
  { name: 'Accommodation', path: '/adventure/step-2' },
  { name: 'Transport', path: '/adventure/step-3' },
  { name: 'Attractions', path: '/adventure/step-4' },
  { name: 'Checkout', path: '/adventure/step-5' },
];

export default function AdventureLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const currentStepIndex = steps.findIndex(step => step.path === pathname);

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="w-full mx-auto">
        <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-10 mx-auto w-full pt-4">
          <div className="flex justify-between text-xs">
            {steps.map((step, i) => (
              <div key={step.path} className="flex-1 text-center">
                <div className="relative py-2 px-1">
                  {/* Progress Bar */}
                  <div
                    className={`w-full h-1 rounded-full mb-1 transition-colors duration-200 ${
                      i <= currentStepIndex ? 'bg-primary/80' : 'bg-muted/40'
                    }`}
                  />
                  {/* Step Description (Hidden on Small Screens) */}
                  <span
                    className={`text-xs font-medium hidden sm:block ${
                      i <= currentStepIndex ? 'text-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    {`Step ${i + 2}: ${step.name}`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </nav>
        {/* Main content */}
        <main>{children}</main>
      </div>
    </div>
  );
}