import React from "react";
import Grid from "@mui/material/Grid";
import useTheme from "@mui/material/styles/useTheme";
import useAmbassadorsData from "queries/ambassadors";
import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";

import MeetCard from "./MeetCard";

const Meet = () => {
  const theme = useTheme();

  const {
    meet: { title },

    ambassadorsCardsContent,
  } = useAmbassadorsData();

  const classes = {
    cardsContainer: {
      paddingTop: theme.spacing(2),

      [theme.breakpoints.up("md")]: {
        padddingTop: theme.spacing(1),
      },
    },
  };
  return (
    <SectionWrapper bgColor="secondary">
      <TextSection title={title} size="lg" />
      <Grid container spacing={2} sx={classes.cardsContainer}>
        {ambassadorsCardsContent.map((cardData) => (
          <MeetCard {...cardData} key={cardData.orderNumber} />
        ))}
      </Grid>
    </SectionWrapper>
  );
};
export default Meet;
