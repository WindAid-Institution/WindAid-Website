import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";

import TextSection from "shared/TextSection";
import useHomepageData from "../../../hooks/queries/homepage";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    direction: "row",
    width: "100%",
    margin: "0px",
    [theme.breakpoints.up("sm")]: {
      width: "85%",
      margin: "8%",
    },
    "&:hover": {
      boxShadow: "0px 0px 20px 3px #BDBDBD",
      "&:last-child > div:last-child > div:last-child": {
        fontWeight: "bold",
      },
    },
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
  textContainer: {
    direction: "row",
    border: "1px solid #BDBDBD",
    borderRadius: "0px 0px 10px 10px",
    padding: "16px",
    textAlign: "left",
    width: "100%",
  },
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

const ProjectCard = ({ data }) => {
  const classes = useStyles();
  const {
    header,
    location,
    date,
    status,
    body: { body },
    householdNumber,
    windturbineNumber,
    image: { gatsbyImageData, description },
  } = data;

  const {
    householdImage: {
      file: { url: householdImageUrl },
    },
    windturbineImage: {
      file: { url: windturbineImageUrl },
    },
  } = useHomepageData();

  return (
    <Grid container className={classes.contentContainer}>
      <Box className={classes.root}>
        <GatsbyImage
          image={gatsbyImageData}
          alt={description}
          className={classes.image}
        />
        <Box className={classes.imageText}>
          <Typography variant="h5" className={classes.text}>
            {header}
          </Typography>
          <Typography variant="h6" className={classes.text}>
            {location}
          </Typography>
          <Typography variant="subtitle1" className={classes.text}>
            {date}
          </Typography>
        </Box>
      </Box>
      <Grid container className={classes.textContainer}>
        <Grid item>
          <Typography variant="body1">
            <b>Status: </b>
            {status}
          </Typography>
          <Typography variant="body1">
            <b>About the community:</b>
          </Typography>
          <Typography variant="body1">{body}</Typography>
        </Grid>
        <Grid container className={classes.stats}>
          <Grid item xs={2}>
            <img src={householdImageUrl} alt="" />
          </Grid>
          <Grid item xs={9}>
            <Typography variant="body1">
              <b>Households affected:</b>
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="body1">{householdNumber}</Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.stats}>
          <Grid item xs={2}>
            <img src={windturbineImageUrl} alt="" />
          </Grid>
          <Grid item xs={9}>
            <Typography variant="body1">
              <b>Windturbine installed:</b>
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="body1">{windturbineNumber}</Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.textItem}>
          <TextSection body={"Find out more  &gt;"} style={{ bodyStyle }} />
        </Grid>
      </Grid>
    </Grid>
  );
};

ProjectCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProjectCard;
