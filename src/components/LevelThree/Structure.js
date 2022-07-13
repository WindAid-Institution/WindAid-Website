import React from "react";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import useLongTermData from "../../hooks/queries/levelThree";
import SectionWrapper from "../../shared/SectionWrapper";
import TextSection from "../../shared/TextSection";

const Structure = () => {
  const {
    structure: {
      title,
      body: { body },
      bodyTwo: { bodyTwo },
      image,
    },
  } = useLongTermData();
  const theme = useTheme();

  const classes = {
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
  };

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
      <Grid container sx={classes.containerStyle} spacing={6}>
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
            style={classes.image}
          />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default Structure;
