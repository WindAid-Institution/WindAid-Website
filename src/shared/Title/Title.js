import React from "react";
import "./Title.css";

const Title = (props) => (
    <div>
      <p className="title-text" style={props.style}>
        {props.title}
      </p>
    </div>
  );

export default Title;
