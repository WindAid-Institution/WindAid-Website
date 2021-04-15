import React from "react";

import useHomepageData from "queries/homepage";
import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";

const OurApproach = () => {
  const {
    ourApproach: {
      header,
      title,
      body: { body },
    },
  } = useHomepageData();

  return (
    <SectionWrapper>
      <TextSection header={header} title={title} body={body} size="md" />
    </SectionWrapper>
  );
};

export default OurApproach;
