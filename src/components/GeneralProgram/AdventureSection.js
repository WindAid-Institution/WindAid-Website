import React from "react";
import { getSrc } from "gatsby-plugin-image";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import { ROUTES } from "src/constants/routes";
import Body from "shared/Body";
import Title from "shared/Title";
import SubHeader from "shared/SubHeader";
import Button from "shared/Button";
import useGeneralProgramData from "queries/generalProgram";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    // marginTop: "calc(4vw + 24px)",
    height: "auto",
    position: "relative",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    [theme.breakpoints.up("lg")]: {
      height: "40vw",
      maxHeight: "900px",
    },
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
    paddingLeft: "16px",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "32px",
    },
    [theme.breakpoints.up("xmd")]: {
      paddingLeft: "calc(25vw)",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "calc(40vw)",
    },
    [theme.breakpoints.up("xl")]: {
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
  const theme = useTheme();

  const {
    adventure: {
      header: title,
      subHeader,
      body: { body },
      image,
    },
  } = useGeneralProgramData();

  const blackTextStyle = { textStyle: { color: theme.palette.primary.dark } };
  const imageSrc = getSrc(image);
  return (
    <Box
      component="section"
      style={{ backgroundImage: `url(${imageSrc})` }}
      className={classes.wrapper}
    >
      <Box className={classes.contentBox}>
        <Box>
          <Title
            title={title}
            className={classes.title}
            style={blackTextStyle}
          />
          <Body
            body={body}
            className={classes.articleBody}
            size="md"
            style={{ textStyle: { maxWidth: "600px" } }}
          />
          <SubHeader subHeader={subHeader} className={classes.boldQuestion} />
          <Button
            text="Explore trujillo"
            route={ROUTES.TRUJILLO}
            style={{ marginTop: theme.spacing(2) }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AdventureSection;
