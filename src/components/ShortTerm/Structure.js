import React from "react";
import { Grid, Box } from "@material-ui/core";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";

import TextSection from "shared/TextSection";
import useShortTermData from "queries/shortTerm";
import CustomCarousel from "../../shared/Carousel/CustomCarousel";

const useStyles = makeStyles((theme) => ({
  root: {
    direction: "column",
    backgroundColor: theme.palette.secondary.dark,
  },
  textBox: {
    borderBottom: "3px solid",
    borderBottomColor: theme.palette.primary.main,
    // paddingLeft: "calc(12.71vw - 39px)",
    // [theme.breakpoints.up("md")]: {
    //   left: "calc(12.6vw - 87px)",
    // },
  },
  carouselBox: {
    // paddingRight: "calc(12.71vw - 39px)",
    width: "100%",
    // justifyContent: "center",
    // display: "flex",
    backgroundColor: theme.palette.primary.main,
    textAlign: "center",
    height: "360px",
    paddingTop: "10px",
    [theme.breakpoints.up("sm")]: {
      height: "360px",
    },
    [theme.breakpoints.up("md")]: {
      height: "100%",
      alignItems: "center",
      display: "flex",
    },
  },
  image: {
    width: "90%",
    height: "90%",
    [theme.breakpoints.up("sm")]: {
      width: "80%",
    },
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
    <Grid container className={classes.root}>
      <Grid item xs={12} md={6}>
        <Box className={classes.textBox}>
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
  );
};

export default Structure;
