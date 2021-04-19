import { List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { FOOTER_SOCIALS, FOOTER_LINKS } from "../../constants/footer";

const useStyles = makeStyles((theme) => ({
  footerText: {
    fontFamily: theme.typography.fontFamily,
    fontStyle: "normal",
  },
  linksHeader: {
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "32px",
    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
      lineHeight: "36px",
    },
  },
  linkText: {
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "16px",

    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
      lineHeight: "22px",
    },
    color: "#000",
  },
  padding: {
    padding: "0",
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
  socialsLink: {
    display: "flex",
    width: "24px",
    height: "24px",
    padding: "3px",
    margin: "3px",
    borderRadius: "50%",
    background: "#056839",
    color: "#fff",
    [theme.breakpoints.up("lg")]: {
      padding: "4px",
      margin: "4px",
    },

    "&:hover": {
      color: "#fff",
      background: "#04522d",
    },

    "& *": {
      margin: "auto",
    },
  },
  socials: {
    display: "flex",
  },
}));

const ExternalLink = ({ to, children }) => <a href={to}>{children}</a>;

const TopFooter = () => {
  const classes = useStyles();

  return (
    <Grid container span={1} className={classes.grid}>
      {FOOTER_LINKS.map((item) => (
        <Grid
          item
          key={item.name}
          xs={6}
          sm={4}
          md={2}
          className={classes.spacingBottom}
        >
          <Box>
            <Typography
              variant="h5"
              className={`${classes.linksHeader} ${classes.footerText}`}
            >
              {item.name}
            </Typography>
            <List className={classes.padding}>
              {item.links.map((link) => {
                const LinkComponent = link?.external ? ExternalLink : Link;

                return (
                  <ListItem className={classes.padding} key={link.name}>
                    <LinkComponent key={link.name} to={link.path}>
                      <ListItemText
                        primary={link.name}
                        className={`${classes.linkText} ${classes.footerText}`}
                      />
                    </LinkComponent>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Grid>
      ))}
      <Grid item xs={6} sm={4} md={4}>
        <Typography
          variant="h5"
          className={`${classes.linksHeader} ${classes.footerText}`}
        >
          {FOOTER_SOCIALS.name}
        </Typography>
        <Box className={classes.socials}>
          {FOOTER_SOCIALS.links.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className={classes.socialsLink}
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
