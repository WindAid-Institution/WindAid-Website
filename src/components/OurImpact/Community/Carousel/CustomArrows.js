import React from "react";
import PropTypes from "prop-types";

const handleKeyDown = (e, onClickMethod) => {
  if (e.key === "Enter") {
    onClickMethod();
  }
};

const CustomRightArrow = ({ onClick }) => {
  const classes = {
    screenArrow: {
      position: "absolute",
      width: "50%",
      height: "100%",
      outline: "none",
    },

    screenArrowRight: {
      right: 0,
    },
  };

  return (
    <div
      type="button"
      aria-label="Next slide"
      role="button"
      style={{ ...classes.screenArrow, ...classes.screenArrowRight }}
      onClick={() => onClick()}
      onKeyDown={(e) => handleKeyDown(e, onClick)}
      tabIndex={0}
    />
  );
};

const CustomLeftArrow = ({ onClick }) => {
  const classes = {
    screenArrow: {
      position: "absolute",
      width: "50%",
      height: "100%",
      outline: "none",
    },

    screenArrowRight: {
      right: 0,
    },
  };
  return (
    <div
      type="button"
      aria-label="Previous slide"
      role="button"
      style={classes.screenArrow}
      onClick={() => onClick()}
      onKeyDown={(e) => handleKeyDown(e, onClick)}
      tabIndex={0}
    />
  );
};

CustomRightArrow.propTypes = {
  onClick: PropTypes.func,
};

CustomLeftArrow.propTypes = {
  onClick: PropTypes.func,
};

CustomRightArrow.defaultProps = {
  onClick: () => {},
};
CustomLeftArrow.defaultProps = {
  onClick: () => {},
};

export { CustomLeftArrow, CustomRightArrow };
