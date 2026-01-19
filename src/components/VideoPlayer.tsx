import { useEffect, useRef } from 'react';
export default function VideoPlayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Create and inject the script for the smart player
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://scripts.converteai.net/d0d64cb2-dca3-4be6-983c-3bc700b6a1d8/players/696e6d70a4304f1d777a68e8/v4/player.js';
    document.head.appendChild(script);
    return () => {
      // Cleanup: remove script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);
  return (
    <div className="bg-white py-8 relative z-0">
      <div className="container mx-auto max-w-[800px] px-4">
        <div ref={containerRef} className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl z-0">
          <vturb-smartplayer 
            id="vid-696e6d70a4304f1d777a68e8" 
            style={{ display: 'block', margin: '0 auto', width: '100%', position: 'relative', zIndex: 0 }}
          />
        </div>
      </div>
    </div>
  );
}