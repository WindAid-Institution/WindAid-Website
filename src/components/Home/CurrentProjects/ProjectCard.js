import React from "react";
import { Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Card from "shared/Card";
import useHomepageData from "../../../hooks/queries/homepage";
import theme from "../../../../theme";

const useStyles = makeStyles(() => ({
  stats: {
    direction: "column",
  },
}));

const additionalStyle = {
  contentContainerStyle: {
    margin: "0px",
    [theme.breakpoints.up("sm")]: {
      width: "85%",
      margin: "8%",
    },
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
    image,
  } = data;

  const {
    householdImage: {
      file: { url: householdImageUrl },
    },
    windturbineImage: {
      file: { url: windturbineImageUrl },
    },
  } = useHomepageData();

  const imageText = {
    header,
    location,
    date,
  };

  return (
    <Card image={image} imageText={imageText} style={additionalStyle}>
      <>
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
      </>
    </Card>
  );
};

ProjectCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProjectCard;
