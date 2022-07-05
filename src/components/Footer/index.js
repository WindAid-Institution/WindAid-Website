import React from "react";
import { makeStyles } from "@mui/styles";

import TopFooter from "./TopFooter";
import BottomFooter from "./BottomFooter";

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: "1px solid #056839",
    background: theme.palette.secondary.footer,

    "& a:hover": {
      textDecoration: "none",
    },
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
