import React from "react";
import Carousel from "react-multi-carousel";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import { CustomRightArrow, CustomLeftArrow } from "./CustomArrows";
import CustomButtonGroup from "./CustomButtonGroup";

const useStyles = makeStyles(() => ({
  carouselContainer: ({ carouselContainerStyle }) => ({
    ...carouselContainerStyle,
  }),
}));

const CustomCarousel = ({ responsive, children, style, arrows }) => {
  const { carouselContainerStyle } = style || {};
  const classes = useStyles({ carouselContainerStyle });

  return (
    <Carousel
      responsive={responsive}
      arrows={arrows}
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
      customButtonGroup={<CustomButtonGroup />}
      renderButtonGroupOutside
      swipeable={false}
      containerClass={classes.carouselContainer}
    >
      {children}
    </Carousel>
  );
};

CustomCarousel.propTypes = {
  responsive: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  style: PropTypes.object,
  arrows: PropTypes.bool,
};

CustomCarousel.defaultProps = {
  style: {},
  arrows: false,
};

export default CustomCarousel;
