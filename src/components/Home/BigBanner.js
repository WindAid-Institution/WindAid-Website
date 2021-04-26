import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import useHomepageData from "src/hooks/queries/homepage";

const useStyles = makeStyles((theme) => ({
  root: { position: "relative", height: "100%", width: "100%" },
  picture: {
    height: "calc(19.7vw + 329px)",
    maxHeight: "613px",
    width: "100%",
    objectFit: "cover",
  },
  heading: {
    position: "absolute",
    top: "calc(4.17vw + 33px)",
    left: "calc(16.9vw - 45px)",
    color: theme.palette.secondary.main,
    fontSize: "calc(1.48vw + 18.7px)",
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: "calc(1.76vw + 28.7px)",
    width: "calc(48.1vw + 155px)",
  },
}));

const BigBanner = () => {
  const classes = useStyles();
  const theme = useTheme();
  const {
    hero: {
      title,
      image: { description, gatsbyImageData },
    },
  } = useHomepageData();

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.root}>
        <GatsbyImage
          image={gatsbyImageData}
          className={classes.picture}
          alt={description}
          backgroundColor={theme.palette.primary.main}
        />
        <Typography variant="h1" className={classes.heading}>
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default BigBanner;
