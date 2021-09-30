import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";

import TextSection from "./TextSection";

const useStyles = makeStyles((theme) => ({
  contentContainer: ({ contentContainerStyle }) => ({
    direction: "row",
    width: "100%",
    marginTop: "calc(4.16vw + 17px)",
    "&:hover": {
      boxShadow: "0px 0px 20px 3px #BDBDBD",
      "&:last-child > div:last-child > div:last-child": {
        fontWeight: "bold",
      },
    },
    ...contentContainerStyle,
  }),
  root: {
    position: "relative",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: "10px 10px 0 0",
  },
  imageText: {
    backgroundColor: theme.palette.primary.dark,
    opacity: "0.6",
    position: "absolute",
    left: "0",
    bottom: "0",
    width: "100%",
    padding: "16px 0",
  },
  text: {
    color: theme.palette.secondary.main,
    textAlign: "left",
    padding: "0 16px",
  },
  textContainer: ({ textContainerStyle }) => ({
    direction: "row",
    border: "1px solid #BDBDBD",
    borderRadius: "0px 0px 10px 10px",
    padding: "16px",
    textAlign: "left",
    width: "100%",
    ...textContainerStyle,
  }),
  stats: {
    direction: "column",
  },
  textItem: {
    alignSelf: "end",
    width: "100%",
  },
}));

const bodyStyle = {
  textStyle: {
    textAlign: "right",
    color: "#056839",
  },
};

const Card = ({ image, imageText, children, style }) => {
  const { textContainerStyle, contentContainerStyle } = style || {};
  const classes = useStyles({ textContainerStyle, contentContainerStyle });
  const { gatsbyImageData, description } = image;

  return (
    <Grid container className={classes.contentContainer}>
      <Box className={classes.root}>
        <GatsbyImage
          image={gatsbyImageData}
          alt={description}
          className={classes.image}
        />
        {imageText && (
          <Box className={classes.imageText}>
            <Typography variant="h5" className={classes.text}>
              {imageText.header}
            </Typography>
            <Typography variant="h6" className={classes.text}>
              {imageText.location}
            </Typography>
            <Typography variant="subtitle1" className={classes.text}>
              {imageText.date}
            </Typography>
          </Box>
        )}
      </Box>
      <Grid container className={classes.textContainer}>
        {children}
        <Grid item className={classes.textItem}>
          <TextSection body={"Find out more  &gt;"} style={{ bodyStyle }} />
        </Grid>
      </Grid>
    </Grid>
  );
};

Card.propTypes = {
  image: PropTypes.object.isRequired,
  imageText: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  style: PropTypes.object,
};

Card.defaultProps = {
  style: {},
};

export default Card;
