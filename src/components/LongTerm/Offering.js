import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import SectionWrapper from "shared/SectionWrapper";
import { ROUTES } from "src/constants/routes";
import Button from "../../shared/Button";
import TextSection from "../../shared/TextSection";
import useLongTermData from "../../hooks/queries/longTerm";

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    maxWidth: "870px",
    padding: theme.spacing(2),
  },

  text: {
    textAlign: "center",
    marginTop: "calc(5.28vw + 21px)",
  },

  row: {
    textAlign: "center",
  },

  iconRow: {
    width: "100%",
  },
}));

const Offering = () => {
  const {
    offering: {
      title,
      header,
      body: { body },
    },
    offeringCardsContent,
  } = useLongTermData();
  const classes = useStyles();

  return (
    <SectionWrapper
      bgColor="secondary"
      style={{ containerStyle: { display: "flex", justifyContent: "center" } }}
    >
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.mainWrapper}
      >
        <Grid item className={classes.row}>
          <TextSection title={title} header={header} />
        </Grid>

        <Grid item className={classes.iconRow}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="stretch"
          >
            {offeringCardsContent.map((card) => (
              <Grid item key={header} xs={12} sm={6} lg={3}>
                <TextSection header={card.header} body={card.body.body} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item className={classes.text}>
          <TextSection header={body} />
        </Grid>
        <Button
          text="Contact Us"
          style={{ marginTop: "24px" }}
          route={ROUTES.CONTACT_US}
        />
      </Grid>
    </SectionWrapper>
  );
};

export default Offering;
