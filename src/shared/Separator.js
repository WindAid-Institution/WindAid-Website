import React from "react";
import { Grid, Box, Container } from "@material-ui/core";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Button from "./Button";
import TextSection from "./TextSection";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "500px",
    borderBottom: "3px solid",
    borderBottomColor: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.dark,
  },

  container: {
    position: "absolute",
    left: "0",
    [theme.breakpoints.up("xl")]: {
      left: "calc(12.6vw - 87px)",
    },
    top: "64px",
  },

  image: {
    position: "absolute",
    bottom: "0px",
    right: "24px",
    [theme.breakpoints.up("xl")]: {
      right: "calc(12.6vw - 87px)",
    },
    [theme.breakpoints.up("sm")]: {
      right: "calc(12.6vw - 87px)",
      height: "50%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "80%",
    },
    height: "30%",
  },
}));

const Separator = ({ route, title, body, bodyTwo, image }) => {
  const classes = useStyles();
  console.log(image);
  const {
    description,
    file: { url },
  } = image;

  return (
    <Box className={classes.root}>
      <img src={url} alt={description} className={classes.image} />
      <Box className={classes.container}>
        <Container className={classes.textContainer}>
          <Grid item xs={12} sm={10}>
            <TextSection title={title} body={body} />
          </Grid>
          <Grid item>
            <Button
              text={bodyTwo}
              style={{ marginTop: "24px" }}
              route={route}
            />
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

Separator.propTypes = {
  route: PropTypes.object,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  bodyTwo: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
};

Separator.defaultProps = {
  route: {
    name: "Home",
    path: "/",
  },
};

export default Separator;
