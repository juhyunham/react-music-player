import "./ProgressArea.scss";

function ProgressArea() {
  return (
    <div className="progress_area">
      <div className="progress_bar">
        <audio autoPlay></audio>
      </div>
      <div className="music_timer">
        <span>00:00</span>
        <span>00:00</span>
      </div>
    </div>
  );
}

export default ProgressArea;
