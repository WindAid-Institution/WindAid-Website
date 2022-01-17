/* eslint-disable one-var */
/* eslint-disable max-len */
import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

import DonateWidgetHeader from "./DonateWidgetHeader";
import DonateWidgetButton from "./DonateWidgetButton";

import DonateWidgetFirstStep from "./Steps/DonateWidgetFirstStep";
import DonateWidgetSecondStep from "./Steps/DonateWidgetSecondStep";
import DonateWidgetSuccess from "./Steps/DonateWidgetSuccess";

const BUTTONS_VALUES = [10, 20, 40, 50];

const useStyles = makeStyles((theme) => ({
  container: {
    width: "442px",
  },

  card: {
    borderRadius: "10px",
  },

  header: {
    backgroundColor: theme.palette.secondary.dark,
    height: "72px",
  },
  headerText: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: "18px",
    lineHeight: "24px",
    textAlign: "center",
  },
}));

const DonateWidget = () => {
  const classes = useStyles();

  const [donationValue, setDonationValue] = useState(10);

  // text value of custom amount input
  const [inputValue, setInputValue] = useState("");
  const [isMonthlyDonation, setIsMonthlyDonation] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  // fnc to handle click on one of predefined amounts
  const handleButtonClick = (event) => {
    const value = parseInt(event.currentTarget.value, 10);

    if (donationValue === value) {
      setInputValue("");
      setDonationValue(0);
      return;
    }
    setInputValue("");
    setDonationValue(value);
  };

  // fnc to handle typing custom amount of donation
  const handleInputChange = (event) => {
    const strValue = event.currentTarget.value;

    if (strValue.startsWith("0")) {
      return null;
    }

    if (!strValue) {
      setDonationValue(0);
      return setInputValue("");
    }

    const value = parseInt(strValue, 10);

    setDonationValue(value);

    if (BUTTONS_VALUES.includes(value)) {
      return setInputValue("");
    }
    return setInputValue(value);
  };

  // fnc to handle check of montly donation
  const handleCheckboxToggle = (event) =>
    setIsMonthlyDonation(event.target.checked);

  const goToNextStep = () => setCurrentStep((value) => value + 1);
  const goToFirstStep = () => setCurrentStep(1);

  const isDone = currentStep === 3;
  return (
    <Box className={classes.container}>
      <Card className={classes.card}>
        <DonateWidgetHeader
          donationValue={donationValue}
          isFirstStep={currentStep === 1}
          isDone={isDone}
          goBack={goToFirstStep}
        />
        <CardContent>
          {currentStep === 1 && (
            <DonateWidgetFirstStep
              handleButtonClick={handleButtonClick}
              donationValue={donationValue}
              handleInputChange={handleInputChange}
              inputValue={inputValue}
              buttonsValues={BUTTONS_VALUES}
              handleCheckboxToggle={handleCheckboxToggle}
              isMonthlyDonation={isMonthlyDonation}
            />
          )}
          {currentStep === 2 && (
            <DonateWidgetSecondStep
              donationValue={donationValue}
              goToFirstStep={goToFirstStep}
              goToNextStep={goToNextStep}
              isMonthlyDonation={isMonthlyDonation}
            />
          )}
          {isDone && <DonateWidgetSuccess />}
          <DonateWidgetButton
            donationValue={donationValue}
            currentStep={currentStep}
            goToNextStep={goToNextStep}
            goToFirstStep={goToFirstStep}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default DonateWidget;
