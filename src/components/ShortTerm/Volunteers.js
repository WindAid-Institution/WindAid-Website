import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import Button from "shared/Button";

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

  const currentYear = new Date().getFullYear();

  return (
    <SectionWrapper style={{ sectionStyle: { paddingTop: "0" } }}>
      <TextSection subHeader={header} body={body} size="md" />
      <Box className={classes.buttonContainer}>
        <Button
          text={`Apply now for the ${currentYear} programs`}
          style={{ marginTop: "32px" }}
        />
      </Box>
    </SectionWrapper>
  );
};
export default Volunteers;
