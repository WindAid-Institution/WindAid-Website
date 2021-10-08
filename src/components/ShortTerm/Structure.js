import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import TextSection from "shared/TextSection";
import useShortTermData from "queries/shortTerm";
import CustomCarousel from "../../shared/Carousel/CustomCarousel";
import SectionWrapper from "../../shared/SectionWrapper";

const useStyles = makeStyles((theme) => ({
  containerWrapper: {
    direction: "column",
  },
  carouselWrapper: {
    display: "flex",
    alignItems: "center",
    minWidth: "600px",
  },
  textSection: {
    marginTop: "36px",
  },
  carouselBox: {
    position: "relative",
    display: "flex",
    flexDirection: "column-reverse",
    minWidth: "600px",
    textAlign: "center",
    height: "500px",
    paddingTop: "10px",

    [theme.breakpoints.up("md")]: {
      height: "450px",
      alignItems: "center",
      display: "flex",
    },
  },
  image: {
    width: "100%",
    height: "100%",
  },
}));

const additionalStyle = {
  carouselContainerStyle: {
    height: "450px",
    width: "600px",
  },
};

const Structure = () => {
  const {
    structureCardsContent,
    structureImages: { images },
  } = useShortTermData();

  const classes = useStyles();
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const style = {
    sectionStyle: {
      paddingTop: "33px",
      paddingBottom: "33px",
      borderBottom: "3px solid",
      borderBottomColor: theme.palette.primary.main,
      background: isUpMd
        ? `linear-gradient(to right, ${theme.palette.secondary.dark} 50%, ${theme.palette.primary.main} 50%)`
        : `linear-gradient(to top, ${theme.palette.primary.main} 360px, ${theme.palette.secondary.dark} 360px)`,
    },
  };

  const textStyle = {
    subHeaderStyle: {
      textStyle: {
        color: theme.palette.primary.main,
      },
    },
  };

  const responsive = {
    any: {
      breakpoint: {
        max: 10000,
        min: 0,
      },
      items: 1,
    },
  };

  return (
    <SectionWrapper style={style}>
      <Grid container className={classes.containerWrapper}>
        <Grid item xs={12} md={5}>
          <TextSection title="Structure" />
          {structureCardsContent.map(({ title, header, body }) => (
            <Box key={title} className={classes.textSection}>
              <Typography variant="h6">{header}</Typography>
              <TextSection
                subHeader={title}
                body={body.body}
                style={textStyle}
              />
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} md={5} className={classes.carouselWrapper}>
          <Box className={classes.carouselBox}>
            <CustomCarousel
              responsive={responsive}
              arrows={false}
              style={additionalStyle}
              counterColor={theme.palette.secondary.main}
            >
              {images.map(({ gatsbyImageData, description }) => (
                <GatsbyImage
                  key={description}
                  image={gatsbyImageData}
                  alt={description}
                  className={classes.image}
                />
              ))}
            </CustomCarousel>
          </Box>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default Structure;
