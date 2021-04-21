import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import useGeneralProgramData from "queries/generalProgram";

const useStyles = makeStyles((theme) => ({
  smallImageBox: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    margin: "auto",
    height: "calc(10vw + 200px)",
    "& div": {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "calc(10vw + 240px)",
      margin: 0,
      height: "auto",
    },
  },
  text: {
    paddingBottom: theme.spacing(2),
  },
  spacingRight: {
    [theme.breakpoints.up("md")]: {
      paddingRight: theme.spacing(1),
    },
  },
  spacingLeft: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(1),
    },
  },
  hideOnSm: {
    [theme.breakpoints.only("sm")]: {
      display: "none",
    },
  },
  img: {
    marginTop: theme.spacing(2),
    width: "100%",
    "& div": {
      width: "100%",
    },
  },
}));

const Overview = () => {
  const {
    overview: {
      header,
      title: textTitle,
      body: { body },
      bodyTwo: { bodyTwo },
      images,
    },
  } = useGeneralProgramData();

  const classes = useStyles();
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const groupOnePicture = images.find(({ title }) => title === "group 1");
  const groupTwoPicture = images.find(({ title }) => title === "group 2");
  const groupThreePicture = images.find(({ title }) => title === "group 3");

  return (
    <SectionWrapper>
      <Grid container justify="space-between">
        <Grid item className={classes.text} sm={12} md={8}>
          <TextSection
            header={header}
            title={textTitle}
            body={body}
            bodyTwo={bodyTwo}
            size={isUpMd ? "md" : "lg"}
          />
        </Grid>
        <Grid item sm={12} md={4} className={classes.smallImageBox}>
          <GatsbyImage
            image={groupOnePicture.gatsbyImageData}
            alt={groupOnePicture.description}
          />
        </Grid>
        <Grid
          item
          md={6}
          sm={0}
          className={clsx(classes.spacingRight, classes.img, classes.hideOnSm)}
        >
          <GatsbyImage
            image={groupTwoPicture.gatsbyImageData}
            alt={groupTwoPicture.description}
          />
        </Grid>
        <Grid
          item
          md={6}
          sm={12}
          className={clsx(classes.spacingLeft, classes.img)}
        >
          <GatsbyImage
            image={groupThreePicture.gatsbyImageData}
            alt={groupThreePicture.description}
          />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default Overview;
