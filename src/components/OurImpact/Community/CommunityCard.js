import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    background: "#056839",
    height: "236px",
    padding: "8px",
  },

  textContainer: {
    background: "#FFF9F5",
    padding: "16px",
  },

  leftAlign: {
    textAlign: "left",
  },
  rightAlign: {
    textAlign: "right",
  },
  bold: {
    fontWeight: 700,
  },
}));

const CommunityCard = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={4} className={classes.imageContainer}>
        <div styles={{ background: "blue", width: "90%", heigh: "90%" }} />
      </Grid>

      <Grid xs={12} md={8} className={classes.textContainer} container>
        <Grid item xs={12} className={(classes.leftAlign, classes.bold)}>
          David Garcia
        </Grid>
        <Grid container>
          <Grid
            item
            xs={6}
            md={3}
            className={(classes.leftAlign, classes.bold)}
          >
            Nueva Manzanilla
          </Grid>
          <Grid item xs={6} md={9} className={classes.leftAlign}>
            September 2018
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.leftAlign}>
          “In the mountains it can get really dark. I am extremely grateful for
          the installation of the wind turbine because this means my family and
          the rest of the community has light. Light is important for our safety
          and well being. I can work in later hours and still manage to arrive
          home safely.”
        </Grid>
        <Grid item xs={12} className={classes.rightAlign}>
          - Translated from spanish
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CommunityCard;
