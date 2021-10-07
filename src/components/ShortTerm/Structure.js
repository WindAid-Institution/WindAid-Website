import React from "react";
import { Grid, Box } from "@material-ui/core";
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
  carouselBox: {
    width: "100%",
    textAlign: "center",
    height: "360px",
    paddingTop: "10px",
    [theme.breakpoints.up("md")]: {
      height: "100%",
      alignItems: "center",
      display: "flex",
    },
  },
  image: {
    width: "100%",
    height: "90%",
  },
}));

const additionalStyle = {
  carouselContainerStyle: {
    // height: "230px",
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
      paddingTop: "0",
      paddingBottom: "0",
      borderBottom: "3px solid",
      borderBottomColor: theme.palette.primary.main,
      background: isUpMd
        ? `linear-gradient(to right, ${theme.palette.secondary.dark} 50%, ${theme.palette.primary.main} 50%)`
        : `linear-gradient(to top, ${theme.palette.primary.main} 360px, ${theme.palette.secondary.dark} 360px)`,
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
        <Grid item xs={12} md={6}>
          <Box>
            <TextSection title="Structure" />
            {structureCardsContent.map(({ title, header, body }) => (
              <TextSection
                key={title}
                title={title}
                header={header}
                body={body.body}
              />
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className={classes.carouselBox}>
            <CustomCarousel
              responsive={responsive}
              arrows={false}
              style={additionalStyle}
              counterColor="white"
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
