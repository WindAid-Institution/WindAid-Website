import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import ApplyButton from "components/ApplyButton";

import useShortTermData from "queries/shortTerm";

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: "flex",
    justifyContent: "center",

    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
    },
  },
}));

const Volunteers = () => {
  const {
    volunteers: {
      header,
      body: { body },
    },
  } = useShortTermData();

  const classes = useStyles();

  return (
    <SectionWrapper style={{ sectionStyle: { paddingTop: "0" } }}>
      <TextSection subHeader={header} body={body} size="md" />
      <Box className={classes.buttonContainer}>
        <ApplyButton />
      </Box>
    </SectionWrapper>
  );
};
export default Volunteers;
