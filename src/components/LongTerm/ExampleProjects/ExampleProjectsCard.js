import React, { useState } from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

import Body from "shared/Body";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.secondary.main,
  },

  textContainer: {
    paddingTop: theme.spacing(2),

    [theme.breakpoints.up("md")]: {
      paddingTop: 0,
    },
  },

  image: {
    width: "100%",

    height: "236px",

    [theme.breakpoints.up("md")]: {
      height: "340px",
      width: "80%",
      paddingRight: theme.spacing(2),
    },
  },

  title: {
    fontSize: "18px",
    lineHeight: "24px",
    paddingBottom: "6px",

    "& > h5": {
      fontWeight: theme.typography.fontWeightBold,
    },

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
    paddingLeft: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      fontSize: "18px",
    },
  },

  leftAlign: {
    textAlign: "left",
  },

  rightAlign: {
    display: "flex",
    justifyContent: "flex-end",
  },

  boldFont: {
    fontWeight: theme.typography.fontWeightBold,
  },

  subText: {
    margin: "16px 6px 6px 0",
    alignSelf: "flex-end",
    fontWeight: theme.typography.fontWeightLight,
  },

  bodyTwo: {
    paddingTop: theme.spacing(2),
  },

  expand: {
    width: "100px",
    cursor: "pointer",

    " & > p": {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
}));

const ExampleProjectsCard = ({
  image,
  name,
  location,
  date,
  body,
  bodyTwo,
}) => {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  const toggleCard = () => {
    setIsCardExpanded((value) => !value);
  };
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={4}>
        <GatsbyImage
          image={image.gatsbyImageData}
          alt={image.description}
          className={classes.image}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid className={classes.textContainer} container spacing={1}>
          <Grid
            item
            xs={12}
            className={clsx(classes.leftAlign, classes.boldFont, classes.title)}
          >
            <Typography variant="h5" color="secondary">
              {name}
            </Typography>
          </Grid>
          <Grid item xs={12} className={(classes.leftAlign, classes.subTitle)}>
            <span className={classes.boldFont}>{location}</span>
            <span className={classes.date}>{date}</span>
          </Grid>
          <Grid item xs={12}>
            <Body
              style={{ textStyle: { color: theme.palette.secondary.main } }}
              body={body.text}
              size="auto"
            />
          </Grid>
        </Grid>
      </Grid>
      {isCardExpanded && (
        <Grid className={classes.bodyTwo} item xs={12}>
          <Body
            style={{ textStyle: { color: theme.palette.secondary.main } }}
            body={bodyTwo.text}
            size="auto"
          />
        </Grid>
      )}
      <Grid xs={12} item className={classes.rightAlign}>
        {bodyTwo.text && (
          <Box className={classes.expand} onClick={toggleCard}>
            <Typography color="secondary">
              {isCardExpanded ? "Read Less" : "Read More"}
            </Typography>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

ExampleProjectsCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }).isRequired,
  bodyTwo: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }),
  image: PropTypes.object.isRequired,
};

ExampleProjectsCard.defaultProps = {
  bodyTwo: {
    text: "",
  },
};

export default ExampleProjectsCard;
