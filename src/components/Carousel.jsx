import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [currIndex, setCurrIndex] = useState(0);

  const increaseCount = () => {
    if (currIndex >= images.length - 1) {
      setCurrIndex(0);
    } else {
      setCurrIndex(currIndex + 1);
    }
  };

  const decreaseCount = () => {
    if (currIndex === 0) {
      setCurrIndex(images.length - 1);
    } else {
      setCurrIndex(currIndex - 1);
    }
  };

  return (
    <div className="carousel-container flex " >
    <div className="leftArrow arrowDiv flex" onClick={decreaseCount} >
        <ArrowBackIosIcon/>
    </div>
    <h2 className="Title flex" >{images[currIndex].title}</h2>
    <img src={images[currIndex].img} alt="" />
    <h2 className="Caption flex" >{images[currIndex].subtitle}</h2>
    <div className="rightArrow arrowDiv flex" onClick={increaseCount} >
        < ArrowForwardIosIcon/>
    </div>
</div>
  );
}


export default Carousel;

