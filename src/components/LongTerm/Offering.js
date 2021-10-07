import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import SectionWrapper from "shared/SectionWrapper";
import { ROUTES } from "src/constants/routes";
import Button from "../../shared/Button";
import TextSection from "../../shared/TextSection";
import useLongTermData from "../../hooks/queries/longTerm";

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    padding: theme.spacing(2),
  },

  header: {
    fontWeight: "bold",
    marginBottom: "41px",
  },

  text: {
    textAlign: "center",
    marginTop: "40px",
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

  const headerStyle = {
    headerStyle: {
      rootStyle: {
        paddingTop: "30px",
        paddingBottom: "30px",
      },
    },
  };

  return (
    <SectionWrapper
      bgColor="secondary"
      style={{ containerStyle: { display: "flex", justifyContent: "center" } }}
    >
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.mainWrapper}
      >
        <Grid item className={classes.row} xs={12} md={8}>
          <TextSection title={title} />
          <TextSection header={header} style={headerStyle} />
        </Grid>

        <Grid item className={classes.iconRow}>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="stretch"
            spacing={5}
          >
            {offeringCardsContent.map((card) => (
              <Grid
                item
                key={header}
                xs={12}
                sm={6}
                lg={3}
                className={classes.row}
              >
                <TextSection header={card.header} body={card.body.body} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item className={classes.text} xs={12} md={8}>
          <TextSection header={body} />
        </Grid>
        <Grid item xs={12} className={classes.row}>
          <Button
            text="Contact Us"
            style={{ marginTop: "24px" }}
            route={ROUTES.CONTACT_US}
          />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default Offering;
