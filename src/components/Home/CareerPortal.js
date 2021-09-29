/* eslint-disable no-dupe-keys */
import React from "react";
import { Grid, Box, Container } from "@material-ui/core";

import { ROUTES } from "src/constants/routes";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../../shared/Button";
import useHomepageData from "../../hooks/queries/homepage";
import TextSection from "../../shared/TextSection";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "460px",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderBottom: "3px solid",
    borderBottomColor: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.dark,
  },

  container: {
    position: "absolute",
    left: "116px",
    top: "64px",
  },

  image: {
    position: "absolute",
    bottom: "0px",
    right: "116px",
    height: "70%",
  },
}));

const CareerPortal = () => {
  const {
    careerPortal: {
      title,
      body: { body },
      bodyTwo: { bodyTwo },
      image: {
        description,
        file: { url },
      },
    },
  } = useHomepageData();
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img src={url} alt={description} className={classes.image} />
      <Box className={classes.container}>
        <Container className={classes.textContainer}>
          <Grid item xs={8}>
            <TextSection title={title} body={body} />
          </Grid>
          <Grid item xs={8}>
            <Button
              text={bodyTwo}
              style={{ marginTop: "24px" }}
              route={ROUTES.CAREERS}
            />
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default CareerPortal;
