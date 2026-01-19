import { useEffect, useRef } from 'react';
interface VideoPlayerProps {
  onVideoComplete?: () => void;
}
export default function VideoPlayer({ onVideoComplete }: VideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasTriggered = useRef(false);
  useEffect(() => {
    // Create and inject the script for the smart player
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://scripts.converteai.net/d0d64cb2-dca3-4be6-983c-3bc700b6a1d8/players/696e6d70a4304f1d777a68e8/v4/player.js';
    document.head.appendChild(script);
    // Listen for video completion events from vturb player
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'player_end' && !hasTriggered.current) {
        hasTriggered.current = true;
        onVideoComplete?.();
      }
    };
    window.addEventListener('message', handleMessage);
    // Fallback: trigger after 5 minutes if no event received
    const fallbackTimer = setTimeout(() => {
      if (!hasTriggered.current && onVideoComplete) {
        hasTriggered.current = true;
        onVideoComplete();
      }
    }, 300000); // 5 minutes
    return () => {
      // Cleanup: remove script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      window.removeEventListener('message', handleMessage);
      clearTimeout(fallbackTimer);
    };
  }, [onVideoComplete]);
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