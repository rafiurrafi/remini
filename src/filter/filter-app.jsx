import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "./assets/1.jpeg";
import img2 from "./assets/3.jpeg";
import img3 from "./assets/2.jpeg";
const FilterApp = () => {
  return (
    <div>
      <Carousel swipeable={true}>
        <div>
          <img src={img1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={img2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={img3} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default FilterApp;
