import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: ({ rootStyle }) => ({
    width: "auto",
    marginBottom: theme.spacing(1),
    ...rootStyle,
  }),
  text: ({ textStyle }) => ({
    width: "auto",
    fontSize: "18px",
    lineHeight: "24px",
    color: "#1d1d1d",
    fontWeight: theme.typography.fontWeightBold,
    ...textStyle,

    [theme.breakpoints.up("sm")]: {
      fontSize: "24px",
      lineHeight: "36px",
      ...textStyle,
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "24px",
      lineHeight: "36px",
      ...textStyle,
    },
  }),
}));

const Header = ({ header, style }) => {
  const { rootStyle, textStyle } = style || {};

  const classes = useStyles({ rootStyle, textStyle });

  return (
    <Box className={classes.root}>
      <Typography variant="h2" className={classes.text}>
        {header}
      </Typography>
    </Box>
  );
};

Header.propTypes = {
  header: PropTypes.string.isRequired,
  style: PropTypes.object,
};
Header.defaultProps = {
  style: {},
};

export default Header;
