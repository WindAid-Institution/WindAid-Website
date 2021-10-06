import React from "react";

import SectionWrapper from "shared/SectionWrapper";
import useLongTermData from "queries/longTerm";
import InfoCard from "../../shared/InfoCard";

const LevelInfo = () => {
  const {
    infoCard: {
      title: { title },
      price,
      note: { note },
      programDates: { data: programDates },
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
