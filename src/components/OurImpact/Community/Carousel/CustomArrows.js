import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

const handleKeyDown = (e, onClickMethod) => {
  if (e.key === "Enter") {
    onClickMethod();
  }
};

const useStyles = makeStyles({
  screenArrow: {
    position: "absolute",
    width: "50%",
    height: "100%",
    outline: "none",
  },

  screenArrowRight: {
    right: 0,
  },
});

const CustomRightArrow = ({ onClick }) => {
  const classes = useStyles();

  return (
    <div
      type="button"
      aria-label="Next slide"
      role="button"
      className={clsx(classes.screenArrow, classes.screenArrowRight)}
      onClick={() => onClick()}
      onKeyDown={(e) => handleKeyDown(e, onClick)}
      tabIndex={0}
    />
  );
};

const CustomLeftArrow = ({ onClick }) => {
  const classes = useStyles();

  return (
    <div
      type="button"
      aria-label="Previous slide"
      role="button"
      className={classes.screenArrow}
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
