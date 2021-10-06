import React from "react";
import Carousel from "react-multi-carousel";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import CustomButtonGroup from "./CustomButtonGroup";

const useStyles = makeStyles(() => ({
  carouselContainer: ({ carouselContainerStyle }) => ({
    ...carouselContainerStyle,
  }),
  carouselItem: {},
}));

const CustomCarousel = ({
  responsive,
  children,
  style,
  arrows,
  counterColor,
}) => {
  const { carouselContainerStyle } = style || {};
  const classes = useStyles({ carouselContainerStyle });

  return (
    <Carousel
      responsive={responsive}
      arrows={arrows}
      customButtonGroup={<CustomButtonGroup counterColor={counterColor} />}
      renderButtonGroupOutside
      swipeable={false}
      containerClass={classes.carouselContainer}
      itemClass={classes.carouselItem}
    >
      {children}
    </Carousel>
  );
};

CustomCarousel.propTypes = {
  responsive: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
  style: PropTypes.object,
  arrows: PropTypes.bool,
  counterColor: PropTypes.string,
};

CustomCarousel.defaultProps = {
  style: {},
  arrows: false,
  counterColor: "black",
};

export default CustomCarousel;
