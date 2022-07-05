import React from "react";
import SectionWrapper from "../../shared/SectionWrapper";
import TextSection from "../../shared/TextSection";

const ThankYou = () => {
  const sectionStyle = {
    sectionStyle: {
      height: "20vh",
      backgroundSize: "cover",
      backgroundPosition: "bottom",
    },
  };
  return (
    <SectionWrapper bgColor="secondary" style={sectionStyle}>
      <TextSection header="Thank you for your message. We will get back to you shortly!" />
    </SectionWrapper>
  );
};

export default ThankYou;
