import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import useAmbassadorsData from "queries/ambassadors";
import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";

import MeetCard from "./MeetCard";

const useStyles = makeStyles((theme) => ({
  cardsContainer: {
    paddingTop: theme.spacing(2),

    [theme.breakpoints.up("md")]: {
      padddingTop: theme.spacing(1),
    },
  },
}));

const Meet = () => {
  const {
    meet: { title },

    ambassadorsCardsContent,
  } = useAmbassadorsData();

  const classes = useStyles();
  return (
    <SectionWrapper bgColor="secondary">
      <TextSection title={title} size="lg" />
      <Grid container spacing={2} className={classes.cardsContainer}>
        {ambassadorsCardsContent.map((cardData) => (
          <MeetCard {...cardData} key={cardData.orderNumber} />
        ))}
      </Grid>
    </SectionWrapper>
  );
};
export default Meet;
