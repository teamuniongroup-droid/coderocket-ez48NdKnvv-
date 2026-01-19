import { useEffect } from 'react';
export default function VideoPlayer() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://scripts.converteai.net/d0d64cb2-dca3-4be6-983c-3bc700b6a1d8/players/696e6d70a4304f1d777a68e8/v4/player.js';
    document.head.appendChild(script);
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);
  return (
    <div className="max-w-4xl mx-auto px-3 md:px-4 py-6 md:py-12">
      <vturb-smartplayer 
        id="vid-696e6d70a4304f1d777a68e8" 
        style={{ display: 'block', margin: '0 auto', width: '100%' }}
      />
    </div>
  );
}