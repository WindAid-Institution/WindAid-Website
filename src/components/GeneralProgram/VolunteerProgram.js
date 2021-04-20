import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";

import SectionWrapper from "shared/SectionWrapper";
import Title from "shared/Title";
import useGeneralProgramData from "queries/generalProgram";

import ShortTimeVolunteer from "./ShortTimeVolunteer";
import LongTimeVolunteer from "./LongTimeVolunteer";

const useStyles = makeStyles((theme) => ({
  title: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "85%",
    },
  },
  titleBlack: {
    color: theme.palette.primary.dark,
  },
  box: {
    position: "relative",
  },
  leftBackground: {
    height: "100%",
    left: 0,
    width: "calc(55% - 8px)",
  },
  backgroundGreen: {
    background: theme.palette.primary.main,
  },
  backgroundBeige: {
    background: theme.palette.secondary.dark,
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
    background: theme.palette.primary.main,
    [theme.breakpoints.up("md")]: {
      background: "none",
    },
  },
  mobileBeige: {
    background: theme.palette.secondary.dark,
    [theme.breakpoints.up("md")]: {
      background: "none",
    },
  },
}));

const VolunteerProgram = () => {
  const classes = useStyles();

  const {
    volunteerMain: { titleOne, titleTwo },
  } = useGeneralProgramData();

  return (
    <SectionWrapper>
      <Title title={titleOne} className={classes.title} size="lg" />
      <Title
        title={titleTwo}
        className={clsx(classes.title, classes.titleBlack)}
        size="lg"
      />

      <Box className={clsx(classes.box, classes.mobileBeige)}>
        <Grid container className={classes.background} justify="space-between">
          <Grid
            item
            className={clsx(classes.leftBackground, classes.backgroundBeige)}
          />
          <Grid
            item
            className={clsx(classes.rightBackground, classes.backgroundGreen)}
          />
        </Grid>
        <ShortTimeVolunteer />
      </Box>
      <Box className={clsx(classes.box, classes.mobileGreen)}>
        <Grid container className={classes.background} justify="space-between">
          <Grid
            item
            className={clsx(classes.leftBackground, classes.backgroundGreen)}
          />
          <Grid
            item
            className={clsx(classes.rightBackground, classes.backgroundBeige)}
          />
        </Grid>
        <LongTimeVolunteer />
      </Box>
    </SectionWrapper>
  );
};

export default VolunteerProgram;
