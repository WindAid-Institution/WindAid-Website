import React from "react";
import useTheme from "@mui/material/styles/useTheme";

import TopFooter from "./TopFooter";
import BottomFooter from "./BottomFooter";

const Footer = () => {
  const theme = useTheme();
  const classes = {
    footer: {
      borderTop: "1px solid #056839",
      background: theme.palette.secondary.footer,

      "& a:hover": {
        textDecoration: "none",
      },
    },
  };

  return (
    <footer style={classes.footer}>
      <TopFooter />
      <BottomFooter />
    </footer>
  );
};

export default Footer;
