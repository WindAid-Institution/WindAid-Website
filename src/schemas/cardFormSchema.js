import { createBridge } from "src/utils/forms";
import { COUNTRIES } from "src/constants/formOptions";

const cardFormSchema = {
  title: "Card",
  type: "object",
  properties: {
    firstName: {
      type: "string",
      uniforms: {
        label: "First name",
        variant: "outlined",
      },
    },
    lastName: {
      type: "string",
      uniforms: {
        label: "Last name",
        variant: "outlined",
      },
    },
    cardNumber: {
      type: "string",
      pattern: "^[0-9-]*$",
      uniforms: {
        label: "Card number",
        variant: "outlined",
      },
    },
    expiryDate: {
      type: "string",
      pattern: "^[0-9/]*$",
      maxLength: 5,
      uniforms: {
        label: "Expiry Date",
        variant: "outlined",
      },
    },
    CVC: {
      type: "string",
      pattern: "^[0-9]*$",
      maxLength: 3,
      uniforms: {
        label: "CVC",
        variant: "outlined",
      },
    },
  },
  required: ["firstName", "lastName", "cardNumber", "expiryDate", "CVC"],
};

const cardFormAddressSchema = {
  title: "Card",
  type: "object",
  properties: {
    billingAddress: {
      type: "string",
      uniforms: {
        label: "Billing Address",
        variant: "outlined",
      },
    },
    city: {
      type: "string",
      uniforms: {
        label: "City",
        variant: "outlined",
      },
    },
    zipCode: {
      type: "string",
      pattern: "^[0-9-/]*$",
      uniforms: {
        label: "Zip code",
        variant: "outlined",
      },
    },
    country: {
      type: "string",
      enum: COUNTRIES,
      uniforms: {
        label: "Country",
        variant: "outlined",
      },
    },
  },
  required: ["billingAddress", "city", "zipCode", "country"],
};

export const cardFormSchemaBridge = createBridge(cardFormSchema);
export const cardFormAddressSchemaBridge = createBridge(cardFormAddressSchema);
