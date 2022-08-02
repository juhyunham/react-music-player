import img1 from "../images/image1.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image3.jpg";
import img4 from "../images/image4.jpg";
import img5 from "../images/image5.jpg";

import music1 from "../music/music1.mp3";
import music2 from "../music/music2.mp3";
import music3 from "../music/music3.mp3";
import music4 from "../music/music4.mp3";
import music5 from "../music/music5.mp3";

const playList = [
  {
    name: "노래노래1",
    artist: "아티스트1",
    img: img1,
    src: music1,
    id: 1,
  },
  {
    name: "노래2",
    artist: "아티스트2",
    img: img2,
    src: music2,
    id: 2,
  },
  {
    name: "노래3",
    artist: "아티스트23",
    img: img3,
    src: music3,
    id: 3,
  },
  {
    name: "노래4",
    artist: "아티스트44",
    img: img4,
    src: music4,
    id: 4,
  },
  {
    name: "노래5",
    artist: "아티스트55",
    img: img5,
    src: music5,
    id: 5,
  },
];

const initialState = {
  playList,
  currentMusicId: playList[0].id,
  currentIndex: 0,
  playing: false,
  repeat: "ALL", // ONE SHUFFLE
};

const PLAY_MUSIC = "musicPlayer/PLAY_MUSIC";
const STOP_MUSIC = "musicPlayer/STOP_MUSIC";

export const playMusic = () => ({ type: PLAY_MUSIC });
export const stopMusic = () => ({ type: STOP_MUSIC });

export default function musicPlayerReducer(state = initialState, action: any) {
  switch (action.type) {
    case PLAY_MUSIC:
      return {
        ...state,
        playing: true,
      };
    case STOP_MUSIC:
      return {
        ...state,
        playing: false,
      };
    default:
      return state;
  }
}
