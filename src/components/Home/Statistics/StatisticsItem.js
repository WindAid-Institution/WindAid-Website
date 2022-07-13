import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import useTheme from "@mui/material/styles/useTheme";
import { useCountUp } from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const StatisticsItem = ({ title, statsNumbers, file, isPlusSign }) => {
  const theme = useTheme();

  const classes = {
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
        sx={classes.contentContainer}
      >
        <img src={file.url} alt={title} />
        <p style={classes.numbers}>
          {countUp}
          {isPlusSign && "+"}
        </p>
        <p style={classes.iconText}>{title}</p>
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
