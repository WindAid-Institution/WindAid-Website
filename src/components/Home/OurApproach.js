import React from "react";

import Header from "src/shared/Header/Header";
import Title from "src/shared/Title/Title";
import Body from "src/shared/Body/Body";
import "styles/OurMission/OurMission.css";
import { useHomepageData } from "src/hooks/queries/homepage";

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
