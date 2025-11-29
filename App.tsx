import React, { useState } from 'react';
import { UserProfile, AnalysisResult } from './types';
import { Wizard } from './components/Wizard';
import { Results } from './components/Results';
import { Button } from './components/Button';
import { analyzeProfile } from './services/geminiService';
import { STEPS } from './constants';

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [profile, setProfile] = useState<Partial<UserProfile>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleStart = () => {
    setHasStarted(true);
    setStepIndex(0);
    setProfile({});
    setResult(null);
    setError(null);
  };

  const handleOptionSelect = async (key: keyof UserProfile, value: string) => {
    const updatedProfile = { ...profile, [key]: value };
    setProfile(updatedProfile);

    // Dynamic check for last step
    if (stepIndex === STEPS.length - 1) {
      await performAnalysis(updatedProfile as UserProfile);
    } else {
      setStepIndex(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStepIndex(prev => Math.max(0, prev - 1));
  };

  const performAnalysis = async (completedProfile: UserProfile) => {
    setIsLoading(true);
    setError(null);
    try {
      const analysis = await analyzeProfile(completedProfile);
      setResult(analysis);
    } catch (err) {
      setError("Maaf, terjadi kesalahan saat menghubungi AI. Silakan coba lagi.");
      console.error(err);
      // Allow retry by staying on the last step or resetting state partially
    } finally {
      setIsLoading(false);
    }
  };

  // Render Logic
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              SM
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-gray-900 tracking-tight leading-tight">SpinMaster AI</span>
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest leading-none">by Olympic Sport Lombok</span>
            </div>
          </div>
          {hasStarted && !result && (
             <span className="hidden sm:inline-block text-xs font-medium text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
               Beta Version
             </span>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 md:p-8 flex items-center justify-center">
        
        {/* Intro Screen */}
        {!hasStarted && (
          <div className="max-w-2xl text-center space-y-8 animate-fade-in-up">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-red-500 rounded-full blur-3xl opacity-20"></div>
              <h1 className="relative text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
                Temukan <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Blade Sempurna</span> Anda
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg mx-auto">
              Analisis gaya bermain Anda menggunakan AI canggih untuk mendapatkan rekomendasi bet tenis meja yang presisi.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button onClick={handleStart} className="w-full sm:w-auto text-lg px-8 py-4 shadow-xl shadow-red-200">
                Mulai Analisis Sekarang
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-12 border-t border-gray-200">
              <div className="text-center">
                <h4 className="font-bold text-gray-900">Analisis Gaya</h4>
                <p className="text-xs text-gray-500 mt-1">Offensive vs Defensive</p>
              </div>
              <div className="text-center border-l border-r border-gray-200">
                <h4 className="font-bold text-gray-900">Teknik Swing</h4>
                <p className="text-xs text-gray-500 mt-1">Kecepatan & Dominasi</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-gray-900">Rekomendasi</h4>
                <p className="text-xs text-gray-500 mt-1">Database Terkurasi</p>
              </div>
            </div>
          </div>
        )}

        {/* Wizard Form */}
        {hasStarted && !result && !isLoading && !error && (
          <Wizard 
            currentStepIndex={stepIndex} 
            onOptionSelect={handleOptionSelect} 
            onBack={handleBack}
          />
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="text-center space-y-6 animate-pulse">
            <div className="w-24 h-24 mx-auto rounded-full border-4 border-gray-200 border-t-red-600 animate-spin"></div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Menganalisis Profil...</h3>
              <p className="text-gray-500 mt-2">AI sedang mencocokkan gaya mainmu dengan database kami.</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center max-w-md bg-white p-8 rounded-3xl shadow-xl border border-red-100">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">!</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Terjadi Kesalahan</h3>
            <p className="text-gray-600 mb-6">{error}</p>
            <Button onClick={() => handleOptionSelect('feel', profile.feel || '')} variant="primary">
              Coba Lagi
            </Button>
          </div>
        )}

        {/* Results */}
        {result && profile && (
          <Results 
            result={result} 
            profile={profile as UserProfile} 
            onReset={handleStart} 
          />
        )}

      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Olympic Sport Lombok. Dibuat dengan ❤️ untuk komunitas tenis meja.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;