import BreakingBanner from './components/BreakingBanner';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import Comments from './components/Comments';
import './globals.css';
function App() {
  return (
    <div className="min-h-screen bg-white">
      <BreakingBanner />
      <Header />
      <VideoPlayer />
      <Comments />
    </div>
  );
}
export default App;