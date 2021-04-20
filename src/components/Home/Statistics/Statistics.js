import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import SectionWrapper from "shared/SectionWrapper";
import Title from "shared/Title";
import Body from "shared/Body";
import useHomepageData from "queries/homepage";

import StatisticsItem from "./StatisticsItem";

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    maxWidth: "870px",
    padding: theme.spacing(2),
  },

  row: {
    textAlign: "center",
  },

  iconRow: {
    width: "100%",
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
    <SectionWrapper
      style={{ containerStyle: { display: "flex", justifyContent: "center" } }}
      bgColor="secondary"
    >
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.mainWrapper}
      >
        <Grid item className={classes.row}>
          <Title title={title} />
        </Grid>
        <Grid item className={classes.row}>
          <Body body={body} />
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
    </SectionWrapper>
  );
};
export default Stats;
