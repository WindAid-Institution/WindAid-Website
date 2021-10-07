import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import SectionWrapper from "shared/SectionWrapper";
import InfoCard from "../../shared/InfoCard";
import useShortTermData from "../../hooks/queries/shortTerm";

const useStyles = makeStyles(() => ({
  infoContainer: {
    direction: "column",
  },
}));

const LevelInfo = () => {
  const {
    infoCard: {
      title: { title },
      price,
      note: { note },
      programDates: { data: programDates },
      included: { included },
      notIncluded: { notIncluded },
      image,
    },
    applyDescription,
  } = useShortTermData();

  const classes = useStyles();
  const data = {
    title,
    price,
    note,
    programDates,
    included,
    notIncluded,
    image,
  };

  return (
    <SectionWrapper bgColor="secondary">
      <Grid container>
        <Grid container className={classes.infoContainer} spacing={4}>
          <Grid item xs={12} lg={6}>
            <Typography variant="h5">{applyDescription.header}</Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography variant="h5">{applyDescription.title}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <InfoCard {...data} />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default LevelInfo;
