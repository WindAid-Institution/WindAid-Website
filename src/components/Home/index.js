import React from "react";

import BigBanner from "./BigBanner";
import OurMission from "./OurMission";
import Stats from "./Statistics/Statistics";
import OurApproach from "./OurApproach";
import OurCoreWork from "./OurCoreWork";

export default function LandingPage() {
  return (
    <>
      <BigBanner />
      <OurMission />
      <Stats />
      <OurApproach />
      <OurCoreWork />
    </>
  );
}
