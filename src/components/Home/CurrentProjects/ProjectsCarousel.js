import React from "react";
import PropTypes from "prop-types";

import ProjectCard from "./ProjectCard";
import CustomCarousel from "../../../shared/Carousel/CustomCarousel";

const ProjectsCarousel = ({ carouselData }) => {
  const responsive = {
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
  };

  const additionalStyle = {
    carouselContainerStyle: {
      height: "800px",
    },
  };

  return (
    <CustomCarousel
      responsive={responsive}
      style={additionalStyle}
      arrows={false}
      showedSlides={2}
    >
      {carouselData.map((projectData) => (
        <ProjectCard key={projectData.orderNumber} data={projectData} />
      ))}
    </CustomCarousel>
  );
};

ProjectsCarousel.propTypes = {
  carouselData: PropTypes.array.isRequired,
};

export default ProjectsCarousel;
