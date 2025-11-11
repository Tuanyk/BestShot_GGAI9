
import React, { useState } from 'react';
import { NavigationButtons } from './NavigationButtons';

interface SignUpScreenProps {
  onNavigate: (screenIndex: number) => void;
}

export const SignUpScreen: React.FC<SignUpScreenProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        setError('Please enter a valid email address.');
        return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="flex h-full w-full items-center justify-center bg-emerald-500 p-4">
      <div className="container mx-auto max-w-xl text-center">
        {submitted ? (
            <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-2xl animate-fade-in-up">
                <h2 className="text-3xl font-bold text-emerald-600 sm:text-4xl">Thank You!</h2>
                <p className="mt-4 text-slate-600">You're on the list! We'll email you at <span className="font-semibold text-slate-800">{email}</span> as soon as Best Shot is available.</p>
                <div className="mt-8">
                     <NavigationButtons onBack={() => onNavigate(2)} showNext={false} />
                </div>
            </div>
        ) : (
            <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-2xl animate-fade-in-up">
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Be the First to Play</h2>
                <p className="mt-4 text-slate-600">The app is currently in beta. Sign up to get an exclusive notification when we launch!</p>
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-shadow"
                        aria-label="Email address"
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                        type="submit"
                        className="w-full rounded-full bg-emerald-500 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-transform hover:scale-105"
                    >
                        Notify Me
                    </button>
                </form>
                 <div className="mt-8">
                    <NavigationButtons onBack={() => onNavigate(2)} showNext={false} />
                </div>
            </div>
        )}
      </div>
    </div>
  );
};
