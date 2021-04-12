import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { useCountUp } from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

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

export default function StatisticsItem({
  title,
  statsNumbers,
  file,
  isPlusSign,
}) {
  const classes = useStyles();
  const [isElementVisible, setIsElementVisible] = useState(false);

  const { countUp, start } = useCountUp({
    end: parseInt(statsNumbers, 10),
    delay: 1000,
    duration: 5,
  });

  const handleVisiblityChange = (isVisible) => {
    if (isVisible && !isElementVisible) {
      setIsElementVisible(true);
      start();
    }
  };
  return (
    <VisibilitySensor onChange={handleVisiblityChange}>
      <Box
        flexDirection="column"
        alignItems="center"
        display="flex"
        className={classes.contentContainer}
      >
        <img src={file.url} alt={title} />
        <p className={classes.numbers}>
          {countUp}
          {isPlusSign && "+"}
        </p>
        <p className={classes.iconText}>{title}</p>
      </Box>
    </VisibilitySensor>
  );
}
