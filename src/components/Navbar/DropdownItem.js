import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = makeStyles(() => {
  const theme = useTheme();
  return {
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
        fontFamily: theme.typography.fontFamily,
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
        height: "auto",
        boxShadow: "rgb(0, 0 ,0) 5px 5px 80px 5px",
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
        boxShadow: "rgb(0, 0 ,0) 5px 5px 80px 5px",
      },
    },

    primary: {
      cursor: "pointer",
      paddingLeft: theme.spacing(2),
      backgroundColor: theme.palette.primary.main,

      [theme.breakpoints.up("lg")]: {
        paddingLeft: theme.spacing(4),
        backgroundColor: "#FBF6EE",
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
  };
});

const DropdownItem = ({ route, isSidebar }) => {
  const theme = useTheme();
  const styles = useStyles();
  const { main, submenu } = route || {};
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
        styles.navItem,
        isPrimary && styles.primary,
        isSecondary && styles.secondary,
        isSidebar && styles.navItemSidebar
      )}
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
      className={clsx(styles.navItem, isSidebar && styles.navItemSidebar)}
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
      sx={{
        display: "flex",
        position: "relative",
        flexDirection: { md: "column", lg: "row" },
        width: { md: "100%", lg: "auto" },
        alignItems: "center",
        cursor: "pointer",

        // [theme.breakpoints.up("lg")]: {
        //   flexDirection: "row",
        //   width: "auto",
        // },
      }}
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
          sx={{
            position: { md: "relative", lg: "absolute" },

            display: "flex",
            flexDirection: "column",
            left: { lg: "0" },
            top: { lg: "82px" },
            width: { md: "100%", lg: "250px" },
            height: { lg: "auto" },
            boxShadow: { lg: "rgb(0, 0 ,0) 5px 5px 80px 5px" },

            // [theme.breakpoints.up("lg")]: {
            //   position: "absolute",
            //   left: 0,
            //   top: "82px",
            //   width: "250px",
            //   height: "auto",
            //   boxShadow: "rgb(0, 0 ,0) 5px 5px 80px 5px",
            // },
          }}
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
                    sx={{
                      position: { md: "relative", lg: "absolute" },
                      display: "flex",
                      flexDirection: "column",
                      left: { lg: "250px" },
                      width: { lg: "250px" },
                      boxShadow: { lg: "rgb(0, 0 ,0) 5px 5px 80px 5px" },

                      // [theme.breakpoints.up("lg")]: {
                      //   position: "absolute",
                      //   left: "250px",
                      //   width: "250px",
                      //   boxShadow: "rgb(0, 0 ,0) 5px 5px 80px 5px",
                      // },
                    }}
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
