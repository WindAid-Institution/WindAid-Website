import React from "react";
import Grid from "@material-ui/core/Grid";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import useShortTermData from "queries/shortTerm";
import { getImage } from "src/utils/utils";

const useStyles = makeStyles((theme) => ({
  imagesContainer: {
    paddingTop: theme.spacing(2),

    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(3),
    },
  },
  item: {
    textAlign: "center",
  },

  picture: {
    width: "328px",
    height: "200px",

    [theme.breakpoints.up("xs")]: {
      width: "calc(0.258 * 100vw + 235px)",
      height: "calc(0.25 * 100vw + 110px)",
    },

    [theme.breakpoints.up("sm")]: {
      width: "100%",
      height: "260px",
    },
  },
}));

const Day1To3 = () => {
  const {
    day1to3: {
      header,
      title,
      body: { body },
      images,
    },
  } = useShortTermData();

  const classes = useStyles();

  const groupOnePicture = getImage(images, "group 1");
  const groupTwoPicture = getImage(images, "group 2");
  const groupThreePicture = getImage(images, "group 3");

  return (
    <SectionWrapper>
      <TextSection header={header} title={title} body={body} size="lg" />
      <Grid container spacing={2} className={classes.imagesContainer}>
        <Grid item xs={12} sm={4} className={classes.item}>
          <GatsbyImage
            image={groupOnePicture.gatsbyImageData}
            className={classes.picture}
            alt={groupOnePicture.description}
          />
        </Grid>

        <Grid item xs={12} sm={4} className={classes.item}>
          <GatsbyImage
            image={groupTwoPicture.gatsbyImageData}
            className={classes.picture}
            alt={groupTwoPicture.description}
          />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.item}>
          <GatsbyImage
            image={groupThreePicture.gatsbyImageData}
            className={classes.picture}
            alt={groupThreePicture.description}
          />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};
export default Day1To3;
