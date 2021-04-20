import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import useOurImpactData from "src/hooks/queries/ourImpact";
import { CustomRightArrow, CustomLeftArrow } from "./CustomArrows";
import CustomButtonGroup from "./CustomButtonGroup";
import CommunityCard from "./CommunityCard";

const CommuniutyCarousel = () => {
  const { communityCardsContent } = useOurImpactData();

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
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
      customButtonGroup={<CustomButtonGroup />}
      renderButtonGroupOutside
      swipeable={false}
    >
      {communityCardsContent.map((card) => (
        <CommunityCard {...card} key={card.name} />
      ))}
    </Carousel>
  );
};

export default CommuniutyCarousel;
