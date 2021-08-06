import React from "react";
import { Tween } from "react-gsap";

const DescriptionBlock = ({ title, description, darkBrown }) => {
  return (
    <div
      className={
        darkBrown ? "mydescription-sectionDarkBrown" : "mydescription-section"
      }
    >
      <Tween
        from={{
          x: -100,
          opacity: 0,
        }}
        delay={0.4}
      >
        <h1
          className={
            darkBrown
              ? "mydescription-headingDarkBrown"
              : "mydescription-heading"
          }
        >
          {title}
        </h1>
      </Tween>
      <Tween from={{ x: -100, opacity: 0 }} delay={0.8}>
        <h5
          className={
            darkBrown ? "mydescription-paraDarkBrown" : "mydescription-para"
          }
        >
          {description}
        </h5>
      </Tween>
    </div>
  );
};

export default DescriptionBlock;
