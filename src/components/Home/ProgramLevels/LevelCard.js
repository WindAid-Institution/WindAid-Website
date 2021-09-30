import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";
import TextSection from "shared/TextSection";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    direction: "column",
    marginTop: "calc(4.16vw + 17px)",
    width: "100%",
    "&:hover": {
      boxShadow: "0px 0px 20px 3px #BDBDBD",
      "&:last-child > div:last-child > div:last-child": {
        fontWeight: "bold",
      },
    },
  },
  image: {
    width: "100%",
  },
  textContainer: {
    [theme.breakpoints.up("lg")]: {
      height: "650px",
    },
    direction: "column",
    border: "1px solid #BDBDBD",
    borderRadius: "0px 0px 10px 10px",
    padding: "16px",
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

const LevelCard = ({ header, title, body, image }) => {
  const { body: bodyContent } = body;

  const classes = useStyles();
  return (
    <Grid container className={classes.contentContainer}>
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className={classes.image}
      />
      <Grid container className={classes.textContainer}>
        <Grid item>
          <TextSection title={title} header={header} body={bodyContent} />
        </Grid>
        <Grid item className={classes.textItem}>
          <TextSection bodyTwo={"Find out more  &gt;"} style={{ bodyStyle }} />
        </Grid>
      </Grid>
    </Grid>
  );
};

LevelCard.propTypes = {
  header: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
};

export default LevelCard;
