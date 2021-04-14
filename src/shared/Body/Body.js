import React from "react";
import ReactMarkdown from "react-markdown";
import "./Body.css";

const Body = ({ style, body }) => (
  <div>
    <p className="body-text" style={style}>
      <ReactMarkdown>{body}</ReactMarkdown>
    </p>
  </div>
);

export default Body;
