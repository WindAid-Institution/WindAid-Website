import React, { useState } from "react";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import useLongTermData from "queries/longTerm";

import ExampleProjectsTabs from "./ExampleProjectsTabs";
import ExampleProjectsCard from "./ExampleProjectsCard";

const ExampleProjects = () => {
  const {
    exampleProjects: {
      title,
      body: { body },
    },
    projectsCardsContent,
  } = useLongTermData();

  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (_e, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <SectionWrapper
        style={{ sectionStyle: { paddingBottom: 0 } }}
        bgColor="secondary"
      >
        <TextSection title={title} body={body} size="lg" />
        <ExampleProjectsTabs
          currentTab={currentTab}
          handleChange={handleChange}
        />
      </SectionWrapper>
      <SectionWrapper bgColor="primary">
        {projectsCardsContent.map(
          (cardContent, index) =>
            currentTab === index && (
              <ExampleProjectsCard {...cardContent} key={cardContent.name} />
            )
        )}
      </SectionWrapper>
    </>
  );
};
export default ExampleProjects;
