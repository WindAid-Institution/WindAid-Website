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

    [theme.breakpoints.between(1200, 1251)]: {
      paddingLeft: "26px",
      paddingRight: "26px",
    },

    [theme.breakpoints.up("lg")]: {
      display: "block",
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
    color: theme.palette.secondary.main,
    textDecoration: "none",
    borderBottom: `3px solid ${theme.palette.secondary.main}`,
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
