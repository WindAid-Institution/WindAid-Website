import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles, useTheme } from "@mui/styles";
import { GatsbyImage } from "gatsby-plugin-image";
import useMediaQuery from "@mui/material/useMediaQuery";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import useTrujilloData from "hooks/queries/trujillo";

const useStyles = makeStyles((theme) => ({
  textContainer: {
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      paddingRight: theme.spacing(2),
      paddingBottom: 0,
    },
  },

  imageContainer: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: "100%",
    maxHeight: "380px",
  },
}));

const Immerse = () => {
  const {
    immerse: {
      title,
      body: { body },
      image,
    },
  } = useTrujilloData();

  const classes = useStyles();
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const textStyle = {
    textStyle: {
      color: theme.palette.secondary.main,
    },
  };

  const textSectionStyle = {
    titleStyle: { ...textStyle },
    bodyStyle: { ...textStyle },
  };

  return (
    <SectionWrapper bgColor="primary">
      <Grid container>
        <Grid item xs={12} md={6} className={classes.textContainer}>
          <TextSection
            title={title}
            body={body}
            style={textSectionStyle}
            size={isUpMd ? "full" : "lg"}
          />
        </Grid>
        <Grid className={classes.imageContainer} item xs={12} md={6}>
          <GatsbyImage
            className={classes.image}
            image={image.gatsbyImageData}
            alt={image.description}
          />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default Immerse;
