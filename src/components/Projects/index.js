import React from "react";
import Grid from "@mui/material/Grid";
import useTheme from "@mui/material/styles/useTheme";

import useHomepageData from "queries/homepage";
import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import ProjectCard from "../Home/CurrentProjects/ProjectCard";

const CurrentProjects = () => {
  const theme = useTheme();
  const classes = {
    mainWrapper: {},
    textRow: {
      textAlign: "center",
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    cards: {
      width: "100%",
      display: "grid",
      gap: "5px",
      gridTemplateColumns: "repeat(auto-fit, minmax(550px, 1fr))",
      [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "1fr",
      },
    },
  };
  const {
    currentProjects: {
      title,
      body: { body },
    },
    currentProjectCards: { currentProjectCardsContent },
  } = useHomepageData();

  return (
    <SectionWrapper
      style={{
        containerStyle: {
          display: "flex",
          justifyContent: "center",
          paddingBottom: "30px",
        },
      }}
      bgColor="secondary"
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={classes.mainWrapper}
      >
        <Grid item xs={12} sx={classes.textRow}>
          <TextSection title={title} body={body} />
        </Grid>
        <Grid item xs={12} sx={classes.cards}>
          {currentProjectCardsContent.map((projectData) => (
            <ProjectCard key={projectData.orderNumber} data={projectData} />
          ))}
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default CurrentProjects;
