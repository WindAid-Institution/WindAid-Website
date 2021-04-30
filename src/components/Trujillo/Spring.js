import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { getSrc } from "gatsby-plugin-image";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import PeruOutline from "images/Trujillo/peru.svg";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import useTrujilloData from "hooks/queries/trujillo";

const useStyles = makeStyles((theme) => ({
  backgroundFilter: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "70%",
    background:
      "linear-gradient(180deg, #fff 0%, #fff 50%, rgba(255,255,255,0) 100%)",
    zIndex: "1",
    transition: "height 0.2s ease",

    [theme.breakpoints.up("sm")]: {
      height: "50%",
      background:
        "linear-gradient(180deg, #fff 0%, #fff 40%, rgba(255,255,255,0) 100%)",
    },

    [theme.breakpoints.up("lg")]: {
      background:
        "linear-gradient(180deg, #fff 0%, #fff 45%, rgba(255,255,255,0) 100%)",
    },
  },

  contentContainer: {
    position: "relative",
    zIndex: 2,
  },

  header: {
    fontWeight: 600,
    fontSize: "30px",

    [theme.breakpoints.up("sm")]: {
      fontSize: "40px",
    },
  },

  imageContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",

    [theme.breakpoints.up("sm")]: {
      width: "calc(41.1vw + 160px)",
      justifyContent: "flex-end",
    },
    [theme.breakpoints.up("md")]: {
      width: "calc(30.4vw + 219px)",
    },
  },

  mapImage: {
    width: "230px",
    height: "204px",

    [theme.breakpoints.up("md")]: {
      width: "280px",
      height: "240px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "320px",
      height: "280px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "420px",
      height: "360px",
    },
  },
}));

const Spring = () => {
  const {
    spring: {
      header,
      title,
      body: { body },
      image,
    },
  } = useTrujilloData();

  const classes = useStyles();
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const sectionStyle = {
    height: "768px",

    [theme.breakpoints.up("sm")]: {
      height: "784px",
    },

    [theme.breakpoints.up("lg")]: {
      height: "880px",
    },
  };

  const imageSrc = getSrc(image);
  return (
    <SectionWrapper bgUrl={imageSrc} style={{ sectionStyle }}>
      <Box className={classes.contentContainer}>
        <TextSection title={title} body={body} size={isUpMd ? "md" : "lg"} />
        <Typography className={classes.header} variant="h5">
          {header}
        </Typography>
        <Box className={classes.imageContainer}>
          <img className={classes.mapImage} src={PeruOutline} alt="Peru map" />
        </Box>
      </Box>
      <Box className={classes.backgroundFilter} />
    </SectionWrapper>
  );
};

export default Spring;
