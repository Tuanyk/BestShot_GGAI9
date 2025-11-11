
import React from 'react';
import { CalendarIcon } from './icons/CalendarIcon';
import { TargetIcon } from './icons/TargetIcon';
import { GolfBallIcon } from './icons/GolfBallIcon';
import { RepeatIcon } from './icons/RepeatIcon';
import { NavigationButtons } from './NavigationButtons';

interface HowItWorksScreenProps {
  onNavigate: (screenIndex: number) => void;
}

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; delay: string }> = ({ icon, title, children, delay }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 animate-fade-in-up" style={{ animationDelay: delay }}>
        <div className="flex items-center gap-4">
            <div className="bg-emerald-100 text-emerald-600 p-3 rounded-full">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        </div>
        <p className="mt-4 text-slate-600">{children}</p>
    </div>
);


export const HowItWorksScreen: React.FC<HowItWorksScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-slate-50 p-4 md:p-8">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl animate-fade-in-up">
          How It Works
        </h2>
        <p className="mt-4 text-lg text-slate-600 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Simple to learn, a challenge to master. Here's your daily routine.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 text-left md:grid-cols-2">
            <InfoCard icon={<CalendarIcon className="h-6 w-6"/>} title="A New Hole Daily" delay="0.2s">
                Every 24 hours, a brand new, beautifully crafted 3D hole is released. A fresh challenge awaits you every single day.
            </InfoCard>
            <InfoCard icon={<TargetIcon className="h-6 w-6"/>} title="Practice Makes Perfect" delay="0.3s">
                Use your free Practice Shots to get a feel for the green, wind, and slope. Plan your approach before it counts.
            </InfoCard>
            <InfoCard icon={<GolfBallIcon className="h-6 w-6"/>} title="Take Your Best Shot" delay="0.4s">
                When you're ready, take your one Best Shot. This is the one that lands you on the leaderboard. Aim for 0.00 yards!
            </InfoCard>
            <InfoCard icon={<RepeatIcon className="h-6 w-6"/>} title="Need a Second Chance?" delay="0.5s">
                Not happy with your Best Shot? Use a Mulligan to try again. Or get more shots by watching an ad or using in-app 'Tees'.
            </InfoCard>
        </div>
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <NavigationButtons onBack={() => onNavigate(0)} onNext={() => onNavigate(2)} />
        </div>
      </div>
    </div>
  );
};
