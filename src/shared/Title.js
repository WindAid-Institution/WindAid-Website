import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import useTheme from "@mui/material/styles/useTheme";

const getBoxSize = (size) => {
  switch (size) {
    case "sm":
      return "calc(13.1vw + 263px)";

    case "md":
      return "calc(18.1vw + 263px)";

    case "lg":
      return "calc(30.4vw + 219px)";

    case "full":
      return "100%";

    case "auto":
      return "auto";

    default:
      return size;
  }
};

const useStyles = makeStyles(() => {
  const theme = useTheme();
  return {
    root: ({ size, rootStyle }) => ({
      width: getBoxSize(size),
      marginBottom: theme.spacing(1),
      ...rootStyle,
    }),
    text: ({ textStyle }) => ({
      fontSize: "20px",
      lineHeight: "30px",
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(1),
      fontFamily: theme.typography.fontFamily,
      ...textStyle,

      [theme.breakpoints.up("sm")]: {
        fontSize: "26px",
        lineHeight: "40px",
        fontFamily: theme.typography.fontFamily,
        ...textStyle,
      },

      [theme.breakpoints.up("md")]: {
        fontSize: "28px",
        lineHeight: "40px",
        fontFamily: theme.typography.fontFamily,

        ...textStyle,
      },
    }),
  };
});

const Title = ({ title, style, size }) => {
  const { rootStyle, textStyle } = style || {};
  const classes = useStyles({ size, rootStyle, textStyle });

  return (
    <Box className={classes.root} style={style}>
      <Typography variant="h3" className={classes.text}>
        {title}
      </Typography>
    </Box>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string,
  style: PropTypes.object,
};
Title.defaultProps = {
  size: "auto",
  style: {},
};

export default Title;
