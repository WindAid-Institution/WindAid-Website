import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-named-default
import { default as MuiButton } from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: ({ inverted, style }) => ({
    color: inverted ? theme.palette.primary.main : theme.palette.secondary.main,
    backgroundColor: inverted
      ? theme.palette.secondary.main
      : theme.palette.primary.main,
    textDecoration: "none",
    ...style,

    "&:hover": {
      backgroundColor: inverted
        ? theme.palette.secondary.main
        : theme.palette.primary.main,
    },
  }),
}));

const Button = ({ text, inverted, style }) => {
  const classes = useStyles({ inverted, style });

  return <MuiButton className={classes.root}>{text}</MuiButton>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  style: PropTypes.object,
};
Button.defaultProps = {
  inverted: false,
  style: {},
};

export default Button;
