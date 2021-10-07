import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { ROUTES } from "src/constants/routes";
import useShortTermData from "../../hooks/queries/shortTerm";
import SectionWrapper from "../../shared/SectionWrapper";
import TextSection from "../../shared/TextSection";
import Button from "../../shared/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    direction: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    paddingBottom: "40px",
  },
  images: {
    direction: "column",
    justifyContent: "flex-end",
    height: "800px",
    paddingTop: "33px",
    [theme.breakpoints.up("sm")]: {
      height: "360px",
    },
    [theme.breakpoints.up("md")]: {
      height: "560px",
    },
  },
  image: {
    width: "100%",
    height: "240px",
    objectFit: "cover",
    [theme.breakpoints.up("sm")]: {
      height: "100%",
    },
    [theme.breakpoints.up("md")]: {
      height: "162px",
      objectFit: "contain",
    },
  },
}));

const Living = () => {
  const {
    living: {
      title,
      body: { body },
      images,
    },
  } = useShortTermData();

  const classes = useStyles();
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const isUpSm = useMediaQuery(theme.breakpoints.up("sm"));

  const style = {
    sectionStyle: {
      paddingTop: "33px",
      paddingBottom: isUpMd ? "33px" : "0",
      borderBottom: "3px solid",
      borderBottomColor: theme.palette.primary.main,
      background: isUpMd
        ? `linear-gradient(to left, ${theme.palette.secondary.dark} 33.33%, ${theme.palette.primary.main} 33.33%)`
        : `linear-gradient(to top, ${theme.palette.secondary.dark} ${
            isUpSm ? "394px" : "834px"
          }, ${theme.palette.primary.main} ${isUpSm ? "394px" : "834px"})`,
    },
  };

  const textStyle = {
    bodyStyle: {
      textStyle: {
        color: "white",
      },
    },
    titleStyle: {
      textStyle: {
        color: "white",
      },
    },
  };

  return (
    <SectionWrapper style={style}>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={8} className={classes.text}>
          <TextSection title={title} body={body} style={textStyle} />
          <Button
            text="Learn About Your Leisure Time"
            style={{ marginTop: "24px" }}
            route={ROUTES.TRUJILLO}
            inverted
          />
        </Grid>
        <Grid item xs={12} md={3} className={classes.text}>
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

export default Living;
