import React from "react";
import PropTypes from "prop-types";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";

const Overview = ({ header, title, body }) => (
  <SectionWrapper>
    <TextSection header={header} title={title} body={body} size="lg" />
  </SectionWrapper>
);

Overview.propTypes = {
  header: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Overview;
