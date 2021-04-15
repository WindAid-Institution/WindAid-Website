import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "./Container";

const useStyles = makeStyles((theme) => {
  const getBackgroundColor = (bgColor) => {
    if (bgColor === "primary") {
      return theme.palette.primary.main;
    }

    if (bgColor === "secondary") {
      return theme.palette.secondary.light;
    }

    return theme.palette.secondary.main;
  };

  return {
    root: (bgColor, style) => ({
      color:
        bgColor === "primary"
          ? theme.palette.secondary.main
          : theme.palette.primary.dark,
      backgroundColor: getBackgroundColor(bgColor),
      ...style,
    }),
  };
});

const SectionWrapper = ({ children, style, bgColor }) => {
  const classes = useStyles(bgColor, style);

  return (
    <section className={classes.root}>
      <Container>{children}</Container>
    </section>
  );
};

SectionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  bgColor: PropTypes.string,
};

SectionWrapper.defaultProps = {
  style: {},
  bgColor: "",
};

export default SectionWrapper;
