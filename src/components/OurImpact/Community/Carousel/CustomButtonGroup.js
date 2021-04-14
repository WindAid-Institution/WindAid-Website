import React from "react";
import { RiArrowRightSLine } from "@react-icons/all-files/ri/RiArrowRightSLine";
import { RiArrowLeftSLine } from "@react-icons/all-files/ri/RiArrowLeftSLine";
import "styles/OurImpact/CarouselElements.css";

const RightArrow = ({ onClick }) => (
  <button
    type="button"
    className="arrow arrow__right"
    onClick={() => onClick()}
  >
    <RiArrowRightSLine />
  </button>
);

const LeftArrow = ({ onClick }) => (
  <button type="button" className="arrow arrow__left" onClick={() => onClick()}>
    <RiArrowLeftSLine />
  </button>
);

const CustromButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { totalItems, currentSlide },
  } = rest;

  return (
    <div className="buttom-group">
      <LeftArrow onClick={() => previous()} />
      <div className="button-group__count">
        {`${currentSlide + 1} / ${totalItems}`}
      </div>
      <RightArrow onClick={() => next()} />
    </div>
  );
};

export default CustromButtonGroup;
