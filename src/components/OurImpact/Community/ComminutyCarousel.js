import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CommunityCard from "./CommunityCard";

const CommuniutyCarousel = () => (
  <Carousel
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024,
        },
        items: 1,
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0,
        },
        items: 1,
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464,
        },
        items: 1,
      },
    }}
  >
    <CommunityCard />
    <CommunityCard />
    <CommunityCard />
  </Carousel>
);

export default CommuniutyCarousel;
