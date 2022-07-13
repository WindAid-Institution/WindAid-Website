import React from "react";
import Carousel from "react-multi-carousel";
import PropTypes from "prop-types";
import useClasses from "../../styles/useClasses";

import CustomButtonGroup from "./CustomButtonGroup";

const styles = ({ carouselContainerStyle, carouselSliderStyle }) => ({
  carouselContainer: {
    ...carouselContainerStyle,
  },
  carouselSlider: {
    ...carouselSliderStyle,
  },
});

const CustomCarousel = ({
  responsive,
  children,
  style,
  arrows,
  counterColor,
  showedSlides,
}) => {
  const { carouselContainerStyle, carouselSliderStyle } = style || {};
  const udpatedStyle = styles({ carouselContainerStyle, carouselSliderStyle });
  const classes = useClasses(udpatedStyle);

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
      sliderClass={classes.carouselSlider}
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
