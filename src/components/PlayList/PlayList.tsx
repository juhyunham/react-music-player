import MusicList from "../../store/data";
import PlayItem from "./PlayItem";
import QueueMusic from "@mui/icons-material/QueueMusic";
import Close from "@mui/icons-material/Close";
import classNames from "classnames";
import "./PlayList.scss";

function PlayList() {
  return (
    <div className={classNames("play_list")}>
      <div className="header">
        <div className="row">
          <QueueMusic className="list" />
          <span>Play list</span>
        </div>
        <Close sx={{ fontSize: 22, cursor: "pointer" }} />
      </div>
      <ul className="playlist">
        {MusicList.map((item, index) => (
          <li key={index}>
            <PlayItem item={item} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayList;
