import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "shared/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },

  container: {
    height: "708px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      height: "336px",
    },
    [theme.breakpoints.up("md")]: {
      height: "360px",
    },
  },

  groupOne: {
    width: "260px",
    height: "210px",
    margin: "0 0 16px 0",
    objectPosition: "50% 30%",
    objectFit: "cover",

    [theme.breakpoints.up("sm")]: {
      width: "170px",
      height: "260px",
      margin: 0,
    },

    [theme.breakpoints.up("xmd")]: {
      width: "232px",
    },

    [theme.breakpoints.up("lg")]: {
      width: "272px",
      height: "304px",
    },
  },
  groupTwo: {
    width: "260px",
    height: "210px",
    margin: "0 0 16px 0",
    objectFit: "cover",

    [theme.breakpoints.up("sm")]: {
      width: "170px",
      height: "260px",
      margin: "0 8px",
    },

    [theme.breakpoints.up("xmd")]: {
      width: "232px",
    },

    [theme.breakpoints.up("lg")]: {
      width: "560px",
      height: "304px",
      marginLeft: "16px",
    },
  },
  groupThree: {
    width: "260px",
    height: "210px",
    objectPosition: "50% 25%",
    objectFit: "cover",

    [theme.breakpoints.up("sm")]: {
      width: "170px",
      height: "260px",
    },

    [theme.breakpoints.up("xmd")]: {
      width: "232px",
    },

    [theme.breakpoints.up("lg")]: {
      width: "272px",
      height: "304px",
    },
  },
}));

const MissionImages = ({ imagesData }) => {
  const classes = useStyles();

  const imageClasses = {
    0: classes.groupOne,
    1: classes.groupTwo,
    2: classes.groupThree,
  };

  return (
    <Grid
      container
      className={classes.root}
      alignItems="center"
      justify="center"
    >
      <Container>
        <Grid className={classes.container}>
          {imagesData.map(({ title, description, gatsbyImageData }, index) => (
            <GatsbyImage
              image={gatsbyImageData}
              className={imageClasses[index]}
              alt={description}
              key={title}
            />
          ))}
        </Grid>
      </Container>
    </Grid>
  );
};

MissionImages.propTypes = {
  imagesData: PropTypes.array.isRequired,
};

export default MissionImages;
