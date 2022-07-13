import React from "react";
import { Grid } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "../../shared/TextSection";
import InfoCard from "../../shared/InfoCard/InfoCard";
import useShortTermData from "../../hooks/queries/levelTwo";

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
      programDates: { heading: programHeading, data: programDates },
      included: { included },
      notIncluded: { notIncluded },
      image,
    },
    applyDescription,
  } = useShortTermData();

  const classes = useStyles();
  const theme = useTheme();

  const data = {
    title,
    price,
    note,
    programDates,
    programHeading,
    included,
    notIncluded,
    image,
  };

  const textStyle = {
    rootStyle: {
      marginBottom: "30px",
    },
    subHeaderStyle: {
      textStyle: {
        color: theme.palette.primary.main,
      },
    },
  };

  return (
    <SectionWrapper bgColor="secondary">
      <Grid container>
        <Grid container className={classes.infoContainer} spacing={4}>
          <Grid item xs={12} lg={6}>
            <TextSection
              subHeader={applyDescription.header}
              style={textStyle}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextSection subHeader={applyDescription.title} style={textStyle} />
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
