import { Toolbar } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import TopFooter from "./TopFooter";

const useStyles = makeStyles(() => ({
  footer: {
    borderTop: "1px solid #056839",
    background: "#FBF6EE",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <TopFooter />
      <Toolbar>
        © 2021 WindAid Institute Registered NGO | Privacy Statement Terms and
        Conditions | All rights reserved
      </Toolbar>
    </footer>
  );
};

export default Footer;
