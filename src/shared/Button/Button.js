import React from "react";
import "./Button.css";

const Button = (props) => (
  <butoon {...props} type="button" className="custom-button">
    {props.children}
  </butoon>
);

export default Button;
