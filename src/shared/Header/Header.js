import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div>
      <p className="header-text" style={props.style}>
        {props.header}
      </p>
    </div>
  );
};

export default Header;
