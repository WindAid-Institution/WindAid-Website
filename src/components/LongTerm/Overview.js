import React from "react";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";

import useLongTermData from "queries/longTerm";

const Overview = () => {
  const {
    overview: {
      header,
      title,
      body: { body },
    },
  } = useLongTermData();

  return (
    <SectionWrapper>
      <TextSection header={header} title={title} body={body} size="lg" />
    </SectionWrapper>
  );
};
export default Overview;
