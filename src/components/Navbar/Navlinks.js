import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import { NAVBAR_ROUTES } from "src/constants/routes";

const useStyles = makeStyles((theme) => ({
  navItem: {
    maxHeight: "80px",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: "16px",
    color: theme.palette.secondary.main,
    padding: "28px 32px 32px 32px",
    display: "none",
    textDecoration: "none",
    position: "relative",

    [theme.breakpoints.between(1200, 1251)]: {
      paddingLeft: "26px",
      paddingRight: "26px",
    },

    [theme.breakpoints.up("lg")]: {
      display: "inline-block",
    },

    "&:after": {
      transition: "all 0.5s ease",
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      margin: "auto",
      width: "0%",
      // eslint-disable-next-line quotes
      content: '"."',
      color: "transparent",
      background: theme.palette.primary.main,
      height: "3px",

      [theme.breakpoints.up("lg")]: {
        background: theme.palette.secondary.main,
      },
    },

    "&:hover:after": {
      width: "100%",
    },

    "&:hover": {
      color: theme.palette.primary.main,
      textDecoration: "none",
      [theme.breakpoints.up("lg")]: {
        color: theme.palette.secondary.main,
      },
    },
  },

  navItemActive: {
    "&:after": {
      transition: "all 0.5s ease",
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      margin: "auto",
      width: "100%",
      // eslint-disable-next-line quotes
      content: '"."',
      color: "transparent",
      background: theme.palette.primary.main,
      height: "3px",

      [theme.breakpoints.up("lg")]: {
        background: theme.palette.secondary.main,
      },
    },
  },

  navItemSidebar: {
    display: "block",
    color: theme.palette.primary.dark,
  },
}));

const NavLinks = ({ isSidebar }) => {
  const classes = useStyles();
  return (
    <>
      {NAVBAR_ROUTES.map(({ name, path }) => (
        <Link
          key={name}
          className={clsx(classes.navItem, isSidebar && classes.navItemSidebar)}
          activeClassName={classes.navItemActive}
          to={path}
        >
          {name}
        </Link>
      ))}
    </>
  );
};

NavLinks.propTypes = {
  isSidebar: PropTypes.bool,
};
NavLinks.defaultProps = {
  isSidebar: false,
};

export default NavLinks;
