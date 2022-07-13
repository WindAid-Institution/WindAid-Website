import React from "react";
import PropTypes from "prop-types";
import useTheme from "@mui/material/styles/useTheme";
import Container from "./Container";
import useClasses from "../styles/useClasses";

const getBackgroundColor = ({ theme, bgColor }) => {
  if (bgColor === "primary") {
    return theme.palette.primary.main;
  }

  if (bgColor === "secondary") {
    return theme.palette.secondary.dark;
  }

  if (bgColor === "tertiary") {
    return theme.palette.secondary.main;
  }

  if (bgColor.includes("#")) {
    return bgColor;
  }

  return theme.palette.secondary.main;
};

const styles = ({ sectionStyle, theme, bgColor, bgUrl }) => ({
  root: {
    backgroundColor: getBackgroundColor({ theme, bgColor }),
    paddingTop: "calc(2.96vw + 21.3px)",
    paddingBottom: "calc(2.96vw + 21.3px)",
    backgroundImage: bgUrl ? `url(${bgUrl})` : "",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    overflow: "hidden",
    ...sectionStyle,
  },
});

const SectionWrapper = ({ children, style, bgColor, bgUrl }) => {
  const { sectionStyle, containerStyle } = style || {};
  const theme = useTheme();
  const updatedStyles = styles({ theme, bgColor, bgUrl, sectionStyle });
  const classes = useClasses(updatedStyles);

  return (
    <section className={`${classes.root} ${classes.sectionStyle}`}>
      <Container style={containerStyle}>{children}</Container>
    </section>
  );
};

SectionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  bgColor: PropTypes.string,
  bgUrl: PropTypes.string,
};

SectionWrapper.defaultProps = {
  style: {},
  bgColor: "",
  bgUrl: "",
};

export default SectionWrapper;
