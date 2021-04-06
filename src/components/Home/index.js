import React from "react";

import BigBanner from "./BigBanner";
import OurMission from "./OurMission";
import Stats from "./Statistics/Statistics";
import OurApproach from "./OurApproach";
import OurCoreWork from "./OurCoreWork";
import OurPrograms from "./OurPrograms";

export default function LandingPage() {
  return (
    <>
      <BigBanner />
      <OurMission />
      <Stats />
      <OurApproach />
      <OurCoreWork />
      <OurPrograms />
    </>
  );
}
