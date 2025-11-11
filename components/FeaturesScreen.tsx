
import React from 'react';
import { NavigationButtons } from './NavigationButtons';

interface FeaturesScreenProps {
  onNavigate: (screenIndex: number) => void;
}

const FeatureCard: React.FC<{ imageUrl: string; title: string; children: React.ReactNode; delay: string }> = ({ imageUrl, title, children, delay }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 animate-fade-in-up" style={{ animationDelay: delay }}>
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-bold text-slate-800">{title}</h3>
            <p className="mt-2 text-slate-600">{children}</p>
        </div>
    </div>
);

export const FeaturesScreen: React.FC<FeaturesScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-slate-50 p-4 md:p-8">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl animate-fade-in-up">
          Game Features
        </h2>
        <p className="mt-4 text-lg text-slate-600 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            More than just a game, it's a daily competition.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard imageUrl="https://picsum.photos/seed/golfcourse/600/400" title="Stunning 3D Courses" delay="0.2s">
                Immerse yourself in beautifully designed courses with realistic physics and dynamic environments.
            </FeatureCard>
            <FeatureCard imageUrl="https://picsum.photos/seed/leaderboard/600/400" title="Daily Global Leaderboards" delay="0.3s">
                See how you stack up against players from around the world. Climb the ranks and earn bragging rights.
            </FeatureCard>
            <FeatureCard imageUrl="https://picsum.photos/seed/mobilegame/600/400" title="Simple, Intuitive Controls" delay="0.4s">
                Easy-to-learn gesture controls make playing a joy. Just pull back and release to take your shot.
            </FeatureCard>
        </div>
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <NavigationButtons onBack={() => onNavigate(1)} onNext={() => onNavigate(3)} />
        </div>
      </div>
    </div>
  );
};
