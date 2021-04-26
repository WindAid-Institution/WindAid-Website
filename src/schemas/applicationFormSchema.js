import { createBridge } from "src/utils/forms";
import { JSONSchemaBridge } from "uniforms-bridge-json-schema";
import Ajv from "ajv";

const applicationFormSchema = {
  title: "ApplicationForm",
  type: "object",
  properties: {
    firstName: {
      type: "string",
      maxLength: 200,
    },
    lastName: {
      type: "string",
      maxLength: 200,
    },
    emailAddress: {
      type: "string",
      format: "email",
    },
  },
  required: ["fullName", "email", "content"],
};

const ajv = new Ajv({ allErrors: true, useDefaults: true });

function createValidator(schema) {
  const validator = ajv.compile(schema);

  return (model) => {
    validator(model);
    return validator.errors?.length ? { details: validator.errors } : null;
  };
}

const schemaValidator = createValidator(schema);

export const applicationFormSchemaBridge = new JSONSchemaBridge(
  applicationFormSchema
);
