import React from "react";
import { Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";

import Card from "shared/Card";
import theme from "../../../../theme";
import householdImage from "../../../images/household.svg";
import windturbineImage from "../../../images/windturbine.svg";

const additionalStyle = {
  contentContainerStyle: {
    margin: "0px",
    [theme.breakpoints.up("sm")]: {
      width: "95%",
      margin: "5%",
    },
  },
};

const ProjectCard = ({ data }) => {
  const classes = {
    status: {
      marginBottom: "8px",
    },
    description: {
      marginBottom: "32px",
      display: "-webkit-box",
      overflow: "hidden",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 3,
    },
    stats: {
      direction: "column",
      justifyContent: "flex-start",
    },
    text: {
      textAlign: "left",
      fontWeight: "bold",
      paddingLeft: "8px",
    },
    number: {
      textAlign: "center",
    },
  };
  const {
    header,
    urlSlug,
    location,
    date,
    status,
    body: { body },
    householdNumber,
    windturbineNumber,
    windturbineTotalNumber,
    image,
  } = data;

  const imageText = {
    header,
    location,
    date,
  };

  return (
    <Card
      image={image}
      imageText={imageText}
      urlSlug={urlSlug}
      style={additionalStyle}
    >
      <>
        <Grid item>
          <Typography variant="body1" sx={classes.status}>
            <b>Status: </b>
            {status}
          </Typography>
          <Typography variant="body1">
            <b>About the community:</b>
          </Typography>
          <Typography variant="body1" sx={classes.description}>
            {body}
          </Typography>
        </Grid>
        <Grid container sx={classes.stats}>
          <Grid item xs={1}>
            <img src={householdImage} alt="household" />
          </Grid>
          <Grid item xs={9} lg={5}>
            <Typography variant="body1" sx={classes.text}>
              Households affected:
            </Typography>
          </Grid>
          <Grid item xs={2} lg={3}>
            <Typography variant="body1" sx={classes.number}>
              {householdNumber}
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={classes.stats}>
          <Grid item xs={1}>
            <img src={windturbineImage} alt="windturbine" />
          </Grid>
          <Grid item xs={9} lg={5}>
            <Typography variant="body1" sx={classes.text}>
              Windturbine installed:
            </Typography>
          </Grid>
          <Grid item xs={2} lg={3}>
            <Typography variant="body1" sx={classes.number}>
              {windturbineNumber} / {windturbineTotalNumber}
            </Typography>
          </Grid>
        </Grid>
      </>
    </Card>
  );
};

ProjectCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProjectCard;
