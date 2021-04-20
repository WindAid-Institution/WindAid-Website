/* eslint-disable max-len */
import React from "react";
import Box from "@material-ui/core/Box";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";

import useHomepageData from "queries/homepage";
import MountainsImage from "images/LandingPage/OurPrograms/mountains.svg";
import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import Button from "shared/Button";
import SubHeader from "shared/SubHeader";
import Body from "shared/Body";

const useStyles = makeStyles((theme) => ({
  section: {
    flexDirection: "column",

    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },

  sectionTwo: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right bottom",
    paddingBottom: "130px",
    transition: "padding 0.2s ease",

    [theme.breakpoints.up("sm")]: {
      paddingBottom: "200px",
    },

    [theme.breakpoints.up("md")]: {
      paddingBottom: "90px",
      marginTop: "calc(2.96vw + 21.3px)",
    },
  },

  image: {
    objectFit: "cover",
    objectPosition: "center",
    width: "100%",
    height: "204px",
    margin: "16px 0",
    transition: "height 0.2s ease",

    [theme.breakpoints.up("sm")]: {
      height: "304px",
    },

    [theme.breakpoints.up("md")]: {
      margin: 0,
    },
  },

  groupImage: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "26px !important",
      minWidth: "472px",
    },

    [theme.breakpoints.up("lg")]: {
      height: "352px",
      minWidth: "547px",
    },
  },

  twoPeopleImage: {
    [theme.breakpoints.up("md")]: {
      marginRight: "26px !important",
      minWidth: "390px",
    },

    [theme.breakpoints.up("lg")]: {
      height: "315px",
      minWidth: "406px",
    },
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "center",

    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
    },
  },
}));

const OurPrograms = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { ourProgramsOne, ourProgramsTwo } = useHomepageData();

  const isSmScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <SectionWrapper style={{ sectionStyle: { paddingBottom: 0 } }}>
      <Box
        display="flex"
        alignItems="center"
        flexDirection={isMdScreen ? "row" : "column"}
        className={classes.section}
      >
        <TextSection
          header={ourProgramsOne.header}
          title={ourProgramsOne.title}
          body={ourProgramsOne.body.body}
        />
        <GatsbyImage
          image={ourProgramsOne.image.gatsbyImageData}
          alt={ourProgramsOne.image.description}
          className={clsx(classes.image, classes.groupImage)}
        />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        className={clsx(classes.section, classes.sectionTwo)}
        flexDirection={isMdScreen ? "row" : "column"}
        style={{ backgroundImage: `url(${MountainsImage})` }}
      >
        <GatsbyImage
          image={ourProgramsTwo.image.gatsbyImageData}
          alt={ourProgramsTwo.image.description}
          className={clsx(classes.image, classes.twoPeopleImage)}
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Body body={ourProgramsTwo.body.body} />
          <Body body={ourProgramsTwo.bodyTwo.bodyTwo} />
          <SubHeader
            subHeader={ourProgramsTwo.header}
            style={{
              textStyle: {
                textAlign: isSmScreen ? "left" : "center",
                margin: "24px 0 !important",
              },
            }}
          />
          <Box className={classes.buttonContainer}>
            <Link to="/short-term-program">
              <Button text="View Our Programs" />
            </Link>
          </Box>
        </Box>
      </Box>
    </SectionWrapper>
  );
};

export default OurPrograms;
