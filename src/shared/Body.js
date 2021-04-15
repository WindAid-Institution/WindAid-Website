import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const getBoxSize = (size) => {
  switch (size) {
    case "sm":
      return "calc(20vw + 219px)";

    case "md":
      return "calc(30.4vw + 219px)";

    case "lg":
      return "calc(41.1vw + 160px)";

    case "full":
      return "100%";

    case "auto":
      return "auto";

    default:
      return "auto";
  }
};

const useStyles = makeStyles((theme) => ({
  root: ({ size, rootStyle }) => ({
    width: getBoxSize(size),
    ...rootStyle,
  }),

  text: ({ textStyle }) => ({
    "& > p": {
      fontFamily: "Open Sans",
      fontSize: "14px",
      lineHeight: "28px",
      color: "#282828",
      marginBottom: 0,
      ...textStyle,

      [theme.breakpoints.up("sm")]: {
        fontSize: "16px",
        ...textStyle,
      },
    },
  }),
}));

const Body = ({ body, style, size }) => {
  const { rootStyle, textStyle } = style || {};

  const classes = useStyles({ size, rootStyle, textStyle });
  return (
    <Box className={classes.root}>
      <ReactMarkdown className={classes.text}>{body}</ReactMarkdown>
    </Box>
  );
};

Body.propTypes = {
  body: PropTypes.string.isRequired,
  size: PropTypes.string,
  style: PropTypes.object,
};
Body.defaultProps = {
  size: "auto",
  style: {},
};

export default Body;
