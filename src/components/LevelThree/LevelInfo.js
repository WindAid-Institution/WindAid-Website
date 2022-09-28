import React from "react";

import SectionWrapper from "shared/SectionWrapper";
import useLongTermData from "queries/levelThree";
import InfoCard from "../../shared/InfoCard/InfoCard";

const LevelInfo = () => {
  const {
    infoCard: {
      title: { title },
      price,
      programDates: { heading: programHeading, data: programDates },
      image,
    },
  } = useLongTermData();

  const note = useLongTermData()?.infoCard?.note?.note;
  const priceImage = useLongTermData()?.infoCard?.priceImage;
  const included = useLongTermData()?.infoCard?.included?.included;
  const notIncluded = useLongTermData()?.infoCard?.notIncluded?.notIncluded;

  const data = {
    title,
    price,
    note,
    priceImage,
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
