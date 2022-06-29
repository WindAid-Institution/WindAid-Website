import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
  bar: {
    display: "flex",
    justifyContent: "center",
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: "16px",

    "& p": {
      margin: 0,
      marginLeft: "4px",

      fontFamily: theme.typography.fontFamily,
      fontSize: "14px",
      lineHeight: "16px",

      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
      },
    },
  },
  privacyText: {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    display: "flex",
    justifyContent: "center",
    maxWidth: "1110px",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },

    "& > p": {
      color: theme.palette.secondary.main,
    },
  },
}));

const BottomFooter = () => {
  const classes = useStyles();
  const year = new Date().getFullYear();
  return (
    <Box className={classes.bar}>
      <Box className={classes.privacyText}>
        <Typography> {`© ${year} WindAid Institute Registered NGO`}</Typography>
        <Typography> | Privacy Statement Terms and Conditions </Typography>
        <Typography> | All rights reserved</Typography>
      </Box>
    </Box>
  );
};

export default BottomFooter;
