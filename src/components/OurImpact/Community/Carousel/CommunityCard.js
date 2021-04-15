import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { GatsbyImage } from "gatsby-plugin-image";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: theme.palette.secondary.dark,
    "-webkit-touch-callout": "none",
    "-webkit-user-select": "none",
    "-khtml-user-select": "none",
    "-moz-user-select": "none",
    "-ms-user-select": "none",
    "user-select": "none",
    cursor: "pointer",
  },
  imageContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.primary.main,
    height: "236px",
    padding: "8px",

    [theme.breakpoints.up("md")]: {
      height: "340px",
      width: "33%",
      padding: "16px",
    },

    [theme.breakpoints.up("lg")]: {
      height: "308px",
    },
  },

  image: {
    width: "100%",
    height: "100%",
  },

  contentContainer: {
    width: "100%",
    padding: "16px",
    position: "relative",
    height: "fit-content",
    fontStyle: "normal",
    fontFamily: "Open Sans",
    transition: "height 0.2s ease",

    [theme.breakpoints.up("md")]: {
      height: "280px",
      width: "66%",
    },

    [theme.breakpoints.up("lg")]: {
      height: "308px",
    },
  },

  textContainer: {
    fontSize: "14px",
    lineHeight: "28px",

    [theme.breakpoints.up("md")]: {
      fontSize: "16px",
    },
  },

  title: {
    fontSize: "18px",
    lineHeight: "24px",
    paddingBottom: "6px",

    [theme.breakpoints.up("md")]: {
      fontSize: "24px",
      lineHeight: "36px",
    },
  },

  subTitle: {
    fontSize: "16px",
    lineHeight: "24px",

    [theme.breakpoints.up("md")]: {
      fontSize: "18px",
    },
  },

  date: {
    fontSize: "16px",
    lineHeight: "24px",

    [theme.breakpoints.up("md")]: {
      fontSize: "18px",
    },
  },

  leftAlign: {
    textAlign: "left",
  },
  rightAlign: {
    textAlign: "right",
  },
  boldFont: {
    fontWeight: theme.typography.fontWeightBold,
  },

  thinFont: {
    fontWeight: theme.typography.fontWeightLight,
  },

  marginTop: {
    marginTop: "16px",
  },

  subText: {
    margin: "16px 6px 6px 0",
    alignSelf: "flex-end",
    fontWeight: theme.typography.fontWeightLight,
  },
}));

const CommunityCard = ({
  name,
  location,
  date,
  body,
  additionalText,
  image,
}) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid container className={classes.imageContainer}>
        <GatsbyImage
          image={image.gatsbyImageData}
          alt={name}
          className={classes.image}
        />
      </Grid>

      <Grid className={classes.contentContainer} container>
        <Grid
          item
          xs={12}
          className={clsx(classes.leftAlign, classes.boldFont, classes.title)}
        >
          {name}
        </Grid>
        <Grid container>
          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            className={(classes.leftAlign, classes.boldFont, classes.subTitle)}
          >
            {location}
          </Grid>
          <Grid
            item
            xs={6}
            sm={8}
            md={9}
            className={clsx(classes.leftAlign, classes.date)}
          >
            {date}
          </Grid>
        </Grid>
        <Grid item container className={classes.textContainer}>
          <Grid
            item
            xs={12}
            className={clsx(classes.leftAlign, classes.marginTop)}
          >
            {body.text}
          </Grid>
          <Grid
            item
            xs={12}
            className={clsx(classes.rightAlign, classes.subText)}
          >
            <i>{additionalText}</i>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

CommunityCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }).isRequired,
  additionalText: PropTypes.string,
  image: PropTypes.object.isRequired,
};

CommunityCard.defaultProps = {
  additionalText: "",
};

export default CommunityCard;
