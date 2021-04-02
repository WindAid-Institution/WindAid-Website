import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles"
import Title from "../../shared/Title/Title";
import Body from "../../shared/Body/Body";
import Turbine from "../../images/LandingPage/Statistics/WindTurbine.svg";
import Book from "../../images/LandingPage/Statistics/Book.svg";
import House from "../../images/LandingPage/Statistics/House.svg";
import "../../styles/Statistics/stats.css";

const useStyles = makeStyles((theme)=>({
  iconRow: {
    width: "100%",
  },
  numbers: {
    fontFamily: "Open Sans",
    fontSize: "60px",
    fontWeight: "600",
    margin: "0 0 0 0",
    [theme.breakpoints.down("md")]: {
      fontSize: "45px",
    },
  },
  iconText: {
    fontFamily: "Open Sans",
    fontSize: "18px",
    fontWeight: "400",
    textAlign: "center",
    maxWidth: "237px",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
  },
  contentContainer: {
    paddingTop: "42px",
  },
}));

export default function Stats() {
  const classes = useStyles()
  const titleText = "Ensuring electricity is something for everyone.";
  const bodyText =
    "Since our inception in 2007, we have worked relentlessly with rural communities to tackle energy poverty in Peru, and make a positive impact on the electrification, economic and educational needs of the most vulnerable";
  return (
    <div className="main-container">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ maxWidth: "854px" }}
      >
        <Grid item>
          <div className="row-content">
            <Title title={titleText} style={{ marginBottom: "0" }} />
          </div>
        </Grid>
        <Grid item>
          <div className="row-content">
            <Body body={bodyText} style={{ marginTop: "8px" }} />
          </div>
        </Grid>
        <Grid item className={classes.iconRow}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="stretch"
          >
            <Grid item>
              <Grid
                container
                direction="column"
                justify="space-around"
                alignItems="center"
                className={classes.contentContainer}
              >
                <Grid item>
                  {" "}
                  <Turbine />
                </Grid>
                <Grid item>
                  <p className={classes.numbers}>50</p>
                </Grid>
                <Grid item>
                  <p className={classes.iconText}>
                    Installed Turbines around Peru
                  </p>{" "}
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="column"
                justify="space-around"
                alignItems="center"
                className={classes.contentContainer}
              >
                <Grid item>
                  {" "}
                  <Book />
                </Grid>
                <Grid item>
                  {" "}
                  <p className={classes.numbers}>100+</p>
                </Grid>
                <Grid item>
                  {" "}
                  <p className={classes.iconText}>
                    Educational workshops held in schools, universitites,
                    communuitites{" "}
                  </p>{" "}
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="column"
                justify="space-around"
                alignItems="center"
                className={classes.contentContainer}
              >
                <Grid item>
                  {" "}
                  <House />
                </Grid>
                <Grid item>
                  {" "}
                  <p className={classes.numbers}>30</p>
                </Grid>
                <Grid item>
                  <p className={classes.iconText}>
                    Communities in 6 different regions
                  </p>{" "}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
