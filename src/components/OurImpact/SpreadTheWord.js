import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import TextSection from "shared/TextSection";
import SectionWrapper from "shared/SectionWrapper";
import useOurImpactData from "queries/ourImpact";
import { BASIC_SOCIAL_LINKS } from "src/constants/footer";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    transition: "flex 0.2s ease",

    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },

  textContainer: {
    width: "auto",
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      width: "70%",
      paddingRight: "120px",
    },
  },

  linksContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    transition: "padding 0.2s ease, flex 0.2s ease",

    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      padding: "12px 0",
    },

    [theme.breakpoints.up("md")]: {
      width: "30%",
      flexDirection: "column",
      alignItems: "flex-start",
    },

    "& > a": {
      color: theme.palette.primary.dark,
      textDecoration: "none",
    },
  },
  linkContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "12px",
  },
  icon: {
    width: "50px",
    height: "50px",
    marginRight: "8px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    fontSize: "26px",
  },

  iconText: {
    fontWeight: theme.typography.fontWeightBold,

    [theme.breakpoints.up("sm")]: {
      display: "none",
    },

    [theme.breakpoints.up("md")]: {
      display: "inline-block",
    },
  },
}));
const SpreadTheWord = () => {
  const {
    spreadTheWord: {
      title,
      body: { body },
      bodyTwo: { bodyTwo },
    },
  } = useOurImpactData();

  const classes = useStyles();
  const theme = useTheme();

  return (
    <SectionWrapper bgColor={theme.palette.secondary.dark}>
      <Box className={classes.container}>
        <Box className={classes.textContainer}>
          <TextSection title={title} body={body} bodyTwo={bodyTwo} />
        </Box>
        <Box className={classes.linksContainer}>
          {BASIC_SOCIAL_LINKS.map(({ name, accName, icon, link }) => (
            <a key={name} href={link}>
              <Box className={classes.linkContainer}>
                <span className={classes.icon}>{icon}</span>{" "}
                <span className={classes.iconText}>{accName}</span>
              </Box>
            </a>
          ))}
        </Box>
      </Box>
    </SectionWrapper>
  );
};

export default SpreadTheWord;
