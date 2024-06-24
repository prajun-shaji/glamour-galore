import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img loading="lazy" src="../images/main.jpg" />
        </div>
        <div>
          <img loading="lazy" src="../images/main2.webp" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
