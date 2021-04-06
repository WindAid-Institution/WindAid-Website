import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import TopFooter from "./TopFooter";
import BottomFooter from "./BottomFooter";

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
      <BottomFooter />
    </footer>
  );
};

export default Footer;
