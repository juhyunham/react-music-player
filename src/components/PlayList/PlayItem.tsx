import classNames from "classnames";

interface PlayItemProps {
  item: {
    name: string;
    artist: string;
    img: string;
    // src: string;
    id: number;
  };
  index: number;
}

function PlayItem({ item, index }: PlayItemProps) {
  return (
    <>
      <div className={classNames("row")}>
        <span className="name">{item.name}</span>
        <span className="info">{item.artist}</span>
      </div>
      <span className={classNames(`music_duration`)}>00:00</span>
    </>
  );
}

export default PlayItem;
