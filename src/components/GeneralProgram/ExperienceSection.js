import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import useGeneralProgramData from "queries/generalProgram";
import { getImage } from "src/utils/utils";

const useStyles = makeStyles((theme) => ({
  img: {
    minHeight: "230px",
    width: "100%",
  },

  imagesContainer: {
    marginTop: theme.spacing(2),

    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(3),
    },
  },
}));

const ExperienceSection = () => {
  const {
    experience: {
      title: textTitle,
      body: { body },
      bodyTwo: { bodyTwo },
      images,
    },
  } = useGeneralProgramData();

  const groupOnePicture = getImage(images, "group 1");
  const groupTwoPicture = getImage(images, "group 2");

  const classes = useStyles();

  return (
    <SectionWrapper>
      <TextSection title={textTitle} body={body} bodyTwo={bodyTwo} size="lg" />
      <Grid className={classes.imagesContainer} container spacing={2}>
        <Grid item md={6} sm={6} xs={12}>
          <GatsbyImage
            image={groupOnePicture.gatsbyImageData}
            alt={groupOnePicture.description}
            className={classes.img}
          />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <GatsbyImage
            image={groupTwoPicture.gatsbyImageData}
            alt={groupTwoPicture.description}
            className={classes.img}
          />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default ExperienceSection;
