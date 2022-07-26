import "./Title.scss";

function Title() {
  return (
    <h1 className="title">
      <span>{true ? "Now playing" : "Not playing"}</span>
    </h1>
  );
}

export default Title;
