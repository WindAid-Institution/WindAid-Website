import React from "react";

import "../../styles/OurMission/MissionImages.css";
import Group1 from "../../images/ApplyImages/OurMission/group1.svg";
import Group2 from "../../images/ApplyImages/OurMission/group2.svg";
import Group3 from "../../images/ApplyImages/OurMission/group3.svg";

const MissionImages = () => {
  return (
    <div className="mission">
      <div>
        <img src={Group1} className="group-one" />
        <img src={Group2} className="group-two" />
        <img src={Group3} className="group-three" />
      </div>
    </div>
  );
};

export default MissionImages;
