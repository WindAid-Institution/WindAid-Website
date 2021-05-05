import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
  tab: {
    "& > span": {
      textTransform: "none",
      fontSize: "18px",
    },

    "&.Mui-selected > span": {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
}));

const DonateWidgetSecondStep = ({ selectedProvider, handleProviderChange }) => {
  const classes = useStyles();

  return (
    <>
      <Tabs
        value={selectedProvider}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleProviderChange}
        variant="fullWidth"
      >
        <Tab className={classes.tab} label="Card" value="card" />
        <Tab className={classes.tab} label="PayPal" value="paypal" />
      </Tabs>
      Hello
    </>
  );
};

export default DonateWidgetSecondStep;
