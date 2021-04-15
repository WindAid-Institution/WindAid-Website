import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Title from "../../shared/Title/Title";
import ShortTimeVolunteer from "./ShortTimeVolunteer";
import LongTimeVolunteer from "./LongTimeVolunteer";

const sectionData = {
  title1: "We offer two types of volunteer program:",
  title2: "Short-term & Long-term volunteer opportunities",
};

const useStyles = makeStyles((theme) => ({
  title: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "85%",
    },
  },
  titleBlack: {
    color: "#000",
  },
  box: {
    position: "relative",
  },
  wrapper: {
    margin: "auto",
    height: "auto",
  },
  leftBackground: {
    height: "100%",
    left: 0,
    width: "calc(55% - 8px)",
  },
  backgroundGreen: {
    background: "#056839",
  },
  backgroundBeige: {
    background: "#FFF9F5",
  },
  rightBackground: {
    height: "100%",
    width: "0",
    [theme.breakpoints.up("md")]: {
      right: 0,
      width: "calc(45% - 8px)",
    },
  },
  background: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      position: "absolute",
      height: "100%",
    },
  },
  mobileGreen: {
    background: "#056839",
    [theme.breakpoints.up("md")]: {
      background: "none",
    },
  },
  mobileBeige: {
    background: "#FFF9F5",
    [theme.breakpoints.up("md")]: {
      background: "none",
    },
  },
}));

const VolunteerProgram = () => {
  const classes = useStyles();

  return (
    <Box component="section">
      <Box className={`container ${classes.wrapper}`}>
        <Title title={sectionData.title1} className={classes.title} />
        <Title
          title={sectionData.title2}
          className={`${classes.title} ${classes.titleBlack}`}
        />
      </Box>
      <Box className={`${classes.box} ${classes.mobileBeige}`}>
        <Grid container className={classes.background} justify="space-between">
          <Grid
            item
            className={`${classes.leftBackground} ${classes.backgroundBeige}`}
          />
          <Grid
            item
            className={`${classes.rightBackground} ${classes.backgroundGreen}`}
          />
        </Grid>
        <ShortTimeVolunteer />
      </Box>
      <Box className={`${classes.box} ${classes.mobileGreen}`}>
        <Grid container className={classes.background} justify="space-between">
          <Grid
            item
            className={`${classes.leftBackground} ${classes.backgroundGreen}`}
          />
          <Grid
            item
            className={`${classes.rightBackground} ${classes.backgroundBeige}`}
          />
        </Grid>
        <LongTimeVolunteer />
      </Box>
    </Box>
  );
};

export default VolunteerProgram;
