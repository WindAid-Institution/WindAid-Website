import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import useOurImpactData from "queries/ourImpact";
import Body from "shared/Body";
import { getImage } from "src/utils/utils";
import useClasses from "../../../styles/useClasses";

const styles = (theme) => ({
  root: {
    paddingTop: 0,

    [theme.breakpoints.up("sm")]: {
      paddingTop: "32px",
    },
  },
  item: {
    textAlign: "center",
  },

  textItem: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
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
});

const ImagesWithText = () => {
  const classes = useClasses(styles);

  const {
    whoWereServing: {
      images,
      bodyTwo: { bodyTwo },
    },
  } = useOurImpactData();

  const groupOnePicture = getImage(images, "group 1");
  const groupTwoPicture = getImage(images, "group 2");
  const groupThreePicture = getImage(images, "group 3");
  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} className={classes.item}>
          <GatsbyImage
            image={groupOnePicture.gatsbyImageData}
            className={classes.picture}
            alt={groupOnePicture.description}
          />
        </Grid>
        <Grid item xs={12} className={classes.textItem}>
          <Body body={bodyTwo} size="lg" />
        </Grid>

        <Grid item xs={12} sm={6} md={4} className={classes.item}>
          <GatsbyImage
            image={groupTwoPicture.gatsbyImageData}
            className={classes.picture}
            alt={groupTwoPicture.description}
          />
        </Grid>
        <Grid item xs={12} md={4} className={classes.item}>
          <GatsbyImage
            image={groupThreePicture.gatsbyImageData}
            className={classes.picture}
            alt={groupThreePicture.description}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImagesWithText;
