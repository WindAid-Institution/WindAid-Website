import Ajv from "ajv";
import addFormats from "ajv-formats";
import { JSONSchemaBridge } from "uniforms-bridge-json-schema";

const ajv = new Ajv({
  allErrors: true,
  useDefaults: true,
});

addFormats(ajv);

const createValidator = (schema, customValidation, onValidate) => {
  const validator = ajv.compile(schema);

  return (model) => {
    validator(model);
    if (customValidation) {
      customValidation(model);
    }
    if (validator.errors && validator.errors.length) {
      const customErrors = validator.errors.map((error) => {
        if (error.keyword === "minLength" || error.keyword === "required") {
          if (error.dataPath === "/phoneNumber") {
            return {
              ...error,
              message: "Phone number is required and must have 10 digits",
            };
          }
          return { ...error, message: "This field is required" };
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
        if (error.keyword === "const") {
          return {
            ...error,
            message: "Fields values doesn't match",
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
      if (onValidate) {
        const details = onValidate(customErrors);
        if (Array.isArray(details) && details.length > 0) {
          return { details };
        }
        if (!details || !details.length) {
          return null;
        }
      }
      return { details: customErrors };
    }
    return null;
  };
};

export const createBridge = (schema, customValidation, onValidate) => {
  const schemaValidator = createValidator(schema, customValidation, onValidate);
  return new JSONSchemaBridge(schema, schemaValidator);
};
