import React from "react";

import Header from "src/shared/Header/Header";
import Title from "src/shared/Title/Title";
import Body from "src/shared/Body/Body";
import useOurImpactData from "src/hooks/queries/ourImpact";
import "styles/OurImpact/WhoWereServings.css";

import ImagesWithText from "./ImagesWithText";

const WhoWereServing = () => {
  const {
    whoWereServing: {
      header,
      title,
      body: { body },
      bodyTwo: { bodyTwo },
    },
  } = useOurImpactData();

  return (
    <section className="who_were_serving">
      <div className="who_were_serving__container container">
        <Header header={header} style={{ width: "240px" }} />
        <Title title={title} style={{ width: "calc(30.4vw + 219px)" }} />
        <Body body={body} style={{ width: "calc(41.1vw + 160px" }} />
        <div className="who_were_serving__body-second">
          <Body body={bodyTwo} style={{ width: "calc(41.1vw + 160px" }} />
        </div>

        <ImagesWithText />
      </div>
    </section>
  );
};

export default WhoWereServing;
