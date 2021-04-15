import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import Body from "shared/Body";
import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import useOurImpactData from "queries/ourImpact";

import ImagesWithText from "./ImagesWithText";

const useStyles = makeStyles((theme) => ({
  textContainer: {
    paddingBottom: "24px",
  },
  bodyTwoContainer: {
    display: "none",

    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

const WhoWereServing = () => {
  const {
    whoWereServing: {
      header,
      title,
      body: { body },
      bodyTwo: { bodyTwo },
    },
  } = useOurImpactData();

  const classes = useStyles();

  return (
    <SectionWrapper bgColor="secondary">
      <Box className={classes.textContainer}>
        <TextSection
          header={header}
          title={title}
          body={body}
          bodyTwo={bodyTwo}
          size="lg"
        />
      </Box>
      <Box className={classes.bodyTwoContainer}>
        <Body body={bodyTwo} size="lg" />
      </Box>
      <ImagesWithText />
    </SectionWrapper>
  );
};

export default WhoWereServing;
