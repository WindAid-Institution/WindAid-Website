import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import "styles/Statistics/stats.css";
import Title from "src/shared/Title/Title";
import Body from "src/shared/Body/Body";
import useHomepageData from "src/hooks/queries/homepage";

import StatisticsItem from "./StatisticsItem";

const useStyles = makeStyles((theme) => ({
  iconRow: {
    width: "100%",
  },
  mainWrapper: {
    maxWidth: "870px",
    padding: theme.spacing(2),
  },
}));

const Stats = () => {
  const {
    statistics: {
      body: { body },
      title,
      images,
    },
  } = useHomepageData();

  const classes = useStyles();
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
            <Title title={title} style={{ marginBottom: "0" }} />
          </div>
        </Grid>
        <Grid item>
          <div className="row-content">
            <Body body={body} style={{ marginTop: "8px" }} />
          </div>
        </Grid>
        <Grid item className={classes.iconRow}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="stretch"
          >
            {images.map((stats, index) => (
              <Grid item sm={3} xs={12} key={stats.title}>
                <StatisticsItem {...stats} isPlusSign={index === 1} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Stats;
