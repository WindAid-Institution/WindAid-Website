import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import { makeStyles } from "@material-ui/core/styles";

import {
  CustomLeftArrow,
  CustomRightArrow,
} from "../../OurImpact/Community/Carousel/CustomArrows";
import CustomButtonGroup from "../../OurImpact/Community/Carousel/CustomButtonGroup";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles(() => ({
  carouselContainer: {
    height: "800px",
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
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
      customButtonGroup={<CustomButtonGroup />}
      renderButtonGroupOutside
      swipeable={false}
      containerClass={classes.carouselContainer}
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
