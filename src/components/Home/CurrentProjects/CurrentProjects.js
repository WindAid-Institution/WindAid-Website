import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";

import useHomepageData from "queries/homepage";
import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import ProjectsCarousel from "./ProjectsCarousel";

const useStyles = makeStyles(() => ({
  mainWrapper: {},
  textRow: {
    textAlign: "center",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  row: {
    textAlign: "center",
    width: "100%",
  },
}));

const CurrentProjects = () => {
  const classes = useStyles();
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
        className={classes.mainWrapper}
      >
        <Grid item xs={12} className={classes.textRow}>
          <TextSection title={title} body={body} />
        </Grid>
        <Grid item xs={12} className={classes.row}>
          <ProjectsCarousel carouselData={currentProjectCardsContent} />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default CurrentProjects;
