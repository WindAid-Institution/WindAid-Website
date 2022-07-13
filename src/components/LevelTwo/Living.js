import React from "react";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { ROUTES } from "src/constants/routes";
import useShortTermData from "../../hooks/queries/levelTwo";
import SectionWrapper from "../../shared/SectionWrapper";
import TextSection from "../../shared/TextSection";
import Button from "../../shared/Button";

const Living = () => {
  const {
    living: {
      title,
      body: { body },
      images,
    },
  } = useShortTermData();
  const theme = useTheme();

  const classes = {
    root: {
      direction: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
    text: {
      paddingBottom: "40px",
      [theme.breakpoints.up("md")]: {
        paddingBottom: "0",
      },
    },
    images: {
      position: "relative",
      direction: "column",
      justifyContent: "flex-end",
      height: "800px",
      paddingTop: "33px",
      [theme.breakpoints.up("sm")]: {
        height: "360px",
      },
      [theme.breakpoints.up("md")]: {
        height: "100%",
        paddingTop: "0",
      },
    },
    imageItem: {
      display: "flex",
      justifyContent: "flex-end",
    },
    image: {
      width: "100%",
      height: "240px",
      objectFit: "cover",
      objectPosition: "50% 0%",
      [theme.breakpoints.up("sm")]: {
        height: "100%",
        objectPosition: "20% 0",
      },
      [theme.breakpoints.up("md")]: {
        width: "85%",
        height: "200px",
        objectFit: "cover",
        objectPosition: "0% 15%",
      },
    },
    additionalImage: {
      position: "absolute",
      top: "25%",
      left: "52%",
      height: "200px",
      width: "300px",
      objectFit: "cover",
      objectPosition: "0% 25%",
    },
  };
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const isUpSm = useMediaQuery(theme.breakpoints.up("sm"));

  const wrapperStyle = {
    sectionStyle: {
      paddingTop: "33px",
      paddingBottom: isUpMd ? "33px" : "0",
      borderBottom: "3px solid",
      borderBottomColor: theme.palette.primary.main,
      background: isUpMd
        ? `linear-gradient(to left, ${theme.palette.secondary.dark} 45%, ${theme.palette.primary.main} 45%)`
        : `linear-gradient(to top, ${theme.palette.secondary.dark} ${
            isUpSm ? "394px" : "834px"
          }, ${theme.palette.primary.main} ${isUpSm ? "394px" : "834px"})`,
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
  };

  return (
    <SectionWrapper style={wrapperStyle}>
      <Grid container sx={classes.root}>
        <Grid item xs={12} sm={10} md={6} sx={classes.text}>
          <TextSection title={title} body={body} style={sectionStyle} />
          <Button
            text="Learn About Your Leisure Time"
            style={{ marginTop: "24px" }}
            route={ROUTES.TRUJILLO}
            inverted
          />
        </Grid>
        <Grid item xs={12} md={4} sx={classes.text}>
          <Grid container sx={classes.images} spacing={isUpMd ? 6 : 1}>
            {images
              .filter((image, index) => (isUpMd ? index : true))
              .map((image) => (
                <Grid
                  item
                  key={image.title}
                  xs={12}
                  sm={4}
                  md={12}
                  sx={classes.imageItem}
                >
                  <img
                    src={image.file.url}
                    alt={image.description}
                    style={classes.image}
                  />
                </Grid>
              ))}
          </Grid>
          {isUpMd && (
            <img
              src={images[0].file.url}
              alt={images[0].description}
              style={classes.additionalImage}
            />
          )}
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default Living;
