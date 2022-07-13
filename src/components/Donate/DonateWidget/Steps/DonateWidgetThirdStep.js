import React from "react";
import PropTypes from "prop-types";
import { AutoForm, AutoField } from "uniforms-material";
import Box from "@mui/material/Box";
import { cardFormAddressSchemaBridge } from "src/schemas/cardFormSchema";
import useClasses from "../../../../styles/useClasses";

const styles = (theme) => ({
  form: {
    margin: "12px 0 24px 0 ",

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

  goBack: {
    width: "100%",
    height: "44px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "24px",
    boxSizing: "border-box",
    color: "#1D1D1D",
    border: "1px solid #BDBDBD",
    borderRadius: "5px",
    backgroundColor: "#F5F5F5",
    cursor: "pointer",
  },

  goBackSymbol: {
    color: theme.palette.primary.dark,
    opacity: "0.54",
    marginRight: "12px",
  },
});

const DonateWidgetThirdStep = ({
  cardAddressData,
  setCardAddressData,
  formRef,
  goToNextStep,
  goToPrevStep,
}) => {
  const classes = useClasses(styles);

  const handleSubmit = (data) => {
    setCardAddressData(data);
    return goToNextStep();
  };
  return (
    <>
      <Box onClick={goToPrevStep} className={classes.goBack}>
        <span className={classes.goBackSymbol}>{"<"}</span>
        Edit Card Details
      </Box>
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
    </>
  );
};

DonateWidgetThirdStep.propTypes = {
  cardAddressData: PropTypes.object.isRequired,
  setCardAddressData: PropTypes.func.isRequired,
  formRef: PropTypes.object,
  goToNextStep: PropTypes.func.isRequired,
  goToPrevStep: PropTypes.func.isRequired,
};

DonateWidgetThirdStep.defaultProps = {
  formRef: { current: null },
};

export default DonateWidgetThirdStep;
