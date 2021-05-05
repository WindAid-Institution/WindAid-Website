/* eslint-disable max-len */
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import Button from "shared/Button";

const DonateWidgetButton = ({ donationValue, currentStep, goToNextStep }) => {
  const theme = useTheme();
  const isDisabled = donationValue === 0 || Number.isNaN(donationValue);

  const getButtonText = () => {
    switch (currentStep) {
      case 1:
        return "Donate";
      default:
        return "Next";
    }
  };

  return (
    <Box display="flex" justifyContent="center">
      <Button
        style={{
          width: "187px",
          minWidth: "auto",
          marginBottom: theme.spacing(2),
        }}
        text={getButtonText()}
        isDisabled={isDisabled}
        onClick={goToNextStep}
      />
    </Box>
  );
};

DonateWidgetButton.propTypes = {
  donationValue: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
  goToNextStep: PropTypes.func.isRequired,
};

export default DonateWidgetButton;
