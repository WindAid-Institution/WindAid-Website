import React from "react";
import { useTheme } from "@material-ui/core/styles";

import SectionWrapper from "shared/SectionWrapper";
import Title from "shared/Title";
import useWindowSize from "hooks/useWindowSize";
import useOurImpactData from "queries/ourImpact";

import ComminutyCarousel from "./Carousel/ComminutyCarousel";

const Community = () => {
  const {
    community: { title },
  } = useOurImpactData();

  const theme = useTheme();

  const { width: windowWidth } = useWindowSize();
  const isMdScreen = windowWidth >= theme.breakpoints.values.md;

  const textStyle = {
    textAlign: isMdScreen ? "left" : "center",
    marginBottom: "calc(2.96vw + 21.3px)",
  };

  return (
    <SectionWrapper style={{ sectionStyle: { paddingBottom: "110px" } }}>
      <Title
        title={title}
        size={isMdScreen ? "lg" : "auto"}
        style={{
          textStyle,
        }}
      />
      <ComminutyCarousel />
    </SectionWrapper>
  );
};

export default Community;
