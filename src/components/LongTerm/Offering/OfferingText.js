import React from "react";
import { useTheme } from "@material-ui/core/styles";

import TextSection from "shared/TextSection";
import useLongTermData from "queries/longTerm";
import useWindowSize from "hooks/useWindowSize";

const OfferingText = () => {
  const {
    offering: {
      title,
      body: { body },
      bodyTwo: { bodyTwo },
    },
  } = useLongTermData();

  const theme = useTheme();
  const { width } = useWindowSize();
  const isLgScreen = width >= theme.breakpoints.values.lg;

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
