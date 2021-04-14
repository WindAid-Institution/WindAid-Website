import React from "react";

import Header from "src/shared/Header/Header";
import Title from "src/shared/Title/Title";
import Body from "src/shared/Body/Body";

import "styles/wideText.css";

const WideText = ({
  headerText,
  titleText,
  bodyText,
  customClassName = "",
}) => (
  <div className={`wide-text__container container ${customClassName}`}>
    <div className="wide-text__text-style">
      <Header header={headerText} style={{ width: "240px" }} />
      <Title title={titleText} style={{ width: "calc(30.4vw + 219px)" }} />
      <Body body={bodyText} style={{ width: "calc(41.1vw + 160px" }} />
    </div>
  </div>
);

export default WideText;
