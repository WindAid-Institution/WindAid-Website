import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

import { RiArrowRightSLine } from "@react-icons/all-files/ri/RiArrowRightSLine";
import { RiArrowLeftSLine } from "@react-icons/all-files/ri/RiArrowLeftSLine";

const useStyles = makeStyles((theme) => ({
  arrow: ({ isBeachSection }) => ({
    position: "absolute",
    width: "35px",
    height: "35px",
    border: "none",
    fontSize: "18px",
    padding: "0",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: isBeachSection
      ? theme.palette.info.main
      : theme.palette.primary.main,

    color: theme.palette.secondary.main,
  }),

  arrowRight: {
    right: 0,
  },

  buttonGroupContainer: ({ isBeachSection }) => ({
    width: "100%",
    height: "46px",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: isBeachSection
      ? "rgba(255, 255, 255, 0.5)"
      : "transparent",
    padding: "16px 0",

    [theme.breakpoints.up("xmd")]: {
      width: isBeachSection ? "calc(100% - 76px)" : "100%",
    },

    [theme.breakpoints.up("md")]: {
      width: isBeachSection ? "calc(100% - 270px)" : "100%",
    },

    [theme.breakpoints.up("lg")]: {
      width: isBeachSection ? "calc(100% - 16px)" : "100%",
    },
  }),

  buttonGroup: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "160px",
    height: "auto",
  },

  counter: {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const RightArrow = ({ onClick, isBeachSection }) => {
  const classes = useStyles({ isBeachSection });

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

const LeftArrow = ({ onClick, isBeachSection }) => {
  const classes = useStyles({ isBeachSection });

  return (
    <button type="button" className={classes.arrow} onClick={() => onClick()}>
      <RiArrowLeftSLine />
    </button>
  );
};

const CustromButtonGroup = ({
  next,
  previous,
  itemsLength,
  isBeachSection,
  ...rest
}) => {
  const classes = useStyles({ isBeachSection });
  const {
    carouselState: { totalItems, currentSlide, slidesToShow },
  } = rest;

  const maxItemsLength = totalItems - slidesToShow + 1;
  const currentItem = currentSlide + 1;
  const firstSlide = currentItem === 1;
  const lastSlide = currentItem === maxItemsLength;

  return (
    <Box className={classes.buttonGroupContainer}>
      <Box className={classes.buttonGroup}>
        {!firstSlide && (
          <LeftArrow
            onClick={() => previous()}
            isBeachSection={isBeachSection}
          />
        )}
        <Box className={classes.counter}>
          {`${currentItem} / ${maxItemsLength}`}
        </Box>
        {!lastSlide && (
          <RightArrow onClick={() => next()} isBeachSection={isBeachSection} />
        )}
      </Box>
    </Box>
  );
};

RightArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
  isBeachSection: PropTypes.bool.isRequired,
};

LeftArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
  isBeachSection: PropTypes.bool.isRequired,
};

CustromButtonGroup.propTypes = {
  next: PropTypes.func,
  previous: PropTypes.func,
  itemsLength: PropTypes.number,
  isBeachSection: PropTypes.bool.isRequired,
};
CustromButtonGroup.defaultProps = {
  next: () => {},
  previous: () => {},
  itemsLength: 1,
};

export default CustromButtonGroup;
