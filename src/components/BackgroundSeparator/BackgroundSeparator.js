import React from "react";
import PropTypes from "prop-types";

import "styles/backgroundSeparator.css";

const BackgroundSeparator = ({ imageSrc, headingText, paragraphText }) => (
  <div
    style={{ backgroundImage: `url(${imageSrc})` }}
    className="background-separator"
  >
    <div className="background-separator__filter">
      <div className="background-separator__text-container container">
        <h3>{headingText}</h3>
        <p>{paragraphText}</p>
      </div>
    </div>
  </div>
);

BackgroundSeparator.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  headingText: PropTypes.string,
  paragraphText: PropTypes.string,
};
BackgroundSeparator.defaultProps = {
  headingText: "",
  paragraphText: "",
};

export default BackgroundSeparator;
