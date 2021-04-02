import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles"
import Title from "../../../shared/Title/Title"
import Body from "../../../shared/Body/Body";
import Turbine from "../../../images/LandingPage/Statistics/WindTurbine.svg";
import Book from "../../../images/LandingPage/Statistics/Book.svg";
import House from "../../../images/LandingPage/Statistics/House.svg";
import StatisticsItem from "./StatisticsItem"
import "../../../styles/Statistics/stats.css";

const statsData = [
  {
    icon: <Turbine />,
    numberStats: '50',
    iconText: 'Installed Turbines around Peru'
  },
  {
    icon: <Book />,
    numberStats: '100+',
    iconText: 'Educational workshops held in schools, universitites',
  },
  {
    icon: <House />,
    numberStats: '30',
    iconText: 'Communities in 6 different regions'
  }
]

const useStyles = makeStyles((theme)=>({
  iconRow: {
    width: "100%",
  },
  mainWrapper: {
    maxWidth: "870px",
    padding: theme.spacing(2)
  }
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
        className={classes.mainWrapper}
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
            {statsData.map((stats, index) => 
              <Grid item sm={3} xs={12} key={index}>
                <StatisticsItem {...stats} />
              </Grid>)}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
