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
  const [donationValue, setDonationValue] = useState("");
  const [inputValue, setInputValue] = useState("nulklksas a");

  const classes = useStyles();
  const theme = useTheme();

  const handleButtonClick = (event) => {
    const value = parseInt(event.currentTarget.value, 10);

    if (donationValue === value) {
      return setDonationValue(0);
    }

    return setDonationValue(value);
  };

  const handleInputChange = (event) => {
    const value = parseInt(event.currentTarget.value, 10);
    console.log(value);

    setDonationValue(value);

    if (BUTTONS_VALUES.includes(value)) {
      return setInputValue("");
    }
    return setInputValue(event.currentTarget.value);
  };

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
          <DonateWidgetCheckbox />
          <Box display="flex" justifyContent="center">
            <Button
              style={{
                width: "187px",
                minWidth: "auto",
                marginBottom: theme.spacing(2),
              }}
              text="Donate"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DonateWidget;
