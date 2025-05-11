import { ProgressBar } from "./ProgressBar";

type StepLayoutProps = {
  step: number;
  children: React.ReactNode;
};

export const StepLayout = ({ step, children }: StepLayoutProps) => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <ProgressBar currentStep={step} totalSteps={5} />
        {children}
      </div>
    </div>
  );
};
