import React from "react";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import ApplyButton from "components/ApplyButton";

import useLongTermData from "queries/longTerm";

const ApplyNow = () => {
  const {
    apply: {
      title,
      body: { body },
      bodyTwo: { bodyTwo },
    },
  } = useLongTermData();

  return (
    <SectionWrapper>
      <TextSection title={title} body={body} bodyTwo={bodyTwo} size="lg" />

      <ApplyButton />
    </SectionWrapper>
  );
};
export default ApplyNow;
