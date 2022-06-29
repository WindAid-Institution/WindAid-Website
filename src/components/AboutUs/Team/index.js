import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import useAboutUsData from "queries/aboutUs";
import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";

import TeamCard from "./TeamCard";

const useStyles = makeStyles((theme) => ({
  cardsContainer: {
    paddingTop: theme.spacing(2),

    [theme.breakpoints.up("md")]: {
      padddingTop: theme.spacing(1),
    },
  },
}));

const Team = () => {
  const {
    team: { title },

    aboutUsCardsContent,
  } = useAboutUsData();

  const classes = useStyles();
  return (
    <SectionWrapper bgColor="secondary">
      <TextSection title={title} size="lg" />
      <Grid container spacing={2} className={classes.cardsContainer}>
        {aboutUsCardsContent.map((cardData) => (
          <TeamCard {...cardData} key={cardData.orderNumber} />
        ))}
      </Grid>
    </SectionWrapper>
  );
};
export default Team;
