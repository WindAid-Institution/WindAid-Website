import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { GatsbyImage } from "gatsby-plugin-image";

const useStyles = makeStyles((theme) => ({
  carouselContainer: {
    paddingBottom: theme.spacing(5),
    maxWidth: "600px",
    margin: "0 auto",
  },
  dotList: {
    "& > .react-multi-carousel-dot--active > button": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
}));

const ExploreCarousel = ({ carouselImages }) => {
  const classes = useStyles();
  return (
    <Carousel
      responsive={{
        any: {
          breakpoint: {
            max: 3000,
            min: 0,
          },
          items: 1,
        },
      }}
      arrows
      infinite
      showDots
      containerClass={classes.carouselContainer}
      dotListClass={classes.dotList}
      autoPlay
      autoPlaySpeed={3000}
      swipeable={false}
    >
      {carouselImages.map(({ gatsbyImageData, description }) => (
        <Box className={classes.imageContainer}>
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

ExploreCarousel.propTypes = {
  carouselImages: PropTypes.array.isRequired,
};

export default ExploreCarousel;
