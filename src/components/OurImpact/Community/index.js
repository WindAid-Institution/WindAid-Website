import React from "react";

import Title from "src/shared/Title/Title";
import "styles/OurImpact/Community.css";

import ComminutyCarousel from "./ComminutyCarousel";

const Community = () => (
  <div className="community container">
    <Title
      title="In short, lives can be lit up.
        Hear it from the community members."
      style={{
        width: "calc(30.4vw + 219px)",
        marginTop: "calc(2.96vw + 21.3px)",
      }}
    />
    <ComminutyCarousel />
  </div>
);

export default Community;
