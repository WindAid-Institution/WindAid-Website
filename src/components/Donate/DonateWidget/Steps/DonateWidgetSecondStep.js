import React from "react";
import PropTypes from "prop-types";
import { PayPalButton } from "react-paypal-button-v2";

const DonateWidgetSecondStep = ({
  donationValue,
  inputValue,
  goToFirstStep,
  goToNextStep,
  isMonthlyDonation,
}) => {
  const donation =
    inputValue > 0 && inputValue !== "" ? inputValue : donationValue;

  const paypalSubscribe = (data, actions) => {
    const quant = (donation * 1).toString();
    return actions.subscription.create({
      plan_id: process.env.GATSBY_PAYPAL_SUBSCRIPTION_PLAN_ID,
      quantity: quant,
    });
  };
  const paypalOnError = (err) => {
    console.log(err);
    alert("Transaction could not be completed. Please try again later.");
  };

  const paypalOnApprove = (data, actions) => {
    // Capture the funds from the transaction
    actions.subscription.get().then(
      // Show a success message to your buyer
      // OPTIONAL: Call your server to save the subscription
      fetch("/paypal-subscription-complete", {
        method: "post",
        body: JSON.stringify({
          orderID: data.orderID,
          subscriptionID: data.subscriptionID,
        }),
      })
    );
  };

  const paypalOnSuccess = (data) =>
    fetch("/paypal-transaction-complete", {
      method: "post",
      body: JSON.stringify({
        orderID: data.orderID,
        subscriptionID: data.subscriptionID,
      }),
    });

  return (
    <>
      {!isMonthlyDonation && (
        <PayPalButton
          amount={donation}
          currency={process.env.GATSBY_PAYPAL_CURRENCY}
          // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
          onSuccess={(data) => {
            goToNextStep();
            paypalOnSuccess(data);
          }}
          catchError={paypalOnError}
          onError={paypalOnError}
          onCancel={goToFirstStep}
          options={{
            clientId: process.env.GATSBY_PAYPAL_CLIENT_ID,
          }}
        />
      )}
      {isMonthlyDonation && (
        <PayPalButton
          amount={donation}
          currency={process.env.GATSBY_PAYPAL_CURRENCY}
          createSubscription={(data, actions) => paypalSubscribe(data, actions)}
          onApprove={() => {
            goToNextStep();
            paypalOnApprove();
          }}
          catchError={paypalOnError}
          onError={paypalOnError}
          onCancel={goToFirstStep}
          options={{
            vault: true,
            clientId: process.env.GATSBY_PAYPAL_CLIENT_ID,
          }}
        />
      )}
      {/* <Tabs
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
      )} */}
    </>
  );
};

DonateWidgetSecondStep.propTypes = {
  donationValue: PropTypes.number.isRequired,
  inputValue: PropTypes.number.isRequired,
  goToFirstStep: PropTypes.func.isRequired,
  goToNextStep: PropTypes.func.isRequired,
  isMonthlyDonation: PropTypes.bool.isRequired,
};

export default DonateWidgetSecondStep;
