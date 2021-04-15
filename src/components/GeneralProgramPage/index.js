import React from "react";
import Overview from "./Overview";
import Impact from "./Impact";
import CommunitiesImageBanner from "./CommunitiesImageBanner";
import ExperienceSection from "./ExperienceSection";
import AdventureSection from "./AdventureSection";
import VolunteerProgram from "./VolunteerProgram";

export default function GeneralProgram() {
  return (
    <>
      <Overview />
      <Impact />
      <CommunitiesImageBanner />
      <ExperienceSection />
      <VolunteerProgram />
      <AdventureSection />
    </>
  );
}
