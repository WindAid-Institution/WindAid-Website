import React from "react";
import Grid from "@mui/material/Grid";
import { getSrc } from "gatsby-plugin-image";
import { useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import useTrujilloData from "hooks/queries/trujillo";
import { getImage } from "src/utils/utils";
import useClasses from "../../styles/useClasses";

import ExploreCarousel from "./TrujilloCarousel/TrujilloCarousel";

const styles = (theme) => ({
  textContainer: {
    "& > div > div > h3": {
      textAlign: "center",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      alignItems: "center",
      position: "relative",
      top: "-26px",
      paddingRight: theme.spacing(4),

      "& > div > div > h3": {
        textAlign: "left",
      },
    },
  },
});

const Explore = () => {
  const {
    explore: {
      title: textTitle,
      body: { body },
      images,
    },
  } = useTrujilloData();

  const classes = useClasses(styles);
  const theme = useTheme();

  const isUpLg = useMediaQuery(theme.breakpoints.up("lg"));

  const sectionStyle = {
    sectionStyle: {
      height: "600px",
      backgroundSize: "contain",
      backgroundPosition: "bottom",

      [theme.breakpoints.up("sm")]: {
        height: "740px",
      },
      [theme.breakpoints.up("md")]: {
        height: "810px",
      },
      [theme.breakpoints.up("xl")]: {
        height: "920px",
      },
    },
  };

  const textSectionStyle = {
    bodyStyle: {
      textStyle: {
        textAlign: isUpLg ? "left" : "center",
      },
    },
  };

  const backgroundPicture = getImage(images, "people-background");
  const carouselImages = images.filter(({ title }) => title.includes("group"));
  const bgImageSrc = getSrc(backgroundPicture);
  return (
    <SectionWrapper
      bgColor="secondary"
      bgUrl={bgImageSrc}
      style={{ ...sectionStyle }}
    >
      <Grid container>
        <Grid item xs={12} lg={6} className={classes.textContainer}>
          <TextSection
            title={textTitle}
            body={body}
            style={textSectionStyle}
            size="full"
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <ExploreCarousel carouselImages={carouselImages} />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default Explore;
