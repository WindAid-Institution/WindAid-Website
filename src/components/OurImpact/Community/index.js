import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import SectionWrapper from "shared/SectionWrapper";
import Title from "shared/Title";
import useOurImpactData from "queries/ourImpact";

import ComminutyCarousel from "./Carousel/ComminutyCarousel";

const Community = () => {
  const {
    community: { title },
  } = useOurImpactData();

  const theme = useTheme();

  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));

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
