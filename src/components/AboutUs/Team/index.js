import React from "react";
import Grid from "@mui/material/Grid";
import useAboutUsData from "queries/aboutUs";
import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";

import useTheme from "@mui/material/styles/useTheme";
import TeamCard from "./TeamCard";

const Team = () => {
  const theme = useTheme();
  const {
    team: { title },

    aboutUsCardsContent,
  } = useAboutUsData();

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
        {aboutUsCardsContent.map((cardData) => (
          <TeamCard {...cardData} key={cardData.orderNumber} />
        ))}
      </Grid>
    </SectionWrapper>
  );
};
export default Team;
