import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Howl } from 'howler';

interface PictureMatchProps {
  onBack: () => void;
}

const PictureMatch: React.FC<PictureMatchProps> = ({ onBack }) => {
  const [userInput, setUserInput] = useState('');
  const [currentWord] = useState('elephant');
  const [score, setScore] = useState(0);

  const playSound = (correct: boolean) => {
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
      playSound(true);
      setScore(score + 1);
      alert('Great job! 🎉');
      setUserInput('');
    } else {
      playSound(false);
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
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Spell the Picture! 🎯</h2>
          <div className="bg-purple-500 text-white px-4 py-2 rounded-full">
            Score: {score}
          </div>
        </div>
        
        <div className="flex justify-center mb-8">
          <img 
            src="https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg" 
            alt="Guess the word"
            className="rounded-xl max-h-64 object-cover shadow-lg transform hover:scale-105 transition-transform"
          />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="w-full max-w-md px-4 py-2 text-xl rounded-lg border-2 border-purple-300 focus:border-purple-500 focus:outline-none"
            placeholder="Type what you see..."
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

export default PictureMatch;