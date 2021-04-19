import React from "react";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";

import useLongTermData from "queries/longTerm";

const ExampleProjects = () => {
  const {
    exampleProjects: {
      title,
      body: { body },
    },
  } = useLongTermData();

  return (
    <SectionWrapper bgColor="secondary">
      <TextSection title={title} body={body} size="lg" />
    </SectionWrapper>
  );
};
export default ExampleProjects;
