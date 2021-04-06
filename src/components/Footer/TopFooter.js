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
    padding: "0 16px",
  },
  linkText: {
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "16px",
  },
  padding: {
    paddingTop: "0",
    paddingBottom: "0",
  },
  grid: {
    maxWidth: "1140px",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      padding: "40px 0",
    },
    [theme.breakpoints.up("md")]: {
      padding: "80px 0",
    },
  },
}));

const TopFooter = () => {
  const classes = useStyles();

  return (
    <Grid container span={2} className={classes.grid}>
      {FOOTER_LINKS.map((item) => (
        <Grid item key={item.name} sm={6} md={2}>
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
      <Grid item sm={6} md={2}>
        <h5 className={`${classes.linksHeader} ${classes.topFooterText}`}>
          {FOOTER_SOCIALS.name}
        </h5>
      </Grid>
    </Grid>
  );
};

export default TopFooter;
