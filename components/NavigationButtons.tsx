
import React from 'react';

interface NavigationButtonsProps {
  onBack: () => void;
  onNext?: () => void;
  showBack?: boolean;
  showNext?: boolean;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({ onBack, onNext, showBack = true, showNext = true }) => {
  return (
    <div className="flex items-center justify-center gap-x-6">
      {showBack && (
        <button
            onClick={onBack}
            className="rounded-full bg-slate-200 px-6 py-2 text-md font-semibold text-slate-700 shadow-sm hover:bg-slate-300 transition-colors"
        >
            Back
        </button>
      )}
      {showNext && onNext && (
        <button
            onClick={onNext}
            className="rounded-full bg-emerald-500 px-6 py-2 text-md font-semibold text-white shadow-md hover:bg-emerald-600 transition-colors"
        >
            Next
        </button>
      )}
    </div>
  );
};
