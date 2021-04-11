import React from "react";
import Grid from "@material-ui/core/Grid";

import Group1 from "../../images/LandingPage/OurMission/group1.svg";
import Group2 from "../../images/LandingPage/OurMission/group2.svg";
import Group2Mobile from "../../images/LandingPage/OurMission/group2mobile.svg";
import Group3 from "../../images/LandingPage/OurMission/group3.svg";
import "../../styles/OurMission/MissionImages.css";

export default function MissionImages() {
  return (
    <Grid container alignItems="center" justify="center">
      <Grid className="mission-container">
        <img src={Group1} className="group-one" alt="first-group" />
        <img src={Group2} className="group-two" alt="second-group" />
        <img
          src={Group2Mobile}
          className="group-two-mobile"
          alt="second-group-mobile"
        />
        <img src={Group3} className="group-three" alt="third-group" />
      </Grid>
    </Grid>
  );
}
