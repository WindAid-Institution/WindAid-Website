import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const yelloColor = "#ffde15";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: yelloColor,
    color: theme.palette.primary.dark,
    height: "48px",
    width: "187px",
    border: "none",
    display: "none",
    marginRight: "16px",

    [theme.breakpoints.up("sm")]: {
      display: "inline-flex",
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: 0,
    },

    "&:hover": {
      backgroundColor: yelloColor,
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

export default DonateButton;
