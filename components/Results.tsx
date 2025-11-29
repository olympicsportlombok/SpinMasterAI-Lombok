import React from 'react';
import { AnalysisResult, UserProfile } from '../types';
import { Button } from './Button';

interface ResultsProps {
  result: AnalysisResult;
  profile: UserProfile;
  onReset: () => void;
}

export const Results: React.FC<ResultsProps> = ({ result, profile, onReset }) => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 pb-12 animate-fade-in">
      
      {/* Header Summary */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 md:p-8 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        
        <h2 className="text-3xl font-bold mb-4">Analisis Profil Anda</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold backdrop-blur-sm">{profile.style}</span>
          <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold backdrop-blur-sm">{profile.level}</span>
          <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold backdrop-blur-sm">{profile.swingSpeed} Swing</span>
        </div>
        <p className="text-gray-300 leading-relaxed text-lg border-l-4 border-red-500 pl-4">
          "{result.summary}"
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Main Recommendation */}
        <div className="md:col-span-2 bg-white rounded-3xl p-6 md:p-8 shadow-xl border-t-8 border-red-600">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-red-600 font-bold uppercase tracking-widest text-sm">Rekomendasi Utama</h3>
            <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full font-bold">Best Match</span>
          </div>
          
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{result.mainRecommendation.name}</h1>
            <p className="text-gray-600 italic text-lg mb-6 border-b border-gray-100 pb-6">{result.mainRecommendation.description}</p>
            
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Analisis Teknis
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {result.mainRecommendation.technicalReasoning}
              </p>
            </div>
          </div>
        </div>

        {/* Alternatives */}
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 flex flex-col">
          <h3 className="text-gray-900 font-bold mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            Alternatif Lain
          </h3>
          <div className="flex-1 space-y-4">
            {result.alternatives.map((alt, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-200">
                <h4 className="font-bold text-gray-800 text-sm mb-1">{alt.name}</h4>
                <p className="text-xs text-gray-500">{alt.reasoning}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Rubber Pairing */}
        <div className="bg-gray-900 text-gray-100 rounded-3xl p-6 shadow-lg">
          <h3 className="text-red-400 font-bold mb-3 uppercase text-sm tracking-wider">Saran Karet (Rubber)</h3>
          <p className="text-sm leading-relaxed opacity-90">
            {result.rubberPairing}
          </p>
        </div>

        {/* Pro Tips */}
        <div className="bg-red-50 text-red-900 rounded-3xl p-6 shadow-lg border border-red-100">
          <h3 className="text-red-600 font-bold mb-3 uppercase text-sm tracking-wider">Coach's Corner</h3>
          <ul className="space-y-2">
            {result.proTips.map((tip, idx) => (
              <li key={idx} className="text-sm flex items-start gap-2">
                <span className="font-bold text-red-400">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Area */}
      <div className="pt-10 border-t border-gray-200 mt-8 text-center">
        <h4 className="text-xl font-bold text-gray-900 mb-3">Tertarik dengan rekomendasi ini?</h4>
        <p className="text-gray-500 mb-8 max-w-lg mx-auto">
          Untuk info harga, ketersediaan stok, dan konsultasi alat tenis meja lainnya, silakan hubungi kami langsung via Instagram.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://www.instagram.com/olympicsportlombok/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3 rounded-xl font-bold text-white shadow-lg shadow-pink-200 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:opacity-90 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Chat via Instagram
          </a>

          <Button onClick={onReset} variant="outline" className="w-full sm:w-auto border-gray-300 text-gray-500 hover:text-gray-700 hover:border-gray-400">
            Analisis Ulang
          </Button>
        </div>
      </div>
    </div>
  );
};