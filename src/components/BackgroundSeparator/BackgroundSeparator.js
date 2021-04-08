import React from "react";

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
      </div>{" "}
    </div>
  </div>
);

export default BackgroundSeparator;
