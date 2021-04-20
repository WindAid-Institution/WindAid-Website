import React from "react";

import useHomepageData from "hooks/queries/homepage";
import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import MissionImages from "./MissionImages";

const OurMission = () => {
  const {
    ourMission: {
      header,
      title,
      body: { body },
      images,
    },
  } = useHomepageData();

  return (
    <>
      <SectionWrapper>
        <TextSection header={header} title={title} body={body} size="lg" />
      </SectionWrapper>
      <MissionImages imagesData={images} />
    </>
  );
};

export default OurMission;
