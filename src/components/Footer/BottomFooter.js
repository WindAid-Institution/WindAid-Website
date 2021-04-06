import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bar: {
    display: "flex",
    justifyContent: "center",
    background: "#056839",
    color: "#fff",
    padding: "16px",

    "& p": {
      margin: 0,
      marginLeft: "4px",

      fontFamily: "Open Sans",
      fontSize: "14px",
      lineHeight: "16px",

      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
      },
    },
  },
  privacyText: {
    background: "#056839",
    color: "#fff",
    display: "flex",
    maxWidth: "1110px",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
}));

const BottomFooter = () => {
  const classes = useStyles();

  return (
    <div className={classes.bar}>
      <div className={classes.privacyText}>
        <p> © 2021 WindAid Institute Registered NGO </p>
        <p> | Privacy Statement Terms and Conditions </p>
        <p> | All rights reserved</p>
      </div>
    </div>
  );
};

export default BottomFooter;
