import React from "react";

import Header from "../../../components/Header/Header";
import Title from "../../../components/Title/Title";
import Body from "../../../components/Body/Body";
import MissionImages from "./MissionImages/MissionImages";
import "./OurMission.css";

const OurMission = () => {
  const headerText = "Our Mission";
  const titleText =
    "To provide renewable sources of energy for those who don't have access to electricity.";
  const bodyText =
    "Everything we do is guided by our passion for renewable energies. Our work will always be driven by local communities, working together to install the energy sources and education necessary to empower a future that is independent, sustainable and renewable for those most in need. Equally as important to our installations is our focus on the future, and that the empowerment and education of local communities ensure sustainability and energy independence for generations to come.";
  return (
    <>
      <div className="container">
        <div className="header-style">
          {/* <Header header={headerText} style={{ width: "100%" }} /> */}
          <Header header={headerText} style={{ width: "108px" }} />
        </div>
        <div className="title-style">
          {/* <Title title={titleText} style={{ width: "100%" }} /> */}
          <Title title={titleText} style={{ width: "656px" }} />
        </div>
        <div className="body-style">
          {/* <Body body={bodyText} style={{ width: "100%" }} /> */}
          <Body body={bodyText} style={{ width: "752px" }} />
        </div>
      </div>
      <MissionImages />
    </>
  );
};

export default OurMission;
