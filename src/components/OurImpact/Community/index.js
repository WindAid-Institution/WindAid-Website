import React from "react";

import Title from "src/shared/Title/Title";
import useWindowSize from "src/hooks/useWindowSize";
import OUR_IMPACT_DATA from "pages/our-impact/data";
import "styles/OurImpact/Community.css";

import ComminutyCarousel from "./Carousel/ComminutyCarousel";

const {
  COMMUNITY: { MAIN_TITLE },
} = OUR_IMPACT_DATA;

const Community = () => {
  const { width: windowWidth } = useWindowSize();
  const isLgScreen = windowWidth >= 992;
  return (
    <section className="community container">
      <Title
        title={MAIN_TITLE}
        style={{
          width: isLgScreen ? "calc(30.4vw + 219px)" : "auto",
          textAlign: isLgScreen ? "left" : "center",
          marginTop: "calc(2.96vw + 21.3px)",
          marginBottom: "calc(2.96vw + 21.3px)",
        }}
      />
      <ComminutyCarousel />
    </section>
  );
};

export default Community;