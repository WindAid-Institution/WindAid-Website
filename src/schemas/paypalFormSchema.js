import { createBridge } from "src/utils/forms";

const paypalFormSchema = {
  title: "Paypal",
  type: "object",
  properties: {
    email: {
      type: "string",
      format: "email",
      uniforms: {
        label: "Email",
        variant: "outlined",
      },
    },
  },
  required: ["email"],
};

export const paypalFormSchemaBridge = createBridge(paypalFormSchema);
