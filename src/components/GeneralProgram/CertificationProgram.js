import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useTheme from "@mui/material/styles/useTheme";

import Title from "shared/Title";
import SectionWrapper from "shared/SectionWrapper";
import useGeneralProgramData from "queries/generalProgram";
import Level1Program from "./Level1Program";
import Level2Program from "./Level2Program";
import Level3Program from "./Level3Program";

const CertificationProgram = () => {
  const theme = useTheme();

  const classes = {
    wrapperBox: {
      [theme.breakpoints.up("sm")]: {
        marginBottom: theme.spacing(4),
      },
      [theme.breakpoints.up("lg")]: {
        marginBottom: 0,
      },
    },
    title: {
      textStyle: {
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          width: "85%",
        },
      },
    },
    titleBlack: {
      textStyle: {
        color: theme.palette.primary.dark,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          width: "85%",
        },
      },
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
  };

  const {
    volunteerMain: { titleOne, titleTwo },
  } = useGeneralProgramData();

  return (
    <Box sx={classes.wrapperBox}>
      <SectionWrapper
        style={{
          sectionStyle: { paddingBottom: theme.spacing(4), paddingTop: 0 },
        }}
      >
        <Title title={titleOne} style={classes.title} />
        <Title title={titleTwo} style={classes.titleBlack} />
      </SectionWrapper>
      <Box sx={{ ...classes.box, ...classes.mobileGreen }}>
        <Grid container sx={classes.background} justifyContent="space-between">
          <Grid
            item
            sx={{ ...classes.leftBackground, ...classes.backgroundGreen }}
          />
          <Grid
            item
            sx={{ ...classes.rightBackground, ...classes.backgroundBeige }}
          />
        </Grid>
        <Level1Program />
      </Box>
      <Box sx={{ ...classes.box, ...classes.mobileBeige }}>
        <Grid container sx={classes.background} justifyContent="space-between">
          <Grid
            item
            sx={{ ...classes.leftBackground, ...classes.backgroundBeige }}
          />
          <Grid
            item
            sx={{ ...classes.upperRightBackground, ...classes.backgroundGreen }}
          />
        </Grid>
        <Level2Program />
      </Box>
      <Box sx={{ ...classes.box, ...classes.mobileGreen }}>
        <Grid container sx={classes.background} justifyContent="space-between">
          <Grid
            item
            sx={{ ...classes.leftBackground, ...classes.backgroundGreen }}
          />
          <Grid
            item
            sx={{ ...classes.rightBackground, ...classes.backgroundBeige }}
          />
        </Grid>
        <Level3Program />
      </Box>
    </Box>
  );
};

export default CertificationProgram;
