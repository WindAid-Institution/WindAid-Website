import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import TextSection from "shared/TextSection";
import useLongTermData from "queries/longTerm";

const OfferingText = () => {
  const {
    offering: {
      title,
      body: { body },
      bodyTwo: { bodyTwo },
    },
  } = useLongTermData();

  const theme = useTheme();
  const isLgScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <TextSection
      title={title}
      body={body}
      bodyTwo={bodyTwo}
      size={isLgScreen ? "sm" : "lg"}
    />
  );
};
export default OfferingText;
