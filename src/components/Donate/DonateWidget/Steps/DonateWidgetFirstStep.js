/* eslint-disable max-len */
import React from "react";
import PropTypes from "prop-types";

import DonateWidgetButtonGroup from "../DonateWidgetButtonGroup";
import DonateWidgetCheckbox from "../DonateWidgetCheckbox";

const DonateWidgetFirstStep = ({
  handleButtonClick,
  donationValue,
  handleInputChange,
  inputValue,
  buttonsValues,
  handleCheckboxToggle,
  isMonthlyDonation,
}) => (
  <>
    <DonateWidgetButtonGroup
      handleButtonClick={handleButtonClick}
      donationValue={donationValue}
      handleInputChange={handleInputChange}
      inputValue={inputValue}
      buttonsValues={buttonsValues}
    />
    <DonateWidgetCheckbox
      handleCheckboxToggle={handleCheckboxToggle}
      isChecked={isMonthlyDonation}
    />
  </>
);

DonateWidgetFirstStep.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
  donationValue: PropTypes.number.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  inputValue: PropTypes.number.isRequired,
  buttonsValues: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  handleCheckboxToggle: PropTypes.func.isRequired,
  isMonthlyDonation: PropTypes.bool.isRequired,
};

export default DonateWidgetFirstStep;
