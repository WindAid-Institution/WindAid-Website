import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
// eslint-disable-next-line import/no-named-default
import { default as MuiButton } from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: ({ inverted, style }) => ({
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

  link: {
    textDecoration: "none",
  },
}));

const Button = ({ text, inverted, style, route }) => {
  const classes = useStyles({ inverted, style });

  return (
    <Link to={route.path} className={classes.link}>
      <MuiButton className={classes.button}>{text}</MuiButton>
    </Link>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  style: PropTypes.object,
  route: PropTypes.shape({
    path: PropTypes.string,
  }),
};
Button.defaultProps = {
  inverted: false,
  style: {},
  route: {
    path: "/",
  },
};

export default Button;
