import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";
import useTheme from "@mui/material/styles/useTheme";

import TextSection from "./TextSection";

const useStyles = makeStyles(() => {
  const theme = useTheme();
  return {
    contentContainer: ({ contentContainerStyle }) => ({
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
    text: {
      color: theme.palette.secondary.main,
      textAlign: "left",
      padding: "0 16px",
    },
    textContainer: ({ textContainerStyle }) => ({
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
    }),
    textItem: {
      alignSelf: "end",
      width: "100%",
    },
  };
});

const Card = ({ image, imageText, children, style }) => {
  const { textContainerStyle, contentContainerStyle } = style || {};
  const { gatsbyImageData, description } = image;
  const classes = useStyles({ textContainerStyle, contentContainerStyle });
  const theme = useTheme();

  return (
    <Grid container className={classes.contentContainer}>
      <Box className={classes.imgContainer}>
        <GatsbyImage
          image={gatsbyImageData}
          alt={description}
          className={classes.image}
        />
      </Box>
      <Box className={classes.root}>
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
        <Grid className={classes.textItem}>
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
  );
};

Card.propTypes = {
  image: PropTypes.object.isRequired,
  imageText: PropTypes.object,
  children: PropTypes.object.isRequired,
  style: PropTypes.object,
};

Card.defaultProps = {
  style: {},
  imageText: undefined,
};

export default Card;
