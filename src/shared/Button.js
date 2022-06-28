import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
// eslint-disable-next-line import/no-named-default
import { default as MuiButton } from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import useTheme from "@mui/material/styles/useTheme";

const useStyles = makeStyles(() => {
  const theme = useTheme();
  return {
    button: ({ inverted, style }) => ({
      color: inverted
        ? theme.palette.primary.main
        : theme.palette.secondary.main,
      backgroundColor: inverted
        ? theme.palette.secondary.main
        : theme.palette.primary.main,
      border: `3px solid ${
        inverted ? theme.palette.secondary.main : theme.palette.primary.main
      }`,
      textDecoration: "none",
      ...style,

      "&:hover": {
        backgroundColor: inverted
          ? theme.palette.primary.main
          : theme.palette.secondary.main,

        color: inverted
          ? theme.palette.secondary.main
          : theme.palette.primary.main,

        borderColor: theme.palette.primary.main,
      },
    }),

    link: {
      textDecoration: "none",
    },
  };
});

const Button = ({ text, inverted, style, route, isDisabled, onClick }) => {
  const classes = useStyles({ inverted, style });

  return (
    <>
      {route?.path ? (
        <Link to={route.path} className={classes.link}>
          <MuiButton disabled={isDisabled} className={classes.button}>
            {text}
          </MuiButton>
        </Link>
      ) : (
        <MuiButton
          onClick={onClick}
          disabled={isDisabled}
          className={classes.button}
        >
          {text}
        </MuiButton>
      )}
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  style: PropTypes.object,
  route: PropTypes.shape({
    path: PropTypes.string,
  }),
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  inverted: false,
  style: {},
  route: {
    path: "",
  },
  isDisabled: false,
  onClick: () => {},
};

export default Button;
