import React from "react";

import "styles/OurImpact/CarouselElements.css";

const handleKeyDown = (e, onClickMethod) => {
  if (e.key === "Enter") {
    onClickMethod();
  }
};

const CustomRightArrow = ({ onClick }) => (
  <div
    type="button"
    aria-label="Next slide"
    role="button"
    className="screen-arrow screen-arrow__right"
    onClick={() => onClick()}
    onKeyDown={(e) => handleKeyDown(e, onClick)}
    tabIndex={0}
  />
);

const CustomLeftArrow = ({ onClick }) => (
  <div
    type="button"
    aria-label="Previous slide"
    role="button"
    className="screen-arrow screen-arrow__left"
    onClick={() => onClick()}
    onKeyDown={(e) => handleKeyDown(e, onClick)}
    tabIndex={0}
  />
);

export { CustomLeftArrow, CustomRightArrow };
