import { useImperativeHandle, useRef, forwardRef } from "react";
import "./ProgressArea.scss";
import music1 from "../../music/music1.mp3";
import { useDispatch } from "react-redux";
import { playMusic, stopMusic } from "../../store/musicPlayerReducer";
interface ProgressAreaProps {
  props?: any;
  ref: any;
}

function ProgressArea({ props, ref }: ProgressAreaProps) {
  const refAudio = useRef<HTMLAudioElement>(null);
  const dispatch = useDispatch();

  useImperativeHandle(ref, () => ({
    play: () => {
      refAudio.current?.play();
    },
    pause: () => {
      refAudio.current?.pause();
    },
  }));

  const handlePlay = () => {
    dispatch(playMusic());
  };

  const handlePause = () => {
    dispatch(stopMusic());
  };

  return (
    <div className="progress_area">
      <div className="progress_bar">
        <audio autoPlay ref={refAudio} src={music1} onPlay={handlePlay} onPause={handlePause} />
      </div>
      <div className="music_timer">
        <span>00:00</span>
        <span>00:00</span>
      </div>
    </div>
  );
}

export default forwardRef(ProgressArea);
