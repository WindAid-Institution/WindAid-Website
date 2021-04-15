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
      return theme.palette.secondary.dark;
    }

    return theme.palette.secondary.main;
  };

  return {
    root: ({ bgColor, sectionStyle }) => ({
      color:
        bgColor === "primary"
          ? theme.palette.secondary.main
          : theme.palette.primary.dark,
      backgroundColor: getBackgroundColor(bgColor),
      padding: "calc(2.96vw + 21.3px) 0",
      ...sectionStyle,
    }),
  };
});

const SectionWrapper = ({ children, style, bgColor }) => {
  const { sectionStyle, containerStyle } = style || {};
  console.log(sectionStyle);
  const classes = useStyles({ bgColor, sectionStyle });

  return (
    <section className={classes.root}>
      <Container style={containerStyle}>{children}</Container>
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
