import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { GatsbyImage } from "gatsby-plugin-image";

import CustomButtonGroup from "./TrujilloButtonGroup";

const useStyles = makeStyles((theme) => ({
  carouselContainer: ({ isBeachSection }) => ({
    paddingBottom: isBeachSection ? theme.spacing(5) : theme.spacing(2),
    maxWidth: isBeachSection ? "100%" : "600px",
    margin: "0 auto",
    width: "100%",
  }),
  imageContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: ({ isBeachSection }) => ({
    width: "100%",
    height: "100%",

    [theme.breakpoints.up("lg")]: {
      width: isBeachSection ? "368px" : "100%",
      height: isBeachSection ? "304px" : "100%",
    },
  }),
}));

const TrujilloCarousel = ({ carouselImages, isBeachSection }) => {
  const classes = useStyles({ isBeachSection });

  return (
    <Carousel
      responsive={{
        desktop: {
          breakpoint: {
            max: 10000,
            min: 1200,
          },
          items: isBeachSection ? 3 : 1,
        },
        tablet: {
          breakpoint: {
            max: 1200,
            min: 600,
          },
          items: isBeachSection ? 2 : 1,
        },
        mobile: {
          breakpoint: {
            max: 600,
            min: 0,
          },
          items: 1,
        },
      }}
      arrows={false}
      containerClass={classes.carouselContainer}
      swipeable={false}
      customButtonGroup={
        <CustomButtonGroup itemsLength={3} isBeachSection={isBeachSection} />
      }
      renderButtonGroupOutside
    >
      {carouselImages.map(({ gatsbyImageData, description }) => (
        <Box className={classes.imageContainer} key={description}>
          <GatsbyImage
            image={gatsbyImageData}
            alt={description}
            key={description}
            className={classes.image}
          />
        </Box>
      ))}
    </Carousel>
  );
};

TrujilloCarousel.propTypes = {
  carouselImages: PropTypes.array.isRequired,
  isBeachSection: PropTypes.bool,
};

TrujilloCarousel.defaultProps = {
  isBeachSection: false,
};

export default TrujilloCarousel;
