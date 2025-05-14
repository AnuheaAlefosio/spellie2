import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';
import { Howl } from 'howler';

interface WordWheelProps {
  onBack: () => void;
}

const WordWheel: React.FC<WordWheelProps> = ({ onBack }) => {
  const [letters] = useState(['S', 'P', 'E', 'L', 'L', 'I', 'E']);
  const [currentWord, setCurrentWord] = useState('');
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const validWords = ['SPELL', 'SLEEP', 'SLIP', 'PILE', 'LIES', 'LIPS'];

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
  });

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

  const checkWord = () => {
    if (validWords.includes(currentWord) && !foundWords.includes(currentWord)) {
      playSound(true);
      setFoundWords([...foundWords, currentWord]);
      if (foundWords.length + 1 === validWords.length) {
        alert('Congratulations! You found all the words! 🎉');
        // Here you would typically reset the game with new letters
      }
    } else {
      playSound(false);
    }
    setCurrentWord('');
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
        <h2 className="text-3xl font-bold text-center mb-8">Word Wheel 🎡</h2>
        
        <div className="relative w-64 h-64 mx-auto mb-8">
          {letters.map((letter, index) => {
            const angle = (index * 2 * Math.PI) / letters.length;
            const radius = 100;
            const left = radius * Math.cos(angle) + radius;
            const top = radius * Math.sin(angle) + radius;

            return (
              <animated.div
                key={index}
                {...bind()}
                style={{
                  x,
                  y,
                  position: 'absolute',
                  left: `${left}px`,
                  top: `${top}px`,
                  transform: 'translate(-50%, -50%)',
                  touchAction: 'none',
                }}
                className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold cursor-move"
              >
                {letter}
              </animated.div>
            );
          })}
        </div>

        <div className="text-center mb-8">
          <input
            type="text"
            value={currentWord}
            onChange={(e) => setCurrentWord(e.target.value.toUpperCase())}
            className="w-full max-w-md px-4 py-2 text-xl rounded-lg border-2 border-purple-300 focus:border-purple-500 focus:outline-none text-center"
            placeholder="Type your word..."
          />
          <button
            onClick={checkWord}
            className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-xl font-bold hover:scale-105 transition-transform"
          >
            Check Word! 🎯
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {foundWords.map((word, index) => (
            <div
              key={index}
              className="bg-green-100 rounded-lg p-2 text-center text-green-800 font-semibold"
            >
              {word}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WordWheel;