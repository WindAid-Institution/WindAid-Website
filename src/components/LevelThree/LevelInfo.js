import React from "react";

import SectionWrapper from "shared/SectionWrapper";
import useLongTermData from "queries/levelThree";
import InfoCard from "../../shared/InfoCard/InfoCard";

const LevelInfo = () => {
  const {
    infoCard: {
      title: { title },
      price,
      note: { note },
      programDates: { heading: programHeading, data: programDates },
      included: { included },
      notIncluded: { notIncluded },
      image,
    },
  } = useLongTermData();

  const data = {
    title,
    price,
    note,
    programDates,
    programHeading,
    included,
    notIncluded,
    image,
  };

  return (
    <SectionWrapper bgColor="secondary">
      <InfoCard {...data} />
    </SectionWrapper>
  );
};
export default LevelInfo;
