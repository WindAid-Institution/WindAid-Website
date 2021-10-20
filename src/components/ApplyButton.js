import React from "react";

import { ROUTES } from "src/constants/routes";
import Button from "shared/Button";

const ApplyButton = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Button
      text={`Apply For The ${currentYear} Program`}
      style={{ marginTop: "32px" }}
      route={ROUTES.APPLICATION_PROGRAM}
    />
  );
};
export default ApplyButton;
