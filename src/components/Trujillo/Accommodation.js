import React from "react";
import Grid from "@mui/material/Grid";
import { GatsbyImage } from "gatsby-plugin-image";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import useTrujilloData from "hooks/queries/trujillo";
import { getImage } from "src/utils/utils";
import useClasses from "../../styles/useClasses";

const styles = (theme) => ({
  textContainer: {
    margin: "0 auto",
    paddingBottom: theme.spacing(4),
    maxWidth: "960px",
  },

  image: {
    width: "100%",
    maxHeight: "380px",

    [theme.breakpoints.up("sm")]: {
      height: "244px",
    },
    [theme.breakpoints.up("md")]: {
      height: "228px",
    },
  },
});

const Accommodation = () => {
  const {
    accommodation: {
      title,
      body: { body },
      images,
    },
  } = useTrujilloData();

  const classes = useClasses(styles);

  const textStyle = {
    rootStyle: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  };

  const textSectionStyle = {
    titleStyle: { textAlign: "center" },
    bodyStyle: { ...textStyle },
  };

  const groupOnePicture = getImage(images, "group 1");
  const groupTwoPicture = getImage(images, "group 2");
  const groupThreePicture = getImage(images, "group 3");

  return (
    <SectionWrapper>
      <Grid container>
        <Grid item xs={12} className={classes.textContainer}>
          <TextSection
            title={title}
            body={body}
            style={textSectionStyle}
            size="full"
          />
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={4}>
            <GatsbyImage
              className={classes.image}
              image={groupOnePicture.gatsbyImageData}
              alt={groupOnePicture.description}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <GatsbyImage
              className={classes.image}
              image={groupTwoPicture.gatsbyImageData}
              alt={groupTwoPicture.description}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <GatsbyImage
              className={classes.image}
              image={groupThreePicture.gatsbyImageData}
              alt={groupThreePicture.description}
            />
          </Grid>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default Accommodation;
