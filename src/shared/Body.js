import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const getBoxSize = (size) => {
  switch (size) {
    case "sm":
      return "calc(20vw + 219px)";

    case "md":
      return "calc(30.4vw + 219px";

    case "lg":
      return "calc(41.1vw + 160px";

    default:
      return "calc(30.4vw + 219px";
  }
};

const useStyles = makeStyles((theme) => ({
  root: ({ size, rootStyle }) => ({
    width: getBoxSize(size),
    ...rootStyle,
  }),

  text: ({ textStyle }) => ({
    fontSize: "14px",
    lineHeight: "28px",
    color: "#282828",
    ...textStyle,

    [theme.breakpoints.up("sm")]: {
      fontSize: "16px",
    },
  }),
}));

const Body = ({ body, style, size }) => {
  const { rootStyle, textStyle } = style || {};
  const classes = useStyles({ size, rootStyle, textStyle });
  return (
    <Box className={classes.root}>
      <Typography className={classes.text} style={style}>
        <ReactMarkdown>{body}</ReactMarkdown>
      </Typography>
    </Box>
  );
};

Body.propTypes = {
  body: PropTypes.string.isRequired,
  style: PropTypes.object,
  size: PropTypes.string.isRequired,
};
Body.defaultProps = {
  style: {},
};

export default Body;
