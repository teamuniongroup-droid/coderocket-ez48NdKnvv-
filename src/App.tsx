import { useState, useEffect } from 'react';
import BreakingBanner from './components/BreakingBanner';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import Comments from './components/Comments';
import CTASection from './components/CTASection';
import './globals.css';
function App() {
  const [showCTA, setShowCTA] = useState(false);
  useEffect(() => {
    // Show CTA after 5 minutes (300 seconds)
    const timer = setTimeout(() => {
      setShowCTA(true);
    }, 300000); // 300000ms = 5 minutes
    // Also listen for video end event from smartplayer
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'smartplayer-video-ended') {
        setShowCTA(true);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('message', handleMessage);
    };
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <BreakingBanner />
      <Header />
      <VideoPlayer />
      <Comments />
      {showCTA && <CTASection />}
    </div>
  );
}
export default App;