import { List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { Link } from "gatsby";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { FOOTER_SOCIALS, FOOTER_LINKS } from "../../constants/footer";

const useStyles = makeStyles((theme) => ({
  topFooterText: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
  },
  linksHeader: {
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "32px",
  },
  linkText: {
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "16px",
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
      padding: "40px 16px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "80px 0",
      maxWidth: "1140px",
    },
  },
  socialsLink: {
    width: "32px",
    height: "32px",
    padding: "4px",
    margin: "4px",
    borderRadius: "50%",
    background: "#056839",
    color: "#fff",
    [theme.breakpoints.up("lg")]: {
      padding: "4px",
      margin: "4px",
    },
  },
}));

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
          <div>
            <h5 className={`${classes.linksHeader} ${classes.topFooterText}`}>
              {item.name}
            </h5>
            <List className={classes.padding}>
              {item.links.map((link) => (
                <ListItem className={classes.padding}>
                  <Link key={item.name} to={item.links.path}>
                    <ListItemText
                      primary={link.name}
                      className={`${classes.linkText} ${classes.topFooterText}`}
                    />
                  </Link>
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
      ))}
      <Grid item xs={6} sm={4} md={4}>
        <h5 className={`${classes.linksHeader} ${classes.topFooterText}`}>
          {FOOTER_SOCIALS.name}
        </h5>
        <div className={classes.paddingHorizontal}>
          {FOOTER_SOCIALS.links.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className={classes.socialsLink}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </Grid>
    </Grid>
  );
};

export default TopFooter;
