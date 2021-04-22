import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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

const useStyles = makeStyles((theme) => ({
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
    ...textStyle,

    [theme.breakpoints.up("sm")]: {
      fontSize: "26px",
      lineHeight: "36px",
      ...textStyle,
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "28px",
      lineHeight: "40px",
      ...textStyle,
    },
  }),
}));

const Title = ({ title, style, size }) => {
  const { rootStyle, textStyle } = style || {};
  const classes = useStyles({ size, rootStyle, textStyle });
  console.log(textStyle);
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
