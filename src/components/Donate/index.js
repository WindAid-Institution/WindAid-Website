import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { getSrc } from "gatsby-plugin-image";
import { useTheme } from "@mui/styles";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import useDonateData from "hooks/queries/donate";
import { getImage } from "src/utils/utils";
import useClasses from "../../styles/useClasses";

import DonateWidget from "./DonateWidget";

const styles = (theme) => ({
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
      height: "55   %",
      background:
        "linear-gradient(180deg, #fff 0%, #fff 40%, rgba(255,255,255,0) 100%)",
    },

    [theme.breakpoints.up("lg")]: {
      background:
        "linear-gradient(180deg, #fff 0%, #fff 50%, rgba(255,255,255,0) 100%)",
    },
  },

  textContainer: {
    "& > div > div > h3": {
      textAlign: "center",
      zIndex: 2,
      position: "relative",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      top: "-16px",

      "& > div > div > h3": {
        textAlign: "center",
      },
    },
  },
  donateWidgetContainer: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    zIndex: 2,
    marginTop: "50px",
    position: "relative",
    [theme.breakpoints.up("lg")]: {
      justifyContent: "end",
      marginTop: "0px",
    },
  },
});

const Donate = () => {
  const {
    donate: {
      title: textTitle,
      body: { body },
      images,
    },
  } = useDonateData();

  const classes = useClasses(styles);
  const theme = useTheme();

  const sectionStyle = {
    height: "auto",
    backgroundSize: "cover",
    backgroundPosition: "bottom",

    [theme.breakpoints.up("xl")]: {
      minHeight: "820px",
    },
  };

  const textSectionStyle = {
    bodyStyle: {
      textStyle: {
        textAlign: "center",
        zIndex: 2,
        position: "relative",
      },
    },
    titleStyle: {
      textStyle: {
        color: theme.palette.info.main,
      },
    },
  };

  const backgroundPicture = getImage(images, "donate-background");
  const bgImageSrc = getSrc(backgroundPicture);
  return (
    <SectionWrapper bgColor="secondary" bgUrl={bgImageSrc} style={sectionStyle}>
      <Grid container>
        <Grid item xs={12} lg={6} className={classes.textContainer}>
          <TextSection
            title={textTitle}
            body={body}
            style={textSectionStyle}
            size="full"
          />
        </Grid>
        <Grid item xs={12} lg={6} className={classes.donateWidgetContainer}>
          <DonateWidget />
        </Grid>
      </Grid>
      <Box className={classes.backgroundFilter} />
    </SectionWrapper>
  );
};

export default Donate;
