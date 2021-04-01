import React from "react";

import Header from "../../shared/Header/Header";
import Title from "../../shared/Title/Title";
import Body from "../../shared/Body/Body";
import "../../styles/OurMission/OurMission.css";

export default function OurApproach() {
  const headerText = "Our Approach";
  const titleText =
    "Building and fostering relationships with those who reach our for help.";
  const bodyText =
    "We work with local community members to ensure that the projects are collaborative, desirable, sustainable and geared towards energy independence. We collect a range of data that focuses on the viability of the projects and then tested from an engineering and scientific perspective.";
  return (
    <>
      <div className="container" style={{ height: "373px" }}>
        <div className="text-style">
          <Header header={headerText} style={{ width: "126px" }} />
          <Title title={titleText} style={{ width: "calc(18.1vw + 263px)" }} />
          <Body body={bodyText} style={{ width: "calc(30.4vw + 219px" }} />
        </div>
      </div>
    </>
  );
}
