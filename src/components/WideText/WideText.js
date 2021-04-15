import React from "react";
import PropTypes from "prop-types";

import Header from "shared/Header";
import Title from "shared/Title";
import Body from "shared/Body";

import "styles/wideText.css";

const WideText = ({ headerText, titleText, bodyText, customClassName }) => (
  <div className={`wide-text__container container ${customClassName}`}>
    <div className="wide-text__text-style">
      <Header header={headerText} style={{ width: "240px" }} />
      <Title title={titleText} style={{ width: "calc(30.4vw + 219px)" }} />
      <Body body={bodyText} style={{ width: "calc(41.1vw + 160px" }} />
    </div>
  </div>
);

WideText.propTypes = {
  headerText: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  bodyText: PropTypes.string.isRequired,
  customClassName: PropTypes.string,
};
WideText.defaultProps = {
  customClassName: "",
};

export default WideText;
