import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import rightArrowCircle from "../../images/rightArrowCircle.svg";
import arrowHover from "../../images/arrowHover.svg";

const useStyles = makeStyles({
  arrow: {
    position: "absolute",
    width: "32px",
    height: "32px",
    border: "none",
    background: "transparent",
    padding: "0",
    "& img:hover": {
      cursor: "pointer",
    },
  },

  arrowRight: {
    right: 0,
  },

  arrowLeft: {
    transform: "scaleX(-1)",
  },

  buttonGroup: {
    position: "absolute",
    left: "50%",
    display: "flex",
    alignItems: "center",
    width: "160px",
    height: "auto",
    transform: "translateX(-50%)",
    marginTop: "15px",
  },

  counter: ({ counterColor }) => ({
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    color: counterColor,
  }),
});

const Arrow = ({ onClick, style, alt }) => {
  const [arrowStyle, setArrowStyle] = useState(rightArrowCircle);

  return (
    <button
      type="button"
      className={style}
      onClick={() => onClick()}
      onMouseOver={() => setArrowStyle(arrowHover)}
      onFocus={() => setArrowStyle(arrowHover)}
      onMouseOut={() => setArrowStyle(rightArrowCircle)}
      onBlur={() => setArrowStyle(rightArrowCircle)}
    >
      <img src={arrowStyle} alt={alt} />
    </button>
  );
};

const CustomButtonGroup = ({ next, previous, ...rest }) => {
  const {
    carouselState: { totalItems, currentSlide },
    counterColor,
    showedSlides,
  } = rest;

  const classes = useStyles({ counterColor });

  return (
    <div className={classes.buttonGroup}>
      <Arrow
        onClick={() => previous()}
        alt="Left arrow"
        style={clsx(classes.arrow, classes.arrowLeft)}
      />
      <div className={classes.counter}>
        {`${currentSlide + 1} / ${totalItems - showedSlides + 1}`}
      </div>
      <Arrow
        onClick={() => next()}
        alt="Right arrow"
        style={clsx(classes.arrow, classes.arrowRight)}
      />
    </div>
  );
};

Arrow.propTypes = {
  onClick: PropTypes.func.isRequired,
  style: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

CustomButtonGroup.propTypes = {
  next: PropTypes.func,
  previous: PropTypes.func,
};
CustomButtonGroup.defaultProps = {
  next: () => {},
  previous: () => {},
};

export default CustomButtonGroup;
