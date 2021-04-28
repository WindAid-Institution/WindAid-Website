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
    maxHeight: "80px",

    padding: "28px 32px 32px 32px",
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
      bottom: 0,
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
  },

  subMenu: {
    position: "absolute",
    left: 0,
    top: "80px",
    width: "305px",
    height: "64px",
    display: "flex",
    flexDirection: "column",
  },
  subSubMenu: {
    position: "absolute",
    left: "305px",
    width: "305px",
    display: "flex",
    flexDirection: "column",
  },

  primary: {
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.secondary.main,
    cursor: "pointer",

    "& > p": {
      color: theme.palette.primary.dark,
      fontWeight: theme.typography.fontWeightRegular,
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
    backgroundColor: theme.palette.secondary.main,
    cursor: "pointer",

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

  const NavItem = ({
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

  NavItem.propTypes = {
    linkName: PropTypes.string.isRequired,
    linkPath: PropTypes.string.isRequired,
    isPrimary: PropTypes.bool,
    isSecondary: PropTypes.bool,
    hasSubmenu: PropTypes.bool,
  };

  NavItem.defaultProps = {
    isPrimary: false,
    isSecondary: false,
    hasSubmenu: false,
  };

  return (
    <Box
      className={classes.root}
      onMouseEnter={handleSubmenuOpen}
      onMouseLeave={handleSubmenuClose}
    >
      <NavItem linkName={main.name} linkPath={main.path} isMain />
      {isUpLg && isSubmenuOpen && submenu?.length && (
        <Box className={classes.subMenu} onMouseLeave={handleSubmenuClose}>
          {submenu.map((item) => {
            const isSubSubmenu = !!item?.subSubmenu?.length;

            return (
              <Fragment key={item.name}>
                <NavItem
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
                      <NavItem
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
