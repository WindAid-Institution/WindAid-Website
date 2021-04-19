import React from "react";
import propTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import useLongTermData from "queries/longTerm";
import useWindowSize from "hooks/useWindowSize";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 0,

    [theme.breakpoints.up("sm")]: {
      paddingTop: "32px",
    },
  },
  smDownScreenImage: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  smUpScreenImage: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  item: {
    textAlign: "center",
  },

  image: {
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

const MovableImage = ({ image, additionalClass }) => {
  const classes = useStyles();

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      className={clsx(classes.item, additionalClass)}
    >
      <GatsbyImage
        image={image.gatsbyImageData}
        className={classes.image}
        alt={image.description}
      />
    </Grid>
  );
};

const ImagesWrapper = ({ children }) => {
  const {
    offering: { images },
  } = useLongTermData();

  const { width: windowWidth } = useWindowSize();
  const isMdScreen = windowWidth >= 960;

  const classes = useStyles();

  const groupOnePicture = images.find(({ title }) => title === "group 1");
  const groupTwoPicture = images.find(({ title }) => title === "group 2");
  const groupThreePicture = images.find(({ title }) => title === "group 3");
  console.log(images);
  console.log(groupTwoPicture);

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <MovableImage
          image={groupOnePicture}
          additionalClass={classes.smDownScreenImage}
        />
        <Grid item xs={12}>
          {children}
        </Grid>

        <MovableImage
          image={groupOnePicture}
          additionalClass={classes.smUpScreenImage}
        />
        <Grid item xs={12} sm={6} className={classes.item}>
          <GatsbyImage
            image={
              isMdScreen
                ? groupTwoPicture.gatsbyImageData
                : groupThreePicture.gatsbyImageData
            }
            className={classes.image}
            alt={
              isMdScreen
                ? groupTwoPicture.description
                : groupThreePicture.description
            }
          />
        </Grid>
        <Grid item xs={12} md={3} className={classes.item}>
          <GatsbyImage
            image={
              isMdScreen
                ? groupThreePicture.gatsbyImageData
                : groupTwoPicture.gatsbyImageData
            }
            className={classes.image}
            alt={
              isMdScreen
                ? groupThreePicture.description
                : groupTwoPicture.description
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};

ImagesWrapper.propTypes = {
  children: propTypes.node,
};
ImagesWrapper.defaultProps = {
  children: null,
};

MovableImage.propTypes = {
  image: propTypes.shape({
    gatsbyImageData: propTypes.object.isRequired,
    description: propTypes.string.isRequired,
  }).isRequired,
  additionalClass: propTypes.string.isRequired,
};

export default ImagesWrapper;
