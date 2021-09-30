import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import { RiArrowRightSLine } from "@react-icons/all-files/ri/RiArrowRightSLine";
import { RiArrowLeftSLine } from "@react-icons/all-files/ri/RiArrowLeftSLine";

const useStyles = makeStyles({
  arrow: {
    position: "absolute",
    width: "60px",
    height: "60px",
    border: "none",
    background: "transparent",
    fontSize: "24px",
    padding: "0",
    color: "rgba(0, 0, 0, 0.54)",
  },

  arrowRight: {
    right: 0,
  },

  buttonGroup: {
    position: "absolute",
    left: "50%",
    display: "flex",
    alignItems: "center",
    width: "160px",
    height: "auto",
    transform: "translateX(-50%)",
    marginTop: "24px",
  },

  counter: {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
  },
});

const RightArrow = ({ onClick }) => {
  const classes = useStyles();

  return (
    <button
      type="button"
      className={clsx(classes.arrow, classes.arrowRight)}
      onClick={() => onClick()}
    >
      <RiArrowRightSLine />
    </button>
  );
};

const LeftArrow = ({ onClick }) => {
  const classes = useStyles();

  return (
    <button type="button" className={classes.arrow} onClick={() => onClick()}>
      <RiArrowLeftSLine />
    </button>
  );
};

const CustromButtonGroup = ({ next, previous, ...rest }) => {
  const classes = useStyles();

  const {
    carouselState: { totalItems, currentSlide },
  } = rest;

  return (
    <div className={classes.buttonGroup}>
      <LeftArrow onClick={() => previous()} />
      <div className={classes.counter}>
        {`${currentSlide + 1} / ${totalItems}`}
      </div>
      <RightArrow onClick={() => next()} />
    </div>
  );
};

RightArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

LeftArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

CustromButtonGroup.propTypes = {
  next: PropTypes.func,
  previous: PropTypes.func,
};
CustromButtonGroup.defaultProps = {
  next: () => {},
  previous: () => {},
};

export default CustromButtonGroup;
