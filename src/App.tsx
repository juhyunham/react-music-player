import Title from "./components/Title/Title";
import DetailImage from "./components/DetailImage/DetailImage";
import Info from "./components/Info/Info";
import ProgressArea from "./components/ProgressArea/ProgressArea";
import Controls from "./components/Controls/Controls";
import "./App.scss";

function App() {
  return (
    <div className="music_container">
      <Title />
      <DetailImage />
      <Info />
      <ProgressArea />
      <Controls />
    </div>
  );
}

export default App;
