import React from "react";

import useAmbassadorsData from "queries/ambassadors";
import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";

const OurAmbassadors = () => {
  const {
    ambassadors: {
      title,
      body: { body },
    },
  } = useAmbassadorsData();

  return (
    <SectionWrapper
      bgColor="secondary"
      style={{ sectionStyle: { paddingBottom: 0 } }}
    >
      <TextSection title={title} body={body} size="lg" />
    </SectionWrapper>
  );
};
export default OurAmbassadors;
