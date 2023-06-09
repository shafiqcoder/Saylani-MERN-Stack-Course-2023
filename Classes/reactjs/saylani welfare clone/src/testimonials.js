import slide1 from "./images/slide1.png";
import slide2 from "./images/slide2.png";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Testimonials() {
  const images = [slide1, slide2];

  return (
    <>
      <div className="testimonials">
        <h4>Our Testimonials</h4>
        <h1>What They Say?</h1>
        <Slide>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[0]})` }}></div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[1]})` }}></div>
          </div>
        </Slide>
      </div>
    </>
  );
}
