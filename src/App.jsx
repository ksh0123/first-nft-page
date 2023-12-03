import NFT from "./components/NFT";
import VideoBackground from "./components/VideoBackground";
import Clock from "./components/Clock";
import Quotes from "./components/Quotes";

const App = () => {
  return (
    <div>
      <header className="fixed top-0 left-0 z-10 w-screen h-20 flex flex-row justify-between items-center px-10">
        <Clock />
        <Quotes />
      </header>
      <div className="container font-orbit">
        <VideoBackground className="relative" />
        <NFT />
      </div>
    </div>
  );
};

export default App;
