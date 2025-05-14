import React from 'react';

interface GameModeButtonProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  onClick: () => void;
}

const GameModeButton: React.FC<GameModeButtonProps> = ({ 
  title, 
  description, 
  icon, 
  color, 
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-white rounded-3xl p-8 shadow-xl transition-all duration-300 
      hover:shadow-2xl hover:scale-110 active:scale-95 flex flex-col items-center 
      text-center h-full w-full group animate-float cursor-pointer
      border-4 border-white/30 backdrop-blur-sm`}
    >
      <div className={`w-20 h-20 rounded-full mb-6 flex items-center justify-center
        bg-gradient-to-br ${color} text-white transform transition-transform 
        group-hover:rotate-12 group-hover:scale-110 duration-500 shadow-lg
        animate-bounce-slow`}>
        {icon}
      </div>
      
      <h2 className="text-2xl font-bold mb-3 text-gray-800">{title}</h2>
      
      <p className="text-gray-600 text-lg">{description}</p>
      
      <div className={`mt-6 h-2 rounded-full bg-gradient-to-r w-0 
        group-hover:w-3/4 transition-all duration-500 ${color}`}></div>
    </button>
  );
};

export default GameModeButton;