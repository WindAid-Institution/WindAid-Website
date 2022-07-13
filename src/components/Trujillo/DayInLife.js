import React from "react";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import useTrujilloData from "../../hooks/queries/trujillo";
import SectionWrapper from "../../shared/SectionWrapper";
import TextSection from "../../shared/TextSection";

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
  const theme = useTheme();

  const classes = {
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
  };

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
      <Grid container sx={classes.root} spacing={5}>
        <Grid item xs={12} sm={11} md={6}>
          <TextSection
            title={title}
            body={body}
            style={{ ...sectionStyle, rootStyle }}
          />
          <TextSection
            header={header}
            bodyTwo={bodyTwo}
            style={{ ...sectionStyle }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container sx={classes.images} spacing={1}>
            {images.map((image) => (
              <Grid item key={image.title} xs={12} sm={4} md={12}>
                <img
                  src={image.file.url}
                  alt={image.description}
                  style={classes.image}
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
