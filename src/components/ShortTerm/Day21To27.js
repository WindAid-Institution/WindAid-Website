import React from "react";
import Grid from "@material-ui/core/Grid";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import useShortTermData from "queries/shortTerm";

const useStyles = makeStyles((theme) => ({
  item: {
    textAlign: "center",
  },

  rowOne: {
    paddingBottom: theme.spacing(2),
  },

  itemOne: {
    display: "none",
    paddingLeft: "24px !important",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    [theme.breakpoints.up("lg")]: {
      paddingLeft: "8px !important",
    },
  },

  itemTwo: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  higherPicture: {
    width: "100%",
    height: "310px",
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

const Day21To27 = () => {
  const {
    day21to27: {
      header,
      title,
      body: { body },
      images,
    },
  } = useShortTermData();

  const classes = useStyles();
  const theme = useTheme();

  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));

  const groupOnePicture = images.find((img) => img.title === "group 1");
  const groupTwoPicture = images.find((img) => img.title === "group 2");
  const groupThreePicture = images.find((img) => img.title === "group 3");
  const groupFourPicture = images.find((img) => img.title === "group 4");
  const groupFivePicture = images.find((img) => img.title === "group 5");

  return (
    <SectionWrapper>
      <Grid container>
        <Grid container spacing={2} className={classes.rowOne}>
          <Grid item xs={12} sm={6} md={6}>
            <TextSection
              header={header}
              title={title}
              body={body}
              size={isMdScreen ? "sm" : "lg"}
            />
          </Grid>
          <Grid
            item
            sm={6}
            lg={3}
            className={clsx(classes.item, classes.itemOne)}
          >
            <GatsbyImage
              image={groupOnePicture.gatsbyImageData}
              className={classes.higherPicture}
              alt={groupOnePicture.description}
            />
          </Grid>

          <Grid item lg={3} className={clsx(classes.item, classes.itemTwo)}>
            <GatsbyImage
              image={groupTwoPicture.gatsbyImageData}
              className={classes.higherPicture}
              alt={groupTwoPicture.description}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={3} className={classes.item}>
            <GatsbyImage
              image={groupThreePicture.gatsbyImageData}
              className={classes.picture}
              alt={groupThreePicture.description}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={6} className={classes.item}>
            <GatsbyImage
              image={groupFourPicture.gatsbyImageData}
              className={classes.picture}
              alt={groupFourPicture.description}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3} className={classes.item}>
            <GatsbyImage
              image={groupFivePicture.gatsbyImageData}
              className={classes.picture}
              alt={groupFivePicture.description}
            />
          </Grid>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};
export default Day21To27;
