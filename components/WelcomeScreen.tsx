
import React from 'react';

interface WelcomeScreenProps {
  onNavigate: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white p-4">
      <div className="text-center max-w-2xl">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
            Best Shot
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Your Daily Hole-in-One Challenge. <br />
            Compete globally, climb the ranks, and take your best shot every day.
          </p>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <button
            onClick={onNavigate}
            className="rounded-full bg-emerald-500 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-transform hover:scale-105"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
