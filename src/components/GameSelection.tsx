import React from 'react';
import GameModeButton from './GameModeButton';
import { ImageIcon, RotateCw, Headphones } from 'lucide-react';

interface GameSelectionProps {
  onGameSelect: (game: string) => void;
}

const GameSelection: React.FC<GameSelectionProps> = ({ onGameSelect }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12 animate-bounce-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg animate-wave">
            Let's Play & Learn! 🎮
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto animate-float">
            Pick your favorite game and start the fun! 🌟
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <GameModeButton 
            title="Picture Match" 
            description="Can you spell what you see? 🎨"
            icon={<img src="https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3" alt="Picture Match" className="w-16 h-16 object-cover rounded-full" />}
            color="from-purple-500 to-blue-400"
            onClick={() => onGameSelect('pictureMatch')}
          />
          <GameModeButton 
            title="Word Wheel" 
            description="How many words can you find? 🎡"
            icon={<img src="https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3" alt="Word Wheel" className="w-16 h-16 object-cover rounded-full" />}
            color="from-pink-500 to-red-400"
            onClick={() => onGameSelect('wordWheel')}
          />
          <GameModeButton 
            title="Listen & Spell" 
            description="Listen and type what you hear! 🎧"
            icon={<img src="https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3" alt="Listen & Spell" className="w-16 h-16 object-cover rounded-full" />}
            color="from-green-500 to-teal-400"
            onClick={() => onGameSelect('listenSpell')}
          />
        </div>
      </div>
    </div>
  );
};

export default GameSelection;