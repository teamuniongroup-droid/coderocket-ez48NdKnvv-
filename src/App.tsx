import { useState, useEffect } from 'react';
import BreakingBanner from './components/BreakingBanner';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoPlayer from './components/VideoPlayer';
import Quiz from './components/Quiz';
import Comments from './components/Comments';
import './globals.css';
function App() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const handleVideoComplete = () => {
    setShowQuiz(true);
  };
  const handleQuizComplete = () => {
    setShowComments(true);
  };
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <BreakingBanner />
      <Header />
      <Hero />
      <VideoPlayer onVideoComplete={handleVideoComplete} />
      {showQuiz && <Quiz onQuizComplete={handleQuizComplete} />}
      {showComments && <Comments />}
    </div>
  );
}
export default App;