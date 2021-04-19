import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import useWindowSize from "hooks/useWindowSize";
import useShortTermData from "queries/shortTerm";

const useStyles = makeStyles((theme) => ({
  textContainer: {
    display: "flex",
    alignItems: "center",
  },

  imageContainer: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(3),
    },
  },

  image: {
    width: "100%",
  },
}));

const Day4To20 = () => {
  const {
    day4to20: {
      header,
      title,
      body: { body },
      image: { gatsbyImageData, description },
    },
  } = useShortTermData();

  const classes = useStyles();

  const { width } = useWindowSize();

  const isMdScreen = width >= 960;

  return (
    <SectionWrapper bgColor="primary">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className={classes.textContainer}>
          <TextSection
            header={header}
            title={title}
            body={body}
            size={isMdScreen ? "sm" : "lg"}
            style={{
              headerStyle: { textStyle: { color: "#fff" } },
              titleStyle: { textStyle: { color: "#fff" } },
              bodyStyle: { textStyle: { color: "#fff" } },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} className={classes.imageContainer}>
          <GatsbyImage
            image={gatsbyImageData}
            alt={description}
            className={classes.image}
          />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};
export default Day4To20;
