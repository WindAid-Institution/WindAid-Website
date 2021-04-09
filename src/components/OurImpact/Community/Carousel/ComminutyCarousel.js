import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import OUR_IMPACT_DATA from "pages/our-impact/data";

import { CustomRightArrow, CustomLeftArrow } from "./CustomArrows";
import CustomButtonGroup from "./CustomButtonGroup";
import CommunityCard from "./CommunityCard";

const {
  COMMUNITY: { CARDS },
} = OUR_IMPACT_DATA;

const imagesQuery = graphql`
  {
    cardOne: file(relativePath: { eq: "OurImpact/Community/card_1.png" }) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, quality: 100)
      }
    }

    cardTwo: file(relativePath: { eq: "OurImpact/Community/card_2.png" }) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, quality: 100)
      }
    }

    cardThree: file(relativePath: { eq: "OurImpact/Community/card_3.png" }) {
      name
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, quality: 100)
      }
    }
  }
`;

const CommuniutyCarousel = () => {
  const data = useStaticQuery(imagesQuery);
  const { cardOne, cardTwo, cardThree } = data || {};
  const cardsImagesData = [cardOne, cardTwo, cardThree];

  const cardsData = CARDS.map((card, index) => ({
    ...card,
    img: getImage(cardsImagesData[index]),
  }));

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
      {cardsData.map((card) => (
        <CommunityCard {...card} key={card.title} />
      ))}
    </Carousel>
  );
};

export default CommuniutyCarousel;
