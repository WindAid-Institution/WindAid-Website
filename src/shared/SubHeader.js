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
    fontSize: "18px",
    lineHeight: "24px",
    color: theme.palette.primary.dark,
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(1),
    ...textStyle,

    [theme.breakpoints.up("sm")]: {
      fontSize: "24px",
      lineHeight: "36px",
      ...textStyle,
    },
  }),
}));

const SubHeader = ({ subHeader, style }) => {
  const { rootStyle, textStyle } = style || {};
  const classes = useStyles({ rootStyle, textStyle });

  return (
    <Box className={classes.root} style={style}>
      <Typography variant="h3" className={classes.text}>
        {subHeader}
      </Typography>
    </Box>
  );
};

SubHeader.propTypes = {
  subHeader: PropTypes.string.isRequired,
  style: PropTypes.object,
};
SubHeader.defaultProps = {
  style: {},
};

export default SubHeader;
