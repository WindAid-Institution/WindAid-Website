import React from "react";
import propTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Link } from "gatsby";

const yellowColor = "#ffde15";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: yellowColor,
    color: theme.palette.primary.dark,
    height: "48px",
    minWidth: "220px",
    display: "none",
    marginRight: "16px",
    border: `4px solid ${yellowColor}`,

    [theme.breakpoints.up("sm")]: {
      display: "inline-flex",
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: 0,
      minWidth: "260px",
    },

    "&:hover": {
      color: theme.palette.primary.dark,
      borderColor: theme.palette.primary.dark,
      backgroundColor: theme.palette.secondary.main,
    },
  },

  sidebar: {
    marginRight: 0,
    display: "block",
    margin: "32px 0",
    fontSize: "18px",
    textDecoration: "none",

    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const ApplyButton = ({ isSidebar }) => {
  const classes = useStyles();
  return (
    <Link to="/application-program" style={{ textDecoration: "none" }}>
      <Button
        disableRipple
        className={clsx(classes.root, isSidebar && classes.sidebar)}
      >
        Apply
      </Button>
    </Link>
  );
};

ApplyButton.propTypes = {
  isSidebar: propTypes.bool,
};

ApplyButton.defaultProps = {
  isSidebar: false,
};

export default ApplyButton;