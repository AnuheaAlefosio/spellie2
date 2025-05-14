import React from 'react';
import { Sparkles } from 'lucide-react';

interface HomePageProps {
  onStart: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-pink-400 to-blue-500 flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <div className="animate-float mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg animate-wave">
            Spellie
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 max-w-2xl mx-auto">
            Your magical friend for learning! ✨
          </p>
        </div>
        
        <button
          onClick={onStart}
          className="group relative px-12 py-6 text-2xl font-bold text-white 
            bg-gradient-to-br from-purple-500 to-pink-500 rounded-full 
            transform hover:scale-110 transition-all duration-300 
            shadow-lg hover:shadow-2xl animate-bounce-slow"
        >
          <span className="absolute -top-1 -right-1 p-2">
            <Sparkles className="w-6 h-6 animate-spin-slow" />
          </span>
          Start Learning!
          <span className="block text-sm mt-1 opacity-90">Click to begin your adventure</span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;