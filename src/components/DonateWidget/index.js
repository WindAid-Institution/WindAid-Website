import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Button from "shared/Button";

import DonateWidgetButtonGroup from "./DonateWidgetButtonGroup";
import DonateWidgetCheckbox from "./DonateWidgetCheckbox";

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

const BUTTONS_VALUES = [10, 20, 40, 50];

const DonateWidget = () => {
  const [donationValue, setDonationValue] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const classes = useStyles();
  const theme = useTheme();

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

  const handleInputChange = (event) => {
    const strValue = event.currentTarget.value;

    if (strValue.startsWith("0")) {
      return null;
    }

    const value = parseInt(strValue, 10);

    setDonationValue(value);

    if (BUTTONS_VALUES.includes(value)) {
      return setInputValue("");
    }
    return setInputValue(value);
  };

  const handleCheckboxToggle = (event) => setIsChecked(event.target.checked);

  return (
    <Box className={classes.container}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.header}
          title={
            <Typography className={classes.headerText} variant="h6">
              Choose an amount to give
            </Typography>
          }
        />
        <CardContent>
          <DonateWidgetButtonGroup
            handleButtonClick={handleButtonClick}
            donationValue={donationValue}
            handleInputChange={handleInputChange}
            inputValue={inputValue}
            buttonsValues={BUTTONS_VALUES}
          />
          <DonateWidgetCheckbox
            handleCheckboxToggle={handleCheckboxToggle}
            isChecked={isChecked}
          />
          <Box display="flex" justifyContent="center">
            <Button
              style={{
                width: "187px",
                minWidth: "auto",
                marginBottom: theme.spacing(2),
              }}
              text="Donate"
              isDisabled={donationValue === 0 || Number.isNaN(donationValue)}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DonateWidget;
