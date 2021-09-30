import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import useHomepageData from "queries/homepage";
import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import ProjectsCarousel from "./ProjectsCarousel";

const useStyles = makeStyles(() => ({
  mainWrapper: {},
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
        justify="center"
        alignItems="center"
        className={classes.mainWrapper}
      >
        <Grid item xs={12} className={classes.row}>
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
