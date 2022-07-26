import "./DetailImage.scss";
import img1 from "../../images/image1.jpg";

function DetailImage() {
  return (
    <div className="image_area">
      <img src={img1} alt="" />
    </div>
  );
}

export default DetailImage;
