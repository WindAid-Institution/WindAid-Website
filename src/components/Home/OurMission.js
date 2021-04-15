import React from "react";
import useHomepageData from "hooks/queries/homepage";
import Header from "shared/Header";
import Title from "shared/Title";
import Body from "shared/Body";
import MissionImages from "./MissionImages";
import "../../styles/OurMission/OurMission.css";

const OurMission = () => {
  const {
    ourMission: {
      header,
      title,
      body: { body },
      images,
    },
  } = useHomepageData();

  return (
    <>
      <div className="container">
        <div className="text-style">
          <Header header={header} style={{ width: "108px" }} />
          <Title title={title} style={{ width: "calc(30.4vw + 219px)" }} />
          <Body body={body} style={{ width: "calc(41.1vw + 160px" }} />
        </div>
      </div>
      <MissionImages imagesData={images} />
    </>
  );
};

export default OurMission;
