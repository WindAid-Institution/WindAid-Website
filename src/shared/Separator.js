import React from "react";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "./Button";
import TextSection from "./TextSection";
import SectionWrapper from "./SectionWrapper";

const useStyles = makeStyles((theme) => ({
  textSection: {
    paddingBottom: "97px",
  },
  image: {
    position: "absolute",
    bottom: "0",
    right: "0",
    height: "35%",
    [theme.breakpoints.up("sm")]: {
      height: "50%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "60%",
    },
  },
}));

const Separator = ({ route, title, body, bodyTwo, image, children }) => {
  const {
    description,
    file: { url },
  } = image;

  const classes = useStyles();
  const theme = useTheme();

  const style = {
    sectionStyle: {
      position: "relative",
      paddingBottom: "0",
      borderBottom: "3px solid",
      borderBottomColor: theme.palette.primary.main,
      backgroundColor: theme.palette.secondary.dark,
    },
  };

  return (
    <SectionWrapper style={style}>
      <Grid container direction="row">
        <Grid item xs={12} className={classes.textSection}>
          <TextSection title={title} body={body} />
          {children}
          <Button text={bodyTwo} style={{ marginTop: "24px" }} route={route} />
        </Grid>
      </Grid>
      <img src={url} alt={description} className={classes.image} />
    </SectionWrapper>
  );
};

Separator.propTypes = {
  route: PropTypes.object,
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  bodyTwo: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  children: PropTypes.object,
};

Separator.defaultProps = {
  body: "",
  children: {},
  route: {
    name: "Home",
    path: "/",
  },
};

export default Separator;
