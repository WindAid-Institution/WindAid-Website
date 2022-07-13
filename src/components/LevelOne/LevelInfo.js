import React from "react";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { ROUTES } from "src/constants/routes";
import SectionWrapper from "shared/SectionWrapper";
import TextSection from "../../shared/TextSection";
import InfoCard from "../../shared/InfoCard/InfoCard";
import useLevelOneData from "../../hooks/queries/levelOne";
import Button from "../../shared/Button";

const LevelInfo = () => {
  const theme = useTheme();

  const {
    infoCard: {
      title: { title },
      price,
      note: { note },
      programDates: { heading: programHeading, data: programDates },
      included: { included },
      notIncluded: { notIncluded },
      image,
    },
  } = useLevelOneData();

  const classes = {
    infoContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "80px",
      alignItems: "center",
    },
    topTextContainer: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      width: "100%",
      maxWidth: "1200px",
      textAlign: "center",
    },
  };

  const data = {
    title,
    price,
    note,
    programDates,
    programHeading,
    included,
    notIncluded,
    image,
  };

  const textStyle = {
    rootStyle: {
      marginBottom: "30px",
    },
    subHeaderStyle: {
      textStyle: {
        color: theme.palette.primary.main,
      },
    },
  };

  return (
    <SectionWrapper bgColor="secondary">
      <Grid container sx={classes.infoContainer}>
        <Grid item xs={12} lg={6} sx={classes.topTextContainer}>
          <TextSection
            header="Have more questions about this program?"
            style={textStyle}
          />
          <Button text="Contact Us" route={ROUTES.CONTACT_US} />
        </Grid>
        <Grid item xs={12}>
          <InfoCard {...data} />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default LevelInfo;
