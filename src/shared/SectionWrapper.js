import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import useTheme from "@mui/material/styles/useTheme";
import Container from "./Container";

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

const useStyles = makeStyles({
  root: {
    backgroundColor: (props) => getBackgroundColor(props),
    paddingTop: "calc(2.96vw + 21.3px)",
    paddingBottom: "calc(2.96vw + 21.3px)",
    backgroundImage: (props) => (props.bgUrl ? `url(${props.bgUrl})` : ""),
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    overflow: "hidden",
    ...(props) => props.sectionStyle,
  },
});

const SectionWrapper = ({ children, style, bgColor, bgUrl }) => {
  const { sectionStyle, containerStyle } = style || {};
  const theme = useTheme();
  const classes = useStyles({ theme, bgColor, bgUrl, sectionStyle });

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
  bgUrl: PropTypes.string,
};

SectionWrapper.defaultProps = {
  style: {},
  bgColor: "",
  bgUrl: "",
};

export default SectionWrapper;
