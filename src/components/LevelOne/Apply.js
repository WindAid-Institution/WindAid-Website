import React from "react";

import { ROUTES } from "src/constants/routes";
import useLevelOneData from "queries/levelOne";
import { useTheme } from "@mui/material/styles";
import SectionWrapper from "../../shared/SectionWrapper";
import TextSection from "../../shared/TextSection";
import Button from "../../shared/Button";

const Apply = () => {
  const { applyDescription } = useLevelOneData();
  const theme = useTheme();
  const textStyle = {
    subHeaderStyle: {
      textStyle: {
        color: theme.palette.primary.main,
        textAlign: "center",
      },
    },
  };

  const sectionStyle = {
    containerStyle: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "24px",
    },
    sectionStyle: {
      paddingTop: 0,
    },
  };
  return (
    <SectionWrapper bgColor="secondary" style={sectionStyle}>
      <TextSection subHeader={applyDescription.header} style={textStyle} />
      <Button
        text="Volunteer Opportunities"
        route={ROUTES.VOLUNTEER_PROGRAMS}
      />
    </SectionWrapper>
  );
};

export default Apply;
