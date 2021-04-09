import React from "react";
import "./Body.css";

const Body = (props) => (
  <div className={props.className}>
    <p className="body-text" style={props.style}>
      {props.body}
    </p>
  </div>
);

export default Body;
