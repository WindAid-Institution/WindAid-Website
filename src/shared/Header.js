import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useTheme from "@mui/material/styles/useTheme";

const Header = ({ header, style }) => {
  const { rootStyle, textStyle } = style || {};
  const theme = useTheme();

  const classes = {
    root: {
      width: "auto",
      marginBottom: theme.spacing(1),
      ...rootStyle,
    },
    text: {
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
    },
  };

  return (
    <Box sx={classes.root}>
      <Typography variant="h2" sx={classes.text}>
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
