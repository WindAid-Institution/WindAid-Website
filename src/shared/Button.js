import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-named-default
import { default as MuiButton } from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: (inverted) => ({
    color: inverted ? theme.palette.primary.main : theme.palette.secondary.main,
    backgroundColor: inverted
      ? theme.palette.secondary.main
      : theme.palette.primary.main,
    textDecoration: "none",

    "&:hover": {
      backgroundColor: inverted
        ? theme.palette.secondary.main
        : theme.palette.primary.main,
    },
  }),
}));

const Button = ({ text, inverted }) => {
  const classes = useStyles(inverted);

  return <MuiButton className={classes.root}>{text}</MuiButton>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
};
Button.defaultProps = {
  inverted: false,
};

export default Button;
