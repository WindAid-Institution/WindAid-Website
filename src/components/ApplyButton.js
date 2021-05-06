import React from "react";

import { ROUTES } from "src/constants/routes";
import Button from "shared/Button";

const ApplyButton = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Button
      text={`Apply now for the ${currentYear} programs`}
      style={{ marginTop: "32px" }}
      route={ROUTES.APPLICATION_PROGRAM}
    />
  );
};
export default ApplyButton;
