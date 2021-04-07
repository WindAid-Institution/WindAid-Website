/* eslint-disable max-len */
import React from "react";
import { Box } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import MountainsImage from "../../images/LandingPage/OurPrograms/mountains.svg";
import Header from "../../shared/Header/Header";
import Title from "../../shared/Title/Title";
import Body from "../../shared/Body/Body";
import useWindowSize from "../../hooks/useWindowSize";
import "../../styles/OurPrograms/OurPrograms.css";

const GROUP_IMAGE_NAME = "group";
const TWO_PEOPLE_IMAGE_NAME = "two_people";

const commonClassName = "our-programs__image";
const imageInfo = {
  group: {
    className: `${commonClassName} our-programs__image-group`,
    alt: "People group",
  },
  two_people: {
    className: `${commonClassName} our-programs__image-two-people`,
    alt: "Two people",
  },
};

const pageData = {
  sectionOne: {
    header: "Our Programs",
    title:
      "Our work cannot happen without the generosity and spirit of every single person we have welcomed out to Peru to get involved in what we do.",
    body:
      "Our projects always place community members at the heart of your stay with us, and by working alongside them you will be offered the chance to see the results of your work firsthand, ensuring that you will be left in no doubt of the vital contribution you have made to the lives of those most in need of access to clean energy.",
  },
  sectionTwo: {
    header: "Interested in learning more the programs?",
    bodyOne:
      "Our programs provide a great opportunity to travel and get to know a vibrant and exciting new culture, and also allow you to develop your skills working together as part of an international team. You will learn from scratch  the intricate processes involved in the construction, installation and operation of a wind turbine.",
    bodyTwo:
      "Many who have come have built lifelong friendships and some continue to work with us in various capacities, even after leaving South America. We would love you to be a part of our WindAid family!",
  },
};

const query = graphql`
  {
    images: allFile(
      filter: {
        relativeDirectory: { eq: "LandingPage/OurPrograms" }
        ext: { eq: ".png" }
      }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(quality: 100, placeholder: BLURRED)
        }
      }
    }
  }
`;

const OurPrograms = () => {
  const { sectionOne, sectionTwo } = pageData;
  const { width } = useWindowSize();

  const data = useStaticQuery(query);
  const imagesData = data?.images?.nodes.map((imageData) => ({
    image: imageData.childImageSharp.gatsbyImageData,
    className: imageInfo[imageData.name].className,
    alt: imageInfo[imageData.name].alt,
    name: imageData.name,
  }));

  const groupImage = imagesData.find(({ name }) => name === GROUP_IMAGE_NAME);
  const twoPeopleImage = imagesData.find(
    ({ name }) => name === TWO_PEOPLE_IMAGE_NAME
  );

  return (
    <section className="our-programs__container container">
      <Box
        display="flex"
        alignItems="center"
        flexDirection={width > 991 ? "row" : "column"}
        className="our-programs__section-one"
      >
        <Box>
          <Header header={sectionOne.header} style={{ width: "126px" }} />
          <Title title={sectionOne.title} />
          <Body body={sectionOne.body} />
        </Box>
        <GatsbyImage
          image={groupImage.image}
          alt={groupImage.alt}
          className={groupImage.className}
        />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        className="our-programs__section-two"
        flexDirection={width > 991 ? "row" : "column"}
        style={{ backgroundImage: `url(${MountainsImage})` }}
      >
        <GatsbyImage
          image={twoPeopleImage.image}
          alt={twoPeopleImage.alt}
          className={twoPeopleImage.className}
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Body body={sectionTwo.bodyOne} />
          <Body body={sectionTwo.bodyTwo} />
          <Header
            header={sectionTwo.header}
            style={{
              fontSize: width > 600 ? "24px" : "18px",
              textAlign: width > 600 ? "left" : "center",
            }}
          />
          <button type="button" className="our-programs__button">
            View Our Programs
          </button>
        </Box>
      </Box>
    </section>
  );
};

export default OurPrograms;
