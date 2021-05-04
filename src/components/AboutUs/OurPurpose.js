import React from "react";

import useAboutUsData from "queries/aboutUs";
import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";

const OurPurpose = () => {
  const {
    purpose: {
      header,
      title,
      body: { body },
    },
  } = useAboutUsData();

  return (
    <SectionWrapper
      bgColor="secondary"
      style={{
        sectionStyle: {
          paddingBottom: 0,
        },
      }}
    >
      <TextSection header={header} title={title} body={body} size="lg" />
    </SectionWrapper>
  );
};
export default OurPurpose;
