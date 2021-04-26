import { JSONSchemaBridge } from "uniforms-bridge-json-schema";
import Ajv from "ajv";
import addFormats from "ajv-formats";

const ajv = new Ajv({ allErrors: true, useDefaults: true });
ajv.addKeyword("uniforms");
addFormats(ajv);

const createValidator = (schema) => {
  const validator = ajv.compile(schema);

  return (model) => {
    validator(model);
    if (validator.errors && validator.errors.length) {
      const customErrors = validator.errors.map((error) => {
        console.log(error);
        if (error.keyword === "required") {
          return { ...error, message: "This field is required" };
        }
        if (error.keyword === "minLength") {
          return {
            ...error,
            message: `This field must have at least ${error.params.limit} characters`,
          };
        }

        if (error.keyword === "enum") {
          return { ...error, message: "Select one of avaliable options" };
        }

        if (error.keyword === "minItems") {
          return {
            ...error,
            message: "Select at least one of avaliable options",
          };
        }

        if (error.keyword === "format" && error.params.format === "email") {
          return {
            ...error,
            message: "Provide email in email format",
          };
        }
        if (error.keyword === "pattern") {
          return {
            ...error,
            message: "Field contains not allowed characters",
          };
        }

        return error;
      });

      return { details: customErrors };
    }
    return null;
  };
};

export const createBridge = (schema, customValidation, onValidate) => {
  const schemaValidator = createValidator(schema, customValidation, onValidate);
  return new JSONSchemaBridge(schema, schemaValidator);
};
