import React from "react";
import { Link } from "gatsby";

import Button from "shared/Button";

const ApplyButton = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Link to="/">
      <Button
        text={`Apply now for the ${currentYear} programs`}
        style={{ marginTop: "32px" }}
      />
    </Link>
  );
};
export default ApplyButton;
