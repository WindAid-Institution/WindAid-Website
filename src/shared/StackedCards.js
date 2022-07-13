import React from "react";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import useTheme from "@mui/material/styles/useTheme";
import useClasses from "../styles/useClasses";

import TextSection from "./TextSection";

const styles = ({ theme, contentContainerStyle, textContainerStyle }) => ({
  contentContainer: {
    direction: "column",
    marginTop: "calc(4.16vw + 17px)",
    borderRadius: "10px",
    "&:hover": {
      [theme.breakpoints.up("sm")]: {
        boxShadow: `0px 0px 30px 7px ${theme.palette.info.dark}`,
        transition: "0.3s ease",
        cursor: "pointer",
      },
      "&:last-child > div:last-child > div:last-child": {
        transition: "0.1s ease",
      },
    },
    ...contentContainerStyle,
  },
  root: {
    position: "relative",
    width: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: "10px 0px 0 10px",
    [theme.breakpoints.down("lg")]: {
      borderRadius: "10px 10px 0 0px",
    },
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
    borderRadius: "0px 10px 10px 0px",
    padding: "16px",
    textAlign: "left",
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down("lg")]: {
      borderRadius: "0px 0px 10px 10px",
    },
    ...textContainerStyle,
  },
  textItem: {
    alignSelf: "end",
    width: "100%",
  },
});

const StackedCards = ({ image, children, style }) => {
  const { textContainerStyle, contentContainerStyle } = style || {};
  const { gatsbyImageData, description } = image;
  const theme = useTheme();
  const updatedStyle = styles({
    theme,
    textContainerStyle,
    contentContainerStyle,
  });
  const classes = useClasses(updatedStyle);

  return (
    <Grid container className={classes.contentContainer}>
      <Grid item lg={4}>
        <GatsbyImage
          image={gatsbyImageData}
          alt={description}
          className={classes.image}
          objectFit="cover"
        />
      </Grid>
      <Grid item lg={8}>
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
    </Grid>
  );
};

StackedCards.propTypes = {
  image: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  style: PropTypes.object,
};

StackedCards.defaultProps = {
  style: {},
};

export default StackedCards;
