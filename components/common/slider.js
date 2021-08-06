/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Tween } from "react-gsap";

const Slider = ({ images, darkBrown }) => {
  const [activeindex, setactiveindex] = useState(1);

  const length = images.length;

  const prevslide = () => {
    if (activeindex === 0) {
      setactiveindex(length - 1);
    } else {
      setactiveindex(activeindex - 1);
    }
  };
  const nextslide = () => {
    if (activeindex === length - 1) {
      setactiveindex(0);
    } else {
      setactiveindex(activeindex + 1);
    }
  };
  const changeslide = (index) => {
    setactiveindex(index);
  };

  return (
    <Tween from={{ y: 500, opacity: 0 }} delay={1}>
      <div className={darkBrown ? "slider-styleBrown" : "slider-style"}>
        <div className="slider-content">
          <Tween from={{ y: 500, opacity: 0 }} delay={1.2}>
            <img
              src={
                activeindex === 0 ? images[length - 1] : images[activeindex - 1]
              }
              alt=""
              className="image-style"
              onClick={() => prevslide()}
            />
          </Tween>
          {images.map((img, index) => {
            return (
              <>
                <img
                  src={img}
                  alt="img"
                  key={index}
                  className={
                    index === activeindex
                      ? "image-style active-slide"
                      : "d-none"
                  }
                  onClick={() => changeslide(index)}
                />
              </>
            );
          })}
          <Tween from={{ y: 500, opacity: 0 }} delay={1.4}>
            <img
              src={
                activeindex === length - 1 ? images[0] : images[activeindex + 1]
              }
              alt=""
              className="image-style"
              onClick={() => nextslide()}
            />
          </Tween>
        </div>
      </div>
    </Tween>
  );
};

export default Slider;
