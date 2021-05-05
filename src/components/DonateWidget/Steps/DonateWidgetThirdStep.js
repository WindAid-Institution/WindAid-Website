import React from "react";
import PropTypes from "prop-types";
import { AutoForm, AutoField } from "uniforms-material";
import { makeStyles } from "@material-ui/core/styles";

import { cardFormAddressSchemaBridge } from "src/schemas/cardFormSchema";

const useStyles = makeStyles({
  form: {
    margin: "24px 0",

    "& > div > label": {
      top: "5px",
    },
  },
  filed: {
    padding: "6px 0",
    "& > div": {
      borderRadius: "5px",
    },

    "& > label": {
      top: "5px",
    },

    "& > fieldset": {
      borderRadius: "5px",
    },
  },
});

const DonateWidgetThirdStep = ({
  cardAddressData,
  setCardAddressData,
  formRef,
  goToNextStep,
}) => {
  const classes = useStyles();

  const handleSubmit = (data) => {
    setCardAddressData(data);
    return goToNextStep();
  };
  return (
    <AutoForm
      schema={cardFormAddressSchemaBridge}
      className={classes.form}
      showInlineError
      ref={formRef}
      onSubmit={handleSubmit}
      model={cardAddressData}
    >
      <AutoField className={classes.filed} name="billingAddress" />
      <AutoField className={classes.filed} name="city" />
      <AutoField className={classes.filed} name="zipCode" />
      <AutoField className={classes.filed} name="country" />
    </AutoForm>
  );
};

DonateWidgetThirdStep.propTypes = {
  cardAddressData: PropTypes.object.isRequired,
  setCardAddressData: PropTypes.func.isRequired,
  formRef: PropTypes.object,
  goToNextStep: PropTypes.func.isRequired,
};

DonateWidgetThirdStep.defaultProps = {
  formRef: { current: null },
};

export default DonateWidgetThirdStep;
