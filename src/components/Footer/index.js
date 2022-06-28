import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useTheme from "@mui/material/styles/useTheme";

import TopFooter from "./TopFooter";
import BottomFooter from "./BottomFooter";

const useStyles = makeStyles(() => {
  const theme = useTheme();
  return {
    footer: {
      borderTop: "1px solid #056839",
      background: theme.palette.secondary.dark,

      "& a:hover": {
        textDecoration: "none",
      },
    },
  };
});

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
