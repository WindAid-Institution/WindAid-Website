import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "gatsby";
import clsx from "clsx";

import Title from "shared/Title";
import Button from "shared/Button";
import SectionWrapper from "shared/SectionWrapper";
import useHomepageData from "queries/homepage";
import { ROUTES } from "src/constants/routes";
import { splitQueriedList } from "src/utils/utils";
import Ghandi from "images/LandingPage/OurCoreWork/ghandi-video.svg";

const useStyles = makeStyles((theme) => ({
  center: {
    textAlign: "left",
    marginBottom: "12px",
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      marginBottom: "32px",
    },
  },

  contentContainer: {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    marginBottom: "24px",

    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  image: {
    height: "276px",
    width: "100%",

    // [theme.breakpoints.up("md")]: {
    //   width: "calc(17.8vw + 247px)",
    // },
  },

  list: {
    "padding-inline-start": "10px",

    [theme.breakpoints.up("md")]: {
      "padding-inline-start": "40px",
    },

    [theme.breakpoints.up("lg")]: {
      height: "276px",
    },

    "& >li": {
      marginBottom: "24px",

      [theme.breakpoints.up("md")]: {
        marginBottom: "8px",
      },
    },
  },

  fullWidth: {
    width: "100%",
  },
}));

const OurCoreWork = () => {
  const {
    ourCoreWork: {
      header,
      title,
      listItems: { listItems },
    },
  } = useHomepageData();

  const ourCoreWorkList = splitQueriedList(listItems);
  const classes = useStyles();

  return (
    <SectionWrapper bgColor="secondary">
      <Grid >
        <Grid item xs={12} className={classes.center}>
          <Title title={header} />
        </Grid>

        <Grid className={classes.contentContainer} container>
          <Grid
            item
            xs={12}
            md={6}
            className={clsx(classes.center, classes.fullWidth)}
          >
            <img className={classes.image} src={Ghandi} alt="ghandi-video" />
          </Grid>
          <Grid item xs={12} md={6}>
            <ul className={classes.list}>
              {ourCoreWorkList.map((item) => (
                <li key={item}>
                  <Typography>{item}</Typography>
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
        <Grid className={classes.buttonContainer} container>
          <Title
            title={title}
            style={{ textStyle: { color: "#000", textAlign: "center" } }}
          />
          <Link to={ROUTES.OUT_IMPACT.path}>
            <Button text="View Our Impact" />
          </Link>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default OurCoreWork;
