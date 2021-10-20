import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import useTrujilloData from "../../hooks/queries/trujillo";
import SectionWrapper from "../../shared/SectionWrapper";
import TextSection from "../../shared/TextSection";

const useStyles = makeStyles((theme) => ({
  root: {
    direction: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  images: {
    direction: "column",
    justifyContent: "flex-end",
    height: "800px",
    padding: "0",
    [theme.breakpoints.up("sm")]: {
      height: "360px",
    },
    [theme.breakpoints.up("md")]: {
      height: "100%",
    },
  },
  image: {
    width: "100%",
    height: "240px",
    objectFit: "cover",
    objectPosition: "50% 0",
    [theme.breakpoints.up("sm")]: {
      height: "100%",
      objectPosition: "20% 0",
    },
    [theme.breakpoints.up("md")]: {
      height: "240px",
      objectFit: "cover",
      objectPosition: "0% 20%",
    },
  },
}));

const DayInLife = () => {
  const {
    dayInLife: {
      title,
      header,
      body: { body },
      bodyTwo: { bodyTwo },
      images,
    },
  } = useTrujilloData();

  const classes = useStyles();
  const theme = useTheme();

  const textStyle = {
    color: theme.palette.secondary.main,
  };
  const sectionStyle = {
    bodyStyle: {
      textStyle,
    },
    titleStyle: {
      textStyle,
    },
    headerStyle: {
      textStyle,
    },
  };
  const rootStyle = {
    marginBottom: "32px",
  };

  return (
    <SectionWrapper bgColor="primary">
      <Grid container className={classes.root} spacing={5}>
        <Grid item xs={12} sm={11} md={6}>
          <TextSection
            title={title}
            body={body}
            style={{ ...sectionStyle, rootStyle }}
          />
          <TextSection header={header} bodyTwo={bodyTwo} style={sectionStyle} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container className={classes.images} spacing={1}>
            {images.map((image) => (
              <Grid item key={image.title} xs={12} sm={4} md={12}>
                <img
                  src={image.file.url}
                  alt={image.description}
                  className={classes.image}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default DayInLife;
