import React from "react";

import { Link } from "gatsby";
import PropTypes from "prop-types";
import { FOOTER_LINKS, FOOTER_SOCIALS } from "src/constants/footer";

import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";

const ExternalLink = ({ to, children }) => <a href={to}>{children}</a>;

const TopFooter = () => {
  const theme = useTheme();

  const classes = {
    linksHeader: {
      fontFamily: theme.typography.fontFamily,
      fontStyle: "normal",
      fontSize: "18px",
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: "32px",
      [theme.breakpoints.down("md")]: {
        fontSize: "24px",
        lineHeight: "36px",
      },
    },
    linkText: {
      fontSize: "14px",
      lineHeight: "16px",
      padding: "0",

      [theme.breakpoints.down("md")]: {
        fontSize: "18px",
        lineHeight: "22px",
      },
      color: theme.palette.primary.dark,
    },
    spacingBottom: {
      marginBottom: "16px",
    },
    grid: {
      margin: "auto",
      [theme.breakpoints.down("md")]: {
        padding: "40px 15px",
      },
      [theme.breakpoints.up("md")]: {
        padding: "80px 15px",
        maxWidth: "1110px",
      },
    },
    listItem: {
      padding: "0",
      fontFamily: theme.typography.fontFamily,
      fontWeight: "normal",
      fontSize: "18px",

      "& > a": {
        textDecoration: "none",
      },
    },
    socialsLink: {
      display: "flex",
      width: "24px",
      height: "24px",
      padding: "3px",
      margin: "3px",
      borderRadius: "50%",
      background: theme.palette.primary.main,
      color: theme.palette.secondary.main,
      textDecoration: "none",
      justifyContent: "center",
      alignItems: "center",

      [theme.breakpoints.up("lg")]: {
        padding: "4px",
        margin: "4px",
      },

      "&:hover": {
        color: theme.palette.secondary.main,
        background: theme.palette.primary.main,
      },

      "& *": {
        margin: "auto",
      },
    },
    socials: {
      display: "flex",
    },
  };

  return (
    <Grid container span={1} sx={classes.grid}>
      {FOOTER_LINKS.map((item) => (
        <Grid
          item
          key={item.name}
          xs={6}
          sm={4}
          md={2}
          sx={classes.spacingBottom}
        >
          <Box>
            <Typography variant="h2" sx={classes.linksHeader}>
              {item.name}
            </Typography>
            <List sx={classes.padding}>
              {item.links.map((link) => {
                const LinkComponent = link?.external ? ExternalLink : Link;

                return (
                  <ListItem sx={classes.listItem} key={link.name}>
                    <LinkComponent key={link.name} to={link.path}>
                      <ListItemText primary={link.name} sx={classes.linkText} />
                    </LinkComponent>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Grid>
      ))}
      <Grid item xs={6} sm={4} md={4}>
        <Typography variant="h2" sx={classes.linksHeader}>
          {FOOTER_SOCIALS.name}
        </Typography>
        <Box sx={classes.socials}>
          {FOOTER_SOCIALS.links.map((item) => (
            <a
              key={item.name}
              href={item.link}
              style={classes.socialsLink}
              target="blank"
            >
              {item.icon}
            </a>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

ExternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default TopFooter;
