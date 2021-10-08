import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import useLongTermData from "../../hooks/queries/longTerm";
import SectionWrapper from "../../shared/SectionWrapper";
import TextSection from "../../shared/TextSection";

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: "100%",
    objectFit: "cover",
    [theme.breakpoints.up("sm")]: {
      height: "290px",
    },
  },
}));

const Structure = () => {
  const {
    structure: {
      title,
      body: { body },
      bodyTwo: { bodyTwo },
      image,
    },
  } = useLongTermData();

  const classes = useStyles();
  const theme = useTheme();

  const style = {
    bodyStyle: {
      textStyle: {
        color: theme.palette.secondary.main,
      },
    },
    titleStyle: {
      textStyle: {
        color: theme.palette.secondary.main,
      },
    },
  };

  return (
    <SectionWrapper
      bgColor="primary"
      style={{ containerStyle: { display: "flex", justifyContent: "center" } }}
    >
      <Grid container className={classes.containerStyle} spacing={6}>
        <Grid item xs={12} md={6}>
          <TextSection
            title={title}
            body={body}
            bodyTwo={bodyTwo}
            style={style}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={image.file.url}
            alt={image.description}
            className={classes.image}
          />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default Structure;
