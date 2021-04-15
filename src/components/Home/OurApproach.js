import React from "react";

import Header from "shared/Header";
import Title from "shared/Title";
import Body from "shared/Body";
import "styles/OurMission/OurMission.css";
import useHomepageData from "queries/homepage";

const OurApproach = () => {
  const {
    ourApproach: {
      header,
      title,
      body: { body },
    },
  } = useHomepageData();

  return (
    <>
      <div className="container" style={{ height: "373px" }}>
        <div className="text-style">
          <Header header={header} style={{ width: "126px" }} />
          <Title title={title} style={{ width: "calc(18.1vw + 263px)" }} />
          <Body body={body} style={{ width: "calc(30.4vw + 219px" }} />
        </div>
      </div>
    </>
  );
};

export default OurApproach;
