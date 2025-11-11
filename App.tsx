
import React, { useState, useEffect } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { HowItWorksScreen } from './components/HowItWorksScreen';
import { FeaturesScreen } from './components/FeaturesScreen';
import { SignUpScreen } from './components/SignUpScreen';
import { GolfPinIcon } from './components/icons/GolfPinIcon';

const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const screens = [
    <WelcomeScreen onNavigate={() => setActiveScreen(1)} />,
    <HowItWorksScreen onNavigate={setActiveScreen} />,
    <FeaturesScreen onNavigate={setActiveScreen} />,
    <SignUpScreen onNavigate={setActiveScreen} />,
  ];

  return (
    <div className={`bg-slate-50 font-sans text-slate-800 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <header className="fixed top-0 left-0 right-0 z-20 p-4 md:p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GolfPinIcon className="h-8 w-8 text-emerald-500" />
            <span className="text-xl font-bold text-slate-900">Best Shot</span>
          </div>
          <button
            onClick={() => setActiveScreen(screens.length - 1)}
            className="hidden sm:inline-block bg-emerald-500 text-white font-semibold px-5 py-2 rounded-full hover:bg-emerald-600 transition-colors shadow-md hover:shadow-lg"
          >
            Get Notified
          </button>
        </div>
      </header>

      <main className="h-screen w-full overflow-hidden">
        <div
          className="h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateY(-${activeScreen * 100}vh)` }}
        >
          {screens.map((screen, index) => (
            <div key={index} className="h-screen w-full">
              {screen}
            </div>
          ))}
        </div>
      </main>

      <aside className="fixed right-6 top-1/2 z-20 -translate-y-1/2">
        <div className="flex flex-col items-center gap-4">
          {screens.map((_, index) => (
            <button
              key={`dot-${index}`}
              onClick={() => setActiveScreen(index)}
              aria-label={`Go to screen ${index + 1}`}
              className={`h-3 w-3 rounded-full transition-all duration-300 hover:scale-125 ${
                activeScreen === index ? 'bg-emerald-500 scale-125' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>
      </aside>
    </div>
  );
};

export default App;
