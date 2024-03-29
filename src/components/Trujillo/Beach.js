import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { getSrc, GatsbyImage } from "gatsby-plugin-image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import BusIcon from "images/icons/bus.svg";
import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import useTrujilloData from "hooks/queries/trujillo";
import { getImage } from "src/utils/utils";

import ExploreCarousel from "./TrujilloCarousel/TrujilloCarousel";

const GridItem = ({ image, description }) => {
  const classes = {
    imageContainer: {
      display: "flex",
      justifyContent: "center",
    },
    image: {
      width: "100%",
      height: "100%",
      maxWidth: "500px",
    },
  };

  return (
    <Grid sx={classes.imageContainer} item xs={12} lg={4}>
      <GatsbyImage style={classes.image} image={image} alt={description} />
    </Grid>
  );
};

const Beach = () => {
  const {
    beach: {
      title: textTitle,
      header,
      body: { body },
      images,
    },
  } = useTrujilloData();
  const theme = useTheme();

  const classes = {
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
      "& > div > div > h3": {
        textAlign: "center",
      },

      [theme.breakpoints.up("lg")]: {
        "& > div > div > h3": {
          textAlign: "left",
        },
      },
    },

    subHeaderContainer: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      marginTop: theme.spacing(5),

      [theme.breakpoints.up("lg")]: {
        width: "calc(30.4vw + 219px)",
      },
    },

    subHeader: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: "16px",
      lineHeight: "28px",
      color: theme.palette.info.main,
      paddingLeft: theme.spacing(1),
      textAlign: "center",

      [theme.breakpoints.up("sm")]: {
        fontSize: "18px",
        lineHeight: "24px",
      },

      [theme.breakpoints.up("lg")]: {
        textAlign: "left",
      },
    },

    imagesContainer: {
      marginTop: theme.spacing(2),

      [theme.breakpoints.up("sm")]: {
        marginTop: theme.spacing(5),
      },
      [theme.breakpoints.up("lg")]: {
        marginTop: theme.spacing(8),
      },
    },
  };
  const isUpLg = useMediaQuery(theme.breakpoints.up("lg"));

  const sectionStyle = {
    height: "840px",

    [theme.breakpoints.up("sm")]: {
      height: "920px",
    },

    [theme.breakpoints.up("lg")]: {
      height: "880px",
    },
  };

  const textSectionStyle = {
    bodyStyle: {
      textStyle: {
        textAlign: isUpLg ? "left" : "center",
      },
    },

    titleStyle: {
      textStyle: {
        color: theme.palette.info.main,
      },
    },
  };

  const backgroundImage = getImage(images, "background-ocean");
  const pictures = images.filter(({ title }) => title.includes("group"));
  const imageSrc = getSrc(backgroundImage);

  return (
    <SectionWrapper bgUrl={imageSrc} style={{ sectionStyle }}>
      <Grid sx={classes.contentContainer} container>
        <Grid item xs={12}>
          <TextSection
            title={textTitle}
            body={body}
            style={textSectionStyle}
            size={isUpLg ? "lg" : "full"}
          />
        </Grid>

        <Grid item xs={12}>
          <Box sx={classes.subHeaderContainer}>
            <img style={classes.busIcon} src={BusIcon} alt="Bus sign" />
            <Typography sx={classes.subHeader} variant="h5">
              {header}
            </Typography>
          </Box>
        </Grid>
        <Grid sx={classes.imagesContainer} item xs={12}>
          <ExploreCarousel carouselImages={pictures} isBeachSection />
        </Grid>
      </Grid>
      <Box sx={classes.backgroundFilter} />
    </SectionWrapper>
  );
};

GridItem.propTypes = {
  image: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
};

export default Beach;
