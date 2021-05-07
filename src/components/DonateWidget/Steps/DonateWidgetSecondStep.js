import React from "react";
import PropTypes from "prop-types";
import { AutoForm, AutoField } from "uniforms-material";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { paypalFormSchemaBridge } from "src/schemas/paypalFormSchema";
import { cardFormSchemaBridge } from "src/schemas/cardFormSchema";

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

  form: {
    margin: "24px 0",
  },
  filed: {
    padding: "6px 0",
    "& > div": {
      borderRadius: "5px",
    },

    "& > label": {
      top: "5px",
    },
  },
}));

const DonateWidgetSecondStep = ({
  selectedProvider,
  handleProviderChange,
  formRef,
  paypalData,
  setPaypalData,
  cardData,
  setCardData,
  goToNextStep,
}) => {
  const classes = useStyles();

  const handleSubmit = (data) => {
    if (selectedProvider === "card") {
      setCardData(data);
      return goToNextStep();
    }

    setPaypalData(data);
    return goToNextStep();
  };
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
      {selectedProvider === "card" && (
        <AutoForm
          schema={cardFormSchemaBridge}
          className={classes.form}
          showInlineError
          ref={formRef}
          onSubmit={handleSubmit}
          model={cardData}
        >
          <AutoField className={classes.filed} name="firstName" />
          <AutoField className={classes.filed} name="lastName" />
          <AutoField className={classes.filed} name="cardNumber" />
          <AutoField className={classes.filed} name="expiryDate" />
          <AutoField className={classes.filed} name="CVC" />
        </AutoForm>
      )}
      {selectedProvider === "paypal" && (
        <AutoForm
          schema={paypalFormSchemaBridge}
          className={classes.form}
          showInlineError
          ref={formRef}
          onSubmit={handleSubmit}
          model={paypalData}
        >
          <AutoField className={classes.filed} name="email" />
        </AutoForm>
      )}
    </>
  );
};

DonateWidgetSecondStep.propTypes = {
  selectedProvider: PropTypes.string.isRequired,
  handleProviderChange: PropTypes.func.isRequired,
  formRef: PropTypes.object,
  paypalData: PropTypes.object.isRequired,
  setPaypalData: PropTypes.func.isRequired,
  cardData: PropTypes.object.isRequired,
  setCardData: PropTypes.func.isRequired,
  goToNextStep: PropTypes.func.isRequired,
};

DonateWidgetSecondStep.defaultProps = {
  formRef: { current: null },
};

export default DonateWidgetSecondStep;
