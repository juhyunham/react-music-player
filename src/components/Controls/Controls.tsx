import React from "react";
import "./Controls.scss";
import RepeatIcon from "@mui/icons-material/Repeat";
import PauseIcon from "@mui/icons-material/Pause";
import SkipPrevious from "@mui/icons-material/SkipPrevious";
import PlayArrow from "@mui/icons-material/PlayArrow";
import SkipNext from "@mui/icons-material/SkipNext";
import QueueMusic from "@mui/icons-material/QueueMusic";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { useSelector } from "react-redux";
import { initialStateProps } from "../../store/musicPlayerReducer";

interface ControlsProps {
  play: () => void;
  pause: () => void;
}

export default function Controls({ play, pause }: ControlsProps) {
  const playing = useSelector((state: initialStateProps) => state.playing);

  const handleClickPlay = () => {
    play();
  };

  const handleClickPause = () => {
    pause();
  };

  return (
    <div className="control_area">
      <QueueMusic sx={{ fontSize: 30, cursor: "pointer" }} />
      <RepeatIcon sx={{ fontSize: 30, cursor: "pointer" }} />
      <SkipPrevious sx={{ fontSize: 30, cursor: "pointer" }} />

      {playing ? (
        <PauseIcon sx={{ fontSize: 30, cursor: "pointer" }} onClick={handleClickPause} />
      ) : (
        <PlayArrow className="play" sx={{ fontSize: 30, cursor: "pointer" }} onClick={handleClickPlay} />
      )}

      <SkipNext sx={{ fontSize: 30, cursor: "pointer" }} />

      <div className="volume_container">
        <VolumeUpIcon sx={{ fontSize: 20 }} />
        <input type="range" style={{ cursor: "pointer" }} defaultValue={1} min="0" max="1" step="0.1" />
      </div>
    </div>
  );
}
