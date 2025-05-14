import { useEffect, useRef } from 'react';
import { Howl } from 'howler';

const useBackgroundMusic = () => {
  const musicRef = useRef<Howl | null>(null);

  useEffect(() => {
    musicRef.current = new Howl({
      src: ['https://assets.mixkit.co/music/preview/mixkit-kids-happy-times-121.mp3'],
      loop: true,
      volume: 0.3,
      autoplay: true,
    });

    return () => {
      if (musicRef.current) {
        musicRef.current.unload();
      }
    };
  }, []);

  return musicRef.current;
};

export default useBackgroundMusic;