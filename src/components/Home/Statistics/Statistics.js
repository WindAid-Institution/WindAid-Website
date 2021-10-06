import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { ROUTES } from "src/constants/routes";
import SectionWrapper from "shared/SectionWrapper";
import Button from "shared/Button";
import Title from "shared/Title";
import TextSection from "shared/TextSection";
import useHomepageData from "queries/homepage";

import StatisticsItem from "./StatisticsItem";

const useStyles = makeStyles(() => ({
  mainWrapper: {},

  text: {
    textAlign: "center",
    marginTop: "calc(5.28vw + 21px)",
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
      header,
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
        <Grid item className={classes.iconRow}>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="stretch"
          >
            {images.map((stats, index) => (
              <Grid item sm={3} xs={12} key={stats.title}>
                <StatisticsItem {...stats} isPlusSign={index === 1} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item className={classes.text}>
          <TextSection body={body} header={header} />
        </Grid>
        <Button
          text="Learn about our impact"
          style={{ marginTop: "24px" }}
          route={ROUTES.OUR_IMPACT}
        />
      </Grid>
    </SectionWrapper>
  );
};
export default Stats;
