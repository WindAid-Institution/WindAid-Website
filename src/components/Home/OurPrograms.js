/* eslint-disable max-len */
import React from "react";
import Box from "@material-ui/core/Box";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { useHomepageData } from "src/hooks/queries/homepage";
import MountainsImage from "images/LandingPage/OurPrograms/mountains.svg";
import Header from "src/shared/Header/Header";
import Title from "src/shared/Title/Title";
import Body from "src/shared/Body/Body";
import useWindowSize from "src/hooks/useWindowSize";
import "styles/OurPrograms/OurPrograms.css";

const OurPrograms = () => {
  const { ourProgramsOne, ourProgramsTwo } = useHomepageData();
  const { width } = useWindowSize();

  return (
    <section className="our-programs__container container">
      <Box
        display="flex"
        alignItems="center"
        flexDirection={width > 991 ? "row" : "column"}
        className="our-programs__section-one"
      >
        <Box>
          <Header header={ourProgramsOne.header} style={{ width: "126px" }} />
          <Title title={ourProgramsOne.title} />
          <Body body={ourProgramsOne.body.body} />
        </Box>
        <GatsbyImage
          image={ourProgramsOne.image.gatsbyImageData}
          alt={ourProgramsOne.image.description}
          className="our-programs__image our-programs__image-group"
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
          image={ourProgramsTwo.image.gatsbyImageData}
          alt={ourProgramsTwo.image.description}
          className="our-programs__image our-programs__image-two-people"
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Body body={ourProgramsTwo.body.body} />
          <Body body={ourProgramsTwo.bodyTwo.bodyTwo} />
          <Header
            header={ourProgramsTwo.header}
            style={{
              fontSize: width > 600 ? "24px" : "18px",
              textAlign: width > 600 ? "left" : "center",
            }}
          />
          <Link to="/">
            <button type="button" className="our-programs__button">
              View Our Programs
            </button>
          </Link>
        </Box>
      </Box>
    </section>
  );
};

export default OurPrograms;
