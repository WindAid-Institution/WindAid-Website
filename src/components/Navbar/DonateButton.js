import React from "react";
import propTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const yellowColor = "#ffde15";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: yellowColor,
    color: theme.palette.primary.dark,
    height: "48px",
    minWidth: "220px",
    border: "none",
    display: "none",
    marginRight: "16px",

    [theme.breakpoints.up("sm")]: {
      display: "inline-flex",
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: 0,
      minWidth: "260px",
    },

    "&:hover": {
      backgroundColor: yellowColor,
    },
  },

  sidebar: {
    marginRight: 0,
    position: "absolute",
    bottom: "70px",
    display: "block",

    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const DonateButton = ({ isSidebar }) => {
  const classes = useStyles();
  return (
    <Button
      disableRipple
      className={clsx(classes.root, isSidebar && classes.sidebar)}
    >
      Donate
    </Button>
  );
};

DonateButton.propTypes = {
  isSidebar: propTypes.bool,
};

DonateButton.defaultProps = {
  isSidebar: false,
};

export default DonateButton;
