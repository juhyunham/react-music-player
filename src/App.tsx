import Title from "./components/Title/Title";
import DetailImage from "./components/DetailImage/DetailImage";
import Info from "./components/Info/Info";
import Controls from "./components/Controls/Controls";
import "./App.scss";

function App() {
  return (
    <div className="music_container">
      <Title />
      <DetailImage />
      <Info />
      <Controls />
    </div>
  );
}

export default App;
