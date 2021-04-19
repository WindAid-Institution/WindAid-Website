import React from "react";

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

  const { width: windowWidth } = useWindowSize();
  const isLgScreen = windowWidth >= 1200;

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
