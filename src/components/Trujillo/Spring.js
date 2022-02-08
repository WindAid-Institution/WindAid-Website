import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PeruOutline from "images/Trujillo/peru.svg";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import useTrujilloData from "hooks/queries/trujillo";

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  header: {
    position: "absolute",
    top: "0",
    fontWeight: 600,
    fontSize: "30px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "40px",
      left: "0",
      padding: "inherit",
      marginLeft: "100px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "30px",
      top: "auto",
      bottom: "0",
      left: "0",
      padding: "0",
      marginLeft: "100px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "inherit",
      marginLeft: "150px",
    },
  },

  imageContainer: {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center",

    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end",
    },
  },

  mapImage: {
    padding: "10px",
    width: "80%",
    [theme.breakpoints.up("sm")]: {
      width: "40%",
      padding: "0",
    },
    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
  },
}));

const Spring = () => {
  const {
    spring: {
      header,
      title,
      body: { body },
    },
  } = useTrujilloData();

  const classes = useStyles();

  return (
    <SectionWrapper
      bgColor="secondary"
      style={{ containerStyle: { display: "flex", justifyContent: "center" } }}
    >
      <Grid container className={classes.containerStyle} spacing={6}>
        <Grid item xs={12} sm={11} md={6}>
          <TextSection title={title} body={body} />
        </Grid>
        <Grid item xs={12} sm={11} md={6} className={classes.imageContainer}>
          <img className={classes.mapImage} src={PeruOutline} alt="Peru map" />
          <Typography className={classes.header} variant="h5">
            {header}
          </Typography>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default Spring;
