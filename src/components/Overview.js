import React from "react";
import PropTypes from "prop-types";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";

const Overview = ({ header, title, body, bodyTwo }) => (
  <SectionWrapper>
    <TextSection
      header={header}
      title={title}
      body={body}
      bodyTwo={bodyTwo}
      size="lg"
    />
  </SectionWrapper>
);

Overview.propTypes = {
  header: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  bodyTwo: PropTypes.string,
};

Overview.defaultProps = {
  bodyTwo: "",
};

export default Overview;
