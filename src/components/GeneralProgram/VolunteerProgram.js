import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";

import Title from "shared/Title";
import SectionWrapper from "shared/SectionWrapper";
import ShortTimeVolunteer from "./ShortTimeVolunteer";
import LongTimeVolunteer from "./LongTimeVolunteer";

const sectionData = {
  title1: "We offer two types of volunteer program:",
  title2: "Short-term & Long-term volunteer opportunities",
};

const useStyles = makeStyles((theme) => ({
  wrapperBox: {
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: theme.spacing(6),
    },
  },
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
    background: theme.palette.primary.main,
  },
  backgroundBeige: {
    background: theme.palette.secondary.dark,
  },
  upperRightBackground: {
    height: "100%",
    width: "0",
    [theme.breakpoints.up("md")]: {
      right: 0,
      width: "calc(42% - 8px)",
    },
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
  const theme = useTheme();

  return (
    <Box className={classes.wrapperBox}>
      <SectionWrapper
        style={{
          sectionStyle: { paddingBottom: theme.spacing(4), paddingTop: 0 },
        }}
      >
        <Title title={sectionData.title1} className={classes.title} />
        <Title
          title={sectionData.title2}
          style={{ textStyle: { color: theme.palette.primary.dark } }}
          className={clsx(classes.title, classes.titleBlack)}
        />
      </SectionWrapper>
      <Box className={clsx(classes.box, classes.mobileBeige)}>
        <Grid
          container
          className={classes.background}
          justifyContent="space-between"
        >
          <Grid
            item
            className={clsx(classes.leftBackground, classes.backgroundBeige)}
          />
          <Grid
            item
            className={clsx(
              classes.upperRightBackground,
              classes.backgroundGreen
            )}
          />
        </Grid>
        <ShortTimeVolunteer />
      </Box>
      <Box className={clsx(classes.box, classes.mobileGreen)}>
        <Grid
          container
          className={classes.background}
          justifyContent="space-between"
        >
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
    </Box>
  );
};

export default VolunteerProgram;
