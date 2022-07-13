import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-named-default
import { default as MuiContainer } from "@mui/material/Container";
import useTheme from "@mui/material/styles/useTheme";
import useClasses from "../styles/useClasses";

const styles = ({ theme, style }) => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      maxWidth: "1200px",
    },
    [theme.breakpoints.only("md")]: {
      maxWidth: "920px",
    },
    [theme.breakpoints.only("xmd")]: {
      maxWidth: "720px",
    },
    [theme.breakpoints.only("sm")]: {
      maxWidth: "540px",
    },
    // This smoothes the sizing when changing breakpoints
    transition: "0.3s ease",

    ...style,
  },
});

const Container = ({ children, style }) => {
  const theme = useTheme();
  const updatedStyle = styles({ theme, style });
  const classes = useClasses(updatedStyle);

  return <MuiContainer className={classes.root}>{children}</MuiContainer>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

Container.defaultProps = {
  style: {},
};

export default Container;
