import React from "react";

import Grid from "@material-ui/core/Grid";
import useHomepageData from "queries/homepage";
import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import LevelCard from "./LevelCard";

const ProgramLevels = () => {
  const {
    programLevels: {
      title,
      body: { body },
    },
    programLevelCards: { programLevelCardsContent },
  } = useHomepageData();

  return (
    <SectionWrapper bgColor="tertiary">
      <TextSection size="full" title={title} body={body} />
      <Grid container spacing={2}>
        {programLevelCardsContent.map((card) => (
          <Grid item lg={4} key={card.header}>
            <LevelCard {...card} />
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default ProgramLevels;
