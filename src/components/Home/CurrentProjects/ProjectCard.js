import React from "react";
import { Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Card from "shared/Card";
import theme from "../../../../theme";
import householdImage from "../../../shared/images/household.svg";
import windturbineImage from "../../../shared/images/windturbine.svg";

const useStyles = makeStyles(() => ({
  status: {
    marginBottom: "8px",
  },
  description: {
    marginBottom: "32px",
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

  const imageText = {
    header,
    location,
    date,
  };

  return (
    <Card image={image} imageText={imageText} style={additionalStyle}>
      <>
        <Grid item>
          <Typography variant="body1" className={classes.status}>
            <b>Status: </b>
            {status}
          </Typography>
          <Typography variant="body1">
            <b>About the community:</b>
          </Typography>
          <Typography variant="body1" className={classes.description}>
            {body}
          </Typography>
        </Grid>
        <Grid container className={classes.stats}>
          <Grid item xs={1}>
            <img src={householdImage} alt="household" />
          </Grid>
          <Grid item xs={9} lg={5}>
            <Typography variant="body1" className={classes.text}>
              Households affected:
            </Typography>
          </Grid>
          <Grid item xs={2} lg={3}>
            <Typography variant="body1" className={classes.number}>
              {householdNumber}
            </Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.stats}>
          <Grid item xs={1}>
            <img src={windturbineImage} alt="windturbine" />
          </Grid>
          <Grid item xs={9} lg={5}>
            <Typography variant="body1" className={classes.text}>
              Windturbine installed:
            </Typography>
          </Grid>
          <Grid item xs={2} lg={3}>
            <Typography variant="body1" className={classes.number}>
              {windturbineNumber}
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
