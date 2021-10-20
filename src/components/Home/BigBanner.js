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
    maxHeight: "850px",
    width: "100%",
    objectFit: "cover",
  },
  textField: {
    position: "absolute",
    top: "calc(7.7vw + 89.3px)",
    padding: "0px 34px",
    [theme.breakpoints.up("sm")]: {
      padding: "0px 54px",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "0 calc(12.6vw - 75px)",
    },
  },
  heading: {
    color: theme.palette.secondary.main,
    fontSize: "calc(1.48vw + 18.7px)",
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: "calc(1.76vw + 28.7px)",
    width: "calc(20.74vw + 201.33px)",
  },
  subtitle: {
    color: theme.palette.secondary.main,
    fontSize: "calc(0.37vw + 12.7px)",
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: "calc(0.09vw + 27.7px)",
    width: "calc(20.74vw + 201.33px)",
    margin: "8px 0px",
  },
}));

const BigBanner = () => {
  const classes = useStyles();
  const theme = useTheme();
  const {
    hero: {
      title,
      subtitle,
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
        <Grid item className={classes.textField}>
          <Typography align="justify" variant="h1" className={classes.heading}>
            {title}
          </Typography>
          <Typography
            align="justify"
            variant="subtitle1"
            className={classes.subtitle}
          >
            {subtitle}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BigBanner;
