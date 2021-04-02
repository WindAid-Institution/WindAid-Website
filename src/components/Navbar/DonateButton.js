import React from "react";
import Button from "react-bootstrap/Button";

const DonateButton = ({ isSidebar }) => (
  <Button
    variant="primary"
    size="lg"
    className={`donate-button ${isSidebar ? "donate-button--sidebar" : ""}`}
  >
    Donate
  </Button>
);

export default DonateButton;
