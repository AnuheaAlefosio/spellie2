import React, { useState } from 'react';
import HomePage from './components/HomePage';
import GameSelection from './components/GameSelection';
import PictureMatch from './components/PictureMatch';
import WordWheel from './components/WordWheel';
import ListenSpell from './components/ListenSpell';
import useBackgroundMusic from './hooks/useBackgroundMusic';

type Screen = 'home' | 'gameSelection' | 'pictureMatch' | 'wordWheel' | 'listenSpell';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  
  useBackgroundMusic();

  const handleGameSelection = (game: string) => {
    switch (game) {
      case 'pictureMatch':
        setCurrentScreen('pictureMatch');
        break;
      case 'wordWheel':
        setCurrentScreen('wordWheel');
        break;
      case 'listenSpell':
        setCurrentScreen('listenSpell');
        break;
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomePage onStart={() => setCurrentScreen('gameSelection')} />;
      case 'gameSelection':
        return <GameSelection onGameSelect={handleGameSelection} />;
      case 'pictureMatch':
        return (
          <PictureMatch
            onBack={() => setCurrentScreen('gameSelection')}
          />
        );
      case 'wordWheel':
        return (
          <WordWheel
            onBack={() => setCurrentScreen('gameSelection')}
          />
        );
      case 'listenSpell':
        return (
          <ListenSpell
            onBack={() => setCurrentScreen('gameSelection')}
          />
        );
      default:
        return <HomePage onStart={() => setCurrentScreen('gameSelection')} />;
    }
  };

  return (
    <div className="min-h-screen bg-[url('https://images.pexels.com/photos/7130498/pexels-photo-7130498.jpeg')] bg-cover bg-center">
      <div className="min-h-screen backdrop-blur-sm bg-white/30">
        {renderScreen()}
      </div>
    </div>
  );
}

export default App;