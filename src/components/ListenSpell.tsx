import React, { useState } from 'react';
import { ArrowLeft, Volume2 } from 'lucide-react';
import { Howl } from 'howler';

interface ListenSpellProps {
  onBack: () => void;
}

const ListenSpell: React.FC<ListenSpellProps> = ({ onBack }) => {
  const [userInput, setUserInput] = useState('');
  const [currentWord] = useState('elephant');

  const playWord = () => {
    const sound = new Howl({
      src: ['https://assets.mixkit.co/sfx/preview/mixkit-game-show-buzz-in-3090.mp3'], // This would be replaced with actual word audio
      volume: 0.5,
    });
    sound.play();
  };

  const playFeedback = (correct: boolean) => {
    const sound = new Howl({
      src: [correct 
        ? 'https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3'
        : 'https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-buzz-950.mp3'
      ],
      volume: 0.5,
    });
    sound.play();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.toLowerCase() === currentWord) {
      playFeedback(true);
      alert('Good job! 🎉');
      setUserInput('');
      // Here you would typically load a new word
    } else {
      playFeedback(false);
      alert('Try again! 💪');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <button
        onClick={onBack}
        className="absolute top-6 left-6 text-white hover:text-yellow-200 transition-colors duration-300 flex items-center gap-2 text-lg"
      >
        <ArrowLeft size={24} />
        Back
      </button>

      <div className="bg-white/80 rounded-3xl p-8 shadow-xl max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-center mb-8">Listen & Spell! 🎧</h2>
        
        <div className="flex justify-center mb-8">
          <button
            onClick={playWord}
            className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
          >
            <Volume2 size={48} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="w-full max-w-md px-4 py-2 text-xl rounded-lg border-2 border-purple-300 focus:border-purple-500 focus:outline-none"
            placeholder="Type what you hear..."
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-xl font-bold hover:scale-105 transition-transform"
          >
            Check Answer! 🎯
          </button>
        </form>
      </div>
    </div>
  );
};

export default ListenSpell;