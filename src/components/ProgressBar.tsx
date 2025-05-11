type ProgressBarProps = {
    currentStep: number;
    totalSteps: number;
  };
  
  export const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
    const progress = (currentStep / totalSteps) * 100;
    return (
      <div className="w-full bg-gray-800 h-2 rounded">
        <div className="bg-orange-500 h-2 rounded" style={{ width: `${progress}%` }} />
      </div>
    );
  };
  