import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-named-default
import { default as MuiContainer } from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: (style) => ({
    maxWidth: "1200px",
    ...style,
  }),
});

const Container = ({ children, style }) => {
  const classes = useStyles(style);

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
