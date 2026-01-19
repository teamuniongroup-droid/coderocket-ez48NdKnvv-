import BreakingBanner from './components/BreakingBanner';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoPlayer from './components/VideoPlayer';
import Comments from './components/Comments';
import './globals.css';
function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <BreakingBanner />
      <Header />
      <Hero />
      <VideoPlayer />
      <Comments />
    </div>
  );
}
export default App;