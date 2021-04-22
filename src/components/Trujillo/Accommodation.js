import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { GatsbyImage } from "gatsby-plugin-image";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import useTrujilloData from "hooks/queries/trujillo";
import { getImage } from "src/utils/utils";

const useStyles = makeStyles((theme) => ({
  textContainer: {
    margin: "0 auto",
    paddingBottom: theme.spacing(4),
    maxWidth: "960px",
  },

  image: {
    width: "100%",
    maxHeight: "380px",
  },
}));

const Accommodation = () => {
  const {
    accommodation: {
      title,
      body: { body },
      images,
    },
  } = useTrujilloData();

  const classes = useStyles();

  const textStyle = {
    textStyle: {
      textAlign: "center",
    },
  };

  const textSectionStyle = {
    titleStyle: { ...textStyle },
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
