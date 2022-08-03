import { useRef } from "react";
import Title from "./components/Title/Title";
import DetailImage from "./components/DetailImage/DetailImage";
import Info from "./components/Info/Info";
import ProgressArea from "./components/ProgressArea/ProgressArea";
import Controls from "./components/Controls/Controls";
import PlayList from "./components/PlayList/PlayList";
import "./App.scss";

function App() {
  const refAudio = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    refAudio.current?.play();
  };

  const handlePause = () => {
    refAudio.current?.pause();
  };

  return (
    <div className="music_container">
      <Title />
      <DetailImage />
      <Info />
      <ProgressArea ref={refAudio} />
      <Controls play={handlePlay} pause={handlePause} />
      <PlayList />
    </div>
  );
}

export default App;
