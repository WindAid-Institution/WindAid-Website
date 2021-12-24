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
      return size;
  }
};

const useStyles = makeStyles((theme) => ({
  root: ({ size, rootStyle }) => ({
    width: getBoxSize(size),
    ...rootStyle,
  }),

  text: ({ size, textStyle }) => ({
    "& > p": {
      fontFamily: theme.typography.fontFamily,
      fontSize: "14px",
      lineHeight: "28px",
      [theme.breakpoints.up("sm")]: {
        fontSize: "16px",
      },
      maxWidth: size === "sm" ? "560px" : "850px",
      color: "#282828",
      marginBottom: theme.spacing(1),
      ...textStyle,

      [theme.breakpoints.up("sm")]: {
        fontSize: "16px",
        ...textStyle,
      },
    },

    "& > p > a": {
      color: theme.palette.primary.main,
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
