import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  navItem: {
    maxHeight: "40px",
    padding: "16px 0",
    display: "none",
    textDecoration: "none",
    position: "relative",

    "& > p": {
      fontSize: "16px",
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightBold,
    },

    [theme.breakpoints.between(1200, 1251)]: {
      paddingLeft: "26px",
      paddingRight: "26px",
    },

    [theme.breakpoints.up("lg")]: {
      display: "inline-block",
      maxHeight: "80px",

      padding: "28px 32px 32px 32px",
    },

    "&:after": {
      transition: "all 0.5s ease",
      position: "absolute",
      bottom: "2px",
      left: 0,
      right: 0,
      margin: "auto",
      width: "0%",
      // eslint-disable-next-line quotes
      content: '"."',
      color: "transparent",
      background: theme.palette.primary.main,
      height: "5px",

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
      bottom: "2px",
      left: 0,
      right: 0,
      margin: "auto",
      width: "100%",
      // eslint-disable-next-line quotes
      content: '"."',
      color: "transparent",
      background: theme.palette.primary.main,
      height: "5px",

      [theme.breakpoints.up("lg")]: {
        background: theme.palette.secondary.main,
      },
    },
  },

  navItemSidebar: {
    display: "block",

    "& > p": {
      color: theme.palette.primary.dark,
    },
  },

  root: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    cursor: "pointer",
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      width: "auto",
    },
  },

  subMenu: {
    position: "relative",

    display: "flex",
    flexDirection: "column",
    width: "100%",

    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      left: 0,
      top: "82px",
      width: "250px",
      height: "64px",
    },
  },
  subSubMenu: {
    position: "relative",
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      left: "250px",
      width: "250px",
    },
  },

  primary: {
    cursor: "pointer",
    paddingLeft: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,

    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.secondary.main,
    },

    "& > p": {
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightRegular,

      [theme.breakpoints.up("lg")]: {
        color: theme.palette.primary.dark,
      },
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },

    "&:hover > p": {
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.secondary.main,
    },

    "&:after": {
      display: "none",
    },
  },

  secondary: {
    color: theme.palette.primary.dark,
    backgroundColor: "#FBF6EE",
    cursor: "pointer",
    paddingLeft: theme.spacing(4),

    [theme.breakpoints.up("lg")]: {
      paddingLeft: "auto",
      backgroundColor: theme.palette.secondary.main,
    },
    "& > p": {
      color: theme.palette.primary.dark,
      fontWeight: theme.typography.fontWeightRegular,
    },

    "&:hover": {
      backgroundColor: "#FBF6EE",
    },

    "&:hover > p": {
      fontWeight: theme.typography.fontWeightBold,
    },

    "&:after": {
      bottom: 0,
      background: theme.palette.primary.main,
    },
  },
}));

const DropdownItem = ({ route, isSidebar }) => {
  const { main, submenu } = route || {};
  const classes = useStyles();
  const theme = useTheme();
  const isUpLg = useMediaQuery(theme.breakpoints.up("lg"));

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isSecondSubmenuOpen, setIsSecondSubmenuOpen] = useState(false);

  const handleSubmenuOpen = () => {
    setIsSubmenuOpen(true);
  };
  const handleSubmenuClose = () => {
    setIsSubmenuOpen(false);
  };
  const handleSecondSubmenuOpen = () => {
    setIsSecondSubmenuOpen(true);
  };
  const handleSecondSubmenuClose = () => {
    setIsSecondSubmenuOpen(false);
  };

  const NavItemLink = ({
    linkName,
    linkPath,
    isPrimary,
    isSecondary,
    hasSubmenu,
  }) => (
    <Link
      to={linkPath}
      className={clsx(
        classes.navItem,
        isPrimary && classes.primary,
        isSecondary && classes.secondary,
        isSidebar && classes.navItemSidebar
      )}
      activeClassName={classes.navItemActive}
      onMouseEnter={() => {
        if (isPrimary && hasSubmenu) {
          return handleSecondSubmenuOpen();
        }
        if (isSecondary) {
          handleSubmenuOpen();
          return handleSecondSubmenuOpen();
        }
        return null;
      }}
      onMouseLeave={() => {
        if (isPrimary && hasSubmenu) {
          return handleSecondSubmenuClose();
        }
        return null;
      }}
    >
      <Typography>{linkName}</Typography>
    </Link>
  );

  NavItemLink.propTypes = {
    linkName: PropTypes.string.isRequired,
    linkPath: PropTypes.string.isRequired,
    isPrimary: PropTypes.bool,
    isSecondary: PropTypes.bool,
    hasSubmenu: PropTypes.bool,
  };

  NavItemLink.defaultProps = {
    isPrimary: false,
    isSecondary: false,
    hasSubmenu: false,
  };

  const NavItem = ({ linkName, hasSubmenu }) => (
    <Box
      className={clsx(classes.navItem, isSidebar && classes.navItemSidebar)}
      onMouseEnter={() => {
        if (hasSubmenu && isUpLg) {
          return handleSubmenuOpen();
        }
        return null;
      }}
      onMouseLeave={() => {
        if (hasSubmenu && isUpLg) {
          return handleSubmenuClose();
        }
        return null;
      }}
    >
      <Typography>{linkName}</Typography>
    </Box>
  );

  NavItem.propTypes = {
    linkName: PropTypes.string.isRequired,
    hasSubmenu: PropTypes.bool,
  };

  NavItem.defaultProps = {
    hasSubmenu: false,
  };

  const handleMainMouseOver =
    isUpLg && !isSubmenuOpen ? handleSubmenuOpen : null;
  const handleMainMouseLeave = isUpLg ? handleSubmenuClose : null;
  const handleMainClick = () => {
    if (isUpLg) {
      return null;
    }

    if (!isSubmenuOpen) {
      return handleSubmenuOpen();
    }

    return handleSubmenuClose();
  };

  return (
    <Box
      className={classes.root}
      onMouseOver={handleMainMouseOver}
      onMouseLeave={handleMainMouseLeave}
      onClick={handleMainClick}
    >
      {submenu?.length ? (
        <NavItem linkName={main.name} linkPath={main.path} isMain />
      ) : (
        <NavItemLink linkName={main.name} linkPath={main.path} isMain />
      )}
      {isSubmenuOpen && submenu?.length && (
        <Box
          className={classes.subMenu}
          onMouseLeave={isUpLg ? handleSubmenuClose : null}
        >
          {submenu.map((item) => {
            const isSubSubmenu = !!item?.subSubmenu?.length;

            return (
              <Fragment key={item.name}>
                <NavItemLink
                  linkName={item.name}
                  linkPath={item.path}
                  isPrimary
                  onMouseEnter={isSubSubmenu ? handleSecondSubmenuOpen : null}
                  hasSubmenu={isSubSubmenu}
                />
                {isSecondSubmenuOpen && isSubSubmenu && (
                  <Box
                    className={classes.subSubMenu}
                    onMouseLeave={handleSecondSubmenuClose}
                  >
                    {item.subSubmenu.map(({ name, path }) => (
                      <NavItemLink
                        linkName={name}
                        linkPath={path}
                        key={name}
                        isSecondary
                      />
                    ))}
                  </Box>
                )}
              </Fragment>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

DropdownItem.propTypes = {
  route: PropTypes.object.isRequired,
  isSidebar: PropTypes.bool,
};

DropdownItem.defaultProps = {
  isSidebar: false,
};

export default DropdownItem;
