import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import { makeStyles } from "@material-ui/core/styles";

import CustomButtonGroup from "../../Trujillo/TrujilloCarousel/TrujilloButtonGroup";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles(() => ({
  carouselContainer: {
    maxWidth: "100%",

    // [theme.breakpoints.up("sm")]: {
    //   maxWidth: "700px",
    // },
  },
}));

const ProjectsCarousel = ({ carouselData }) => {
  const classes = useStyles();
  return (
    <Carousel
      responsive={{
        desktop: {
          breakpoint: {
            max: 10000,
            min: 760,
          },
          items: 2,
        },
        mobile: {
          breakpoint: {
            max: 760,
            min: 0,
          },
          items: 1,
        },
      }}
      arrows={false}
      containerClass={classes.carouselContainer}
      swipeable={false}
      customButtonGroup={<CustomButtonGroup isBeachSection={false} />}
      renderButtonGroupOutside
    >
      {carouselData.map((projectData) => (
        <ProjectCard key={projectData.orderNumber} data={projectData} />
      ))}
    </Carousel>
  );
};

ProjectsCarousel.propTypes = {
  carouselData: PropTypes.array.isRequired,
};

export default ProjectsCarousel;
