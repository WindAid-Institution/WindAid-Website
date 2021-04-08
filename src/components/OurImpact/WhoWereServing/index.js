import React from "react";

import Header from "src/shared/Header/Header";
import Title from "src/shared/Title/Title";
import Body from "src/shared/Body/Body";

import OUR_IMPACT_DATA from "pages/our-impact/data";
import "styles/OurImpact/WhoWereServings.css";

import ImagesWithText from "./ImagesWithText";

const { WHO_WERE_SERVING } = OUR_IMPACT_DATA;

const WhoWereServing = () => (
  <section className="who_were_serving">
    <div className="who_were_serving__container container">
      <Header header={WHO_WERE_SERVING.HEADER} style={{ width: "240px" }} />
      <Title
        title={WHO_WERE_SERVING.TITLE}
        style={{ width: "calc(30.4vw + 219px)" }}
      />
      <Body
        body={WHO_WERE_SERVING.BODY_ONE}
        style={{ width: "calc(41.1vw + 160px" }}
      />
      <div className="who_were_serving__body-second">
        <Body
          body={WHO_WERE_SERVING.BODY_TWO}
          style={{ width: "calc(41.1vw + 160px" }}
        />
      </div>

      <ImagesWithText />
    </div>
  </section>
);

export default WhoWereServing;
