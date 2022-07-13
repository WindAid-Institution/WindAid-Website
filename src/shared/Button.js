import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
// eslint-disable-next-line import/no-named-default
import { default as MuiButton } from "@mui/material/Button";
import useTheme from "@mui/material/styles/useTheme";

const Button = ({ text, inverted, style, route, isDisabled, onClick }) => {
  const theme = useTheme();

  const classes = {
    button: {
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
      textTransform: "none",
      fontWeight: "700",
      height: "48px",
      minWidth: "80vw",
      zIndex: 1,
      [theme.breakpoints.up("sm")]: {
        minWidth: "320px",
        fontSize: "16px",
      },
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
    },

    link: {
      textDecoration: "none",
    },
  };

  return (
    <>
      {route?.path ? (
        <Link to={route.path} style={classes.link}>
          <MuiButton
            variant="contained"
            disabled={isDisabled}
            sx={classes.button}
          >
            {text}
          </MuiButton>
        </Link>
      ) : (
        <MuiButton
          variant="contained"
          onClick={onClick}
          disabled={isDisabled}
          sx={classes.button}
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
