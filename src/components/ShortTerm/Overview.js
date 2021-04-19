import React from "react";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";

import useShortTermData from "queries/shortTerm";

const Overview = () => {
  const {
    overview: {
      header,
      title,
      body: { body },
    },
  } = useShortTermData();

  return (
    <SectionWrapper>
      <TextSection header={header} title={title} body={body} size="lg" />
    </SectionWrapper>
  );
};
export default Overview;
