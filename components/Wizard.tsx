import React from 'react';
import { STEPS } from '../constants';
import { UserProfile } from '../types';

interface WizardProps {
  currentStepIndex: number;
  onOptionSelect: (key: keyof UserProfile, value: string) => void;
  onBack: () => void;
}

export const Wizard: React.FC<WizardProps> = ({ currentStepIndex, onOptionSelect, onBack }) => {
  const step = STEPS[currentStepIndex];
  
  if (!step) return null;

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 animate-fade-in-up">
      <div className="mb-6 flex justify-between items-center">
        <span className="text-xs font-bold tracking-wider text-red-500 uppercase">
          Langkah {currentStepIndex + 1} dari {STEPS.length}
        </span>
        {currentStepIndex > 0 && (
          <button 
            onClick={onBack}
            className="text-gray-400 hover:text-gray-600 text-sm font-medium transition-colors"
          >
            Kembali
          </button>
        )}
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
        {step.question}
      </h2>

      <div className="space-y-3">
        {step.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onOptionSelect(step.id as keyof UserProfile, option)}
            className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-red-500 hover:bg-red-50 hover:shadow-md transition-all duration-200 group"
          >
            <span className="text-gray-700 font-medium group-hover:text-red-700 flex items-center justify-between">
              {option}
              <span className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all text-red-500">
                →
              </span>
            </span>
          </button>
        ))}
      </div>
      
      <div className="mt-8 w-full bg-gray-100 h-2 rounded-full overflow-hidden">
        <div 
          className="bg-red-600 h-full transition-all duration-500 ease-out"
          style={{ width: `${((currentStepIndex + 1) / STEPS.length) * 100}%` }}
        />
      </div>
    </div>
  );
};