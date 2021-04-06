import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  numbers: {
    fontFamily: "Open Sans",
    fontSize: "60px",
    fontWeight: "600",
    margin: "0 0 0 0",
    [theme.breakpoints.down("md")]: {
      fontSize: "45px",
    },
  },
  iconText: {
    fontFamily: "Open Sans",
    fontSize: "18px",
    fontWeight: "400",
    textAlign: "center",
    maxWidth: "237px",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
  },
  contentContainer: {
    paddingTop: "42px",
  },
}));

export default function StatisticsItem({ icon, numberStats, iconText }) {
  const classes = useStyles();

  return (
    <Box
      flexDirection="column"
      alignItems="center"
      display="flex"
      className={classes.contentContainer}
    >
      {icon}
      <p className={classes.numbers}>{numberStats}</p>
      <p className={classes.iconText}>{iconText}</p>
    </Box>
  );
}
