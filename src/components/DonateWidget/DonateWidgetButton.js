/* eslint-disable max-len */
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import Button from "shared/Button";

const DonateWidgetButton = ({
  donationValue,
  currentStep,
  goToNextStep,
  formRef,
  addressFormRef,
}) => {
  const theme = useTheme();
  const isDisabled = donationValue === 0 || Number.isNaN(donationValue);

  const getButtonText = () => {
    switch (currentStep) {
      case 1:
        return "Donate";
      case 3:
        return `Donate $${donationValue}`;
      default:
        return "Next";
    }
  };

  const getOnClick = () => {
    switch (currentStep) {
      case 1:
        return goToNextStep();
      case 2:
        return formRef?.current?.submit();
      case 3:
        return addressFormRef?.current?.submit();
      default:
        return goToNextStep();
    }
  };

  return (
    <Box display="flex" justifyContent="center">
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
    </Box>
  );
};

DonateWidgetButton.propTypes = {
  donationValue: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
  goToNextStep: PropTypes.func.isRequired,
  formRef: PropTypes.object,
  addressFormRef: PropTypes.object,
};

DonateWidgetButton.defaultProps = {
  formRef: { current: null },
  addressFormRef: { current: null },
};

export default DonateWidgetButton;
