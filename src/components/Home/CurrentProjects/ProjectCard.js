import React from "react";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";

import TextSection from "shared/TextSection";

const useStyles = makeStyles(() => ({
  contentContainer: {
    direction: "column",
    width: "500px",
    "&:hover": {
      boxShadow: "0px 0px 35px 15px #BDBDBD",
      "&:last-child > div:last-child > div:last-child": {
        fontWeight: "bold",
      },
    },
  },
  image: {
    width: "100%",
  },
  textContainer: {
    height: "400px",
    direction: "column",
    border: "1px solid #BDBDBD",
    borderRadius: "0px 0px 10px 10px",
    padding: "16px",
  },
  paragraphItem: {},
  textItem: {
    alignSelf: "end",
    width: "100%",
  },
}));

const bodyStyle = {
  textStyle: {
    textAlign: "right",
    color: "#056839",
    // overflow: "hidden",
    // textOverflow: "ellipsis",
    // whiteSpace: "nowrap"
  },
};

const ProjectCard = ({ data }) => {
  const classes = useStyles();
  const {
    header,
    // location,
    // date,
    // status,
    body: { body },
    // householdNumber,
    // windturbineNumber,
    image: { gatsbyImageData, description },
  } = data;

  return (
    <Grid container spacing={4} className={classes.contentContainer}>
      <GatsbyImage
        image={gatsbyImageData}
        alt={description}
        className={classes.image}
      />
      <Grid container className={classes.textContainer}>
        <Grid item className={classes.paragraphItem}>
          <TextSection header={header} body={body} />
        </Grid>
        <Grid item className={classes.textItem}>
          <TextSection bodyTwo={"Find out more  &gt;"} style={{ bodyStyle }} />
        </Grid>
      </Grid>
    </Grid>
  );
};

ProjectCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProjectCard;
