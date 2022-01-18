import React from "react";

// import { ROUTES } from "src/constants/routes";
import Button from "shared/Button";

const ApplyButton = () => {
  const currentYear = new Date().getFullYear();
  const handleClick = () => {
    window.open("https://bit.ly/windaidapplication");
  };

  return (
    <Button
      text={`Apply For The ${currentYear} Program`}
      style={{ marginTop: "32px" }}
      onClick={handleClick}
    />
  );
};
export default ApplyButton;
