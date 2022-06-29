import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

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
    fontFamily: theme.typography.fontFamily,

    [theme.breakpoints.up("sm")]: {
      fontSize: "24px",
      lineHeight: "36px",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "24px",
      lineHeight: "36px",
    },
    ...textStyle,
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
