/* eslint-disable max-len */
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Button from "shared/Button";

const DonateWidgetButton = ({
  donationValue,
  currentStep,
  goToNextStep,
  goToFirstStep,
}) => {
  const theme = useTheme();
  const isDisabled = donationValue === 0 || Number.isNaN(donationValue);
  const showButton = currentStep !== 2;

  const getButtonText = () => {
    switch (currentStep) {
      case 1:
        return "Donate";
      case 3:
        return "Donate Again";
      default:
        return "Next";
    }
  };

  const getOnClick = () => {
    switch (currentStep) {
      case 1:
        return goToNextStep();
      case 3:
        return goToFirstStep();
      default:
        return goToNextStep();
    }
  };

  return (
    <Box display="flex" justifyContent="center">
      {showButton && (
        <Button
          style={{
            width: "187px",
            minWidth: "auto",
            marginBottom: theme.spacing(2),
            border: "none",
          }}
          text={getButtonText()}
          isDisabled={isDisabled}
          onClick={getOnClick}
        />
      )}
    </Box>
  );
};

DonateWidgetButton.propTypes = {
  donationValue: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
  goToNextStep: PropTypes.func.isRequired,
  goToFirstStep: PropTypes.func.isRequired,
};

export default DonateWidgetButton;
