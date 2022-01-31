import "./App.css";
import { useState } from "react";
import Slider from "react-slick";
import astronaut from "./assets/astronaut.png";
import celebrating from "./assets/celebrating.png";
import education from "./assets/education.png";
import taken from "./assets/taken.png";

const images = [astronaut, celebrating, education, taken];

function App() {


  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    dots: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
