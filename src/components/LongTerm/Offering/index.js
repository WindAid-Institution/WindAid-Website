import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import SectionWrapper from "shared/SectionWrapper";
import OfferingText from "./OfferingText";
import OfferingList from "./OfferingList";
import ImagesWrapper from "./ImagesWrapper";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },
  textContainer: {
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      alignItems: "center",
    },
  },
}));

const Offering = () => {
  const classes = useStyles();

  return (
    <SectionWrapper style={{ sectionStyle: { paddingTop: 0 } }}>
      <ImagesWrapper>
        <Grid container className={classes.container}>
          <Grid className={classes.textContainer} container spacing={2}>
            <Grid item xs={12} lg={6}>
              <OfferingText />
            </Grid>
            <Grid item xs={12} lg={5}>
              <OfferingList />
            </Grid>
          </Grid>
        </Grid>
      </ImagesWrapper>
    </SectionWrapper>
  );
};

export default Offering;
