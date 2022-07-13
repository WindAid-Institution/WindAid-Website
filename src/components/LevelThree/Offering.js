import React from "react";
import { Grid } from "@mui/material";

import SectionWrapper from "shared/SectionWrapper";
import { ROUTES } from "src/constants/routes";
import useTheme from "@mui/material/styles/useTheme";
import Button from "../../shared/Button";
import TextSection from "../../shared/TextSection";
import useLongTermData from "../../hooks/queries/levelThree";

const Offering = () => {
  const {
    offering: {
      title,
      header,
      body: { body },
    },
    offeringCardsContent,
  } = useLongTermData();
  const theme = useTheme();

  const classes = {
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
  };

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
        justifyContent="center"
        alignItems="center"
        sx={classes.mainWrapper}
      >
        <Grid item sx={classes.row} xs={12} md={8}>
          <TextSection title={title} />
          <TextSection header={header} style={headerStyle} />
        </Grid>

        <Grid item sx={classes.iconRow}>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="stretch"
            spacing={5}
          >
            {offeringCardsContent.map((card) => (
              <Grid
                item
                key={card.header}
                xs={12}
                sm={6}
                lg={3}
                sx={classes.row}
              >
                <TextSection header={card.header} body={card.body.body} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item sx={classes.text} xs={12} md={8}>
          <TextSection header={body} />
        </Grid>
        <Grid item xs={12} sx={classes.row}>
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
