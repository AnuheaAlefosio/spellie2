import React from 'react';
import { ArrowLeft, Star } from 'lucide-react';

interface PictureMatchLevelsProps {
  onBack: () => void;
  onSelectLevel: (level: string) => void;
}

const PictureMatchLevels: React.FC<PictureMatchLevelsProps> = ({ onBack, onSelectLevel }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-pink-400 to-blue-500 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <button
          onClick={onBack}
          className="absolute top-6 left-6 text-white hover:text-yellow-200 transition-colors duration-300 flex items-center gap-2 text-lg"
        >
          <ArrowLeft size={24} />
          Back to Games
        </button>

        <div className="text-center mb-12 animate-bounce-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg animate-wave">
            Picture Match 🎨
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Choose your challenge level! 🌟
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Easy', 'Medium', 'Hard'].map((level, index) => (
            <button
              key={level}
              onClick={() => onSelectLevel(level.toLowerCase())}
              className="bg-white rounded-2xl p-8 shadow-xl transition-all duration-300 
                hover:shadow-2xl hover:scale-105 active:scale-95 group"
            >
              <div className="flex justify-center mb-4">
                {[...Array(index + 1)].map((_, i) => (
                  <Star
                    key={i}
                    size={32}
                    className="text-yellow-400 transform group-hover:scale-110 transition-transform"
                    fill="currentColor"
                  />
                ))}
              </div>
              <h2 className="text-3xl font-bold mb-3 text-gray-800">{level}</h2>
              <p className="text-gray-600">
                {level === 'Easy' && '6 pairs to match'}
                {level === 'Medium' && '12 pairs to match'}
                {level === 'Hard' && '18 pairs to match'}
              </p>
              <div className="mt-4 h-2 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full mx-auto" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PictureMatchLevels;