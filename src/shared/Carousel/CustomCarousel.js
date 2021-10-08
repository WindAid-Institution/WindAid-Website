import React from "react";
import Carousel from "react-multi-carousel";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import CustomButtonGroup from "./CustomButtonGroup";

const useStyles = makeStyles(() => ({
  carouselContainer: ({ carouselContainerStyle }) => ({
    ...carouselContainerStyle,
  }),
}));

const CustomCarousel = ({
  responsive,
  children,
  style,
  arrows,
  counterColor,
  showedSlides,
}) => {
  const { carouselContainerStyle } = style || {};
  const classes = useStyles({ carouselContainerStyle });

  return (
    <Carousel
      responsive={responsive}
      arrows={arrows}
      customButtonGroup={
        <CustomButtonGroup
          counterColor={counterColor}
          showedSlides={showedSlides}
        />
      }
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
  children: PropTypes.array.isRequired,
  style: PropTypes.object,
  arrows: PropTypes.bool,
  counterColor: PropTypes.string,
  showedSlides: PropTypes.number,
};

CustomCarousel.defaultProps = {
  style: {},
  arrows: false,
  counterColor: "black",
  showedSlides: 1,
};

export default CustomCarousel;
