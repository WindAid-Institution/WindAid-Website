import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import useTheme from "@mui/material/styles/useTheme";
import { useCountUp } from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const useStyles = makeStyles(() => {
  const theme = useTheme();
  return {
    numbers: {
      fontFamily: theme.typography.fontFamily,
      fontSize: "45px",
      fontWeight: "600",
      margin: "16px 0 0 0",
      [theme.breakpoints.up("md")]: {
        fontSize: "60px",
      },
    },
    iconText: {
      fontFamily: theme.typography.fontFamily,
      fontSize: "16px",
      fontWeight: "400",
      textAlign: "center",
      maxWidth: "237px",
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        fontSize: "18px",
      },
    },
    contentContainer: {
      paddingTop: "calc(4.4vw + 16px)",
    },
  };
});

const StatisticsItem = ({ title, statsNumbers, file, isPlusSign }) => {
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
};

StatisticsItem.propTypes = {
  title: PropTypes.string.isRequired,
  statsNumbers: PropTypes.string.isRequired,
  file: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  isPlusSign: PropTypes.bool,
};

StatisticsItem.defaultProps = {
  isPlusSign: false,
};

export default StatisticsItem;
