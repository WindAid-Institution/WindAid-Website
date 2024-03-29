import React from "react";
import { Link } from "gatsby";
import { Grid, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import useTheme from "@mui/material/styles/useTheme";

import TextSection from "./TextSection";

const Card = ({ image, imageText, urlSlug, children, style }) => {
  const { textContainerStyle, contentContainerStyle } = style || {};
  const { gatsbyImageData, description } = image;
  const theme = useTheme();
  const classes = {
    contentContainer: {
      direction: "row",
      marginTop: "calc(4.16vw + 17px)",
      borderRadius: "10px",
      "&:hover": {
        [theme.breakpoints.up("sm")]: {
          boxShadow: `0px 0px 30px 7px ${theme.palette.info.dark}`,
        },
        "&:last-child > div:last-child > div:last-child": {
          fontWeight: "bold",
        },
      },
      ...contentContainerStyle,
    },
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
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      position: "absolute",
      left: "0",
      bottom: "0",
      width: "100%",
      padding: "16px 0",
    },
    imgContainer: {
      height: "350px",
    },
    link: {
      textDecoration: "none",
      color: theme.palette.primary.dark,
    },
    text: {
      color: theme.palette.secondary.main,
      textAlign: "left",
      padding: "0 16px",
    },
    textContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      border: `1px solid ${theme.palette.info.dark}`,
      borderRadius: "0px 0px 10px 10px",
      padding: "16px",
      textAlign: "left",
      width: "100%",
      backgroundColor: theme.palette.secondary.main,
      ...textContainerStyle,
    },
    textItem: {
      alignSelf: "end",
      width: "100%",
    },
  };
  return (
    <Link to={`/projects/${urlSlug}`} style={classes.link}>
      <Grid container sx={classes.contentContainer}>
        <Box sx={classes.imgContainer}>
          <GatsbyImage
            image={gatsbyImageData}
            alt={description}
            style={classes.image}
          />
        </Box>
        <Box sx={classes.root}>
          {imageText && (
            <Box sx={classes.imageText}>
              <Typography variant="h5" sx={classes.text}>
                {imageText.header}
              </Typography>
              <Typography variant="h6" sx={classes.text}>
                {imageText.location}
              </Typography>
              <Typography variant="subtitle1" sx={classes.text}>
                {imageText.date}
              </Typography>
            </Box>
          )}
        </Box>
        <Grid container sx={classes.textContainer}>
          {children}
          <Grid sx={classes.textItem}>
            <TextSection
              body={"Find out more &gt;"}
              style={{
                bodyStyle: {
                  textStyle: {
                    textAlign: "right",
                    color: theme.palette.primary.main,
                  },
                },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Link>
  );
};

Card.propTypes = {
  image: PropTypes.object.isRequired,
  imageText: PropTypes.object,
  urlSlug: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  style: PropTypes.object,
};

Card.defaultProps = {
  style: {},
  imageText: undefined,
};

export default Card;
