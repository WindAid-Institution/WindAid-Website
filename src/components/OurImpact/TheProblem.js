import React from "react";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";

import useOurImpactData from "queries/ourImpact";

const TheProblem = () => {
  const {
    theProblem: {
      header,
      title,
      body: { body },
    },
  } = useOurImpactData();

  return (
    <SectionWrapper>
      <TextSection header={header} title={title} body={body} size="lg" />
    </SectionWrapper>
  );
};
export default TheProblem;
