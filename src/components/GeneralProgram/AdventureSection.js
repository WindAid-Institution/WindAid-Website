import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import Body from "shared/Body";
import Header from "shared/Header";
import SubHeader from "shared/SubHeader";
import Button from "shared/Button";
import useGeneralProgramData from "queries/generalProgram";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: "calc(4vw + 24px)",
    height: "auto",
    position: "relative",
  },
  title: {
    width: "100%",
    color: theme.palette.primary.dark,
  },
  articleBody: {
    width: "100%",
    maxWidth: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "90",
    },
    [theme.breakpoints.up("md")]: {
      width: "calc(15vw + 300px)",
    },
  },
  boldQuestion: {
    color: theme.palette.primary.dark,
    fontSize: "18px",
    lineHeight: "24px",
    [theme.breakpoints.up("md")]: {
      fontSize: "24px",
      lineHeight: "36px",
    },
  },
  contentBox: {
    width: "100%",
    paddingTop: "calc(4vw + 24px)",
    paddingBottom: "calc(280px - 6vw)",
    paddingRight: "32px",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "32px",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "calc(45vw)",
    },
  },
  background: {
    zIndex: "-1",
    top: 0,
    height: "100%",
    width: "100%",
    position: "absolute",
  },
}));

const AdventureSection = () => {
  const classes = useStyles();

  const {
    adventure: {
      header,
      subHeader,
      body: { body },
      image,
    },
  } = useGeneralProgramData();

  return (
    <Box component="section" className={classes.wrapper}>
      <Box className={classes.contentBox}>
        <Box className="container">
          <Header header={header} className={classes.title} />
          <Body body={body} className={classes.articleBody} />
          <SubHeader subHeader={subHeader} className={classes.boldQuestion} />
          <Button text="Explore trujillo" />
        </Box>
      </Box>
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className={classes.background}
      />
    </Box>
  );
};

export default AdventureSection;
