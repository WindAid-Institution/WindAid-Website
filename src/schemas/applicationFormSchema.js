import React from "react";
import Link from "@material-ui/core/Link";

import { createBridge } from "src/utils/forms";
import {
  COUNTRIES,
  SEX_TYPES,
  SPANISH_PROFICIENCY,
  HIGHER_EDUCATION,
  YES_NO,
  PROGRAM_TO_APPLY,
  HOW_HEAR,
} from "src/constants/formOptions";
import { getFormatedDate } from "src/utils/utils";

const applicationFormSchema = {
  title: "ApplicationForm",
  type: "object",
  properties: {
    firstName: {
      type: "string",
      maxLength: 200,
      uniforms: {
        variant: "outlined",
        InputLabelProps: { shrink: true },
      },
    },
    lastName: {
      type: "string",
      maxLength: 200,
      uniforms: {
        variant: "outlined",
        InputLabelProps: { shrink: true },
      },
    },
    emailAddress: {
      type: "string",
      format: "email",
      uniforms: {
        variant: "outlined",
        InputLabelProps: { shrink: true },
      },
    },
    country: {
      type: "string",
      enum: COUNTRIES,
      uniforms: {
        label: "What country are you arriving from?",
        variant: "outlined",
        InputLabelProps: { shrink: true },
      },
    },
    passportNumber: {
      type: "string",
      pattern: "^[A-Z0-9]*$",
      uniforms: {
        label: "What is your passport number?",
        variant: "outlined",
        InputLabelProps: { shrink: true },
      },
    },
    sex: {
      type: "string",
      enum: SEX_TYPES,
      uniforms: {
        label: "What is your sex?",
        variant: "outlined",
        InputLabelProps: { shrink: true },
      },
    },
    spanishProfciency: {
      type: "string",
      enum: SPANISH_PROFICIENCY,
      uniforms: {
        label: "What is your Spanish profciency?",
        variant: "outlined",
        InputLabelProps: { shrink: true },
      },
    },
    higherEducation: {
      type: "string",
      enum: HIGHER_EDUCATION,

      uniforms: {
        label:
          "Have you completed or in the process of completing higher level education?",
        variant: "outlined",
        InputLabelProps: { shrink: true },
      },
    },
    fieldOfStudy: {
      type: "string",

      uniforms: {
        label: "If other, please specify your what",
        variant: "outlined",
        InputLabelProps: { shrink: true },
      },
    },
    isEmployeed: {
      type: "string",
      enum: YES_NO,

      uniforms: {
        label: "Are you currently employeed?",
        variant: "outlined",
        InputLabelProps: { shrink: true },
        color: "primary",
      },
    },
    occupation: {
      type: "string",

      uniforms: {
        label: "If yes, please specify your field of occupation and role.",
        variant: "outlined",
        InputLabelProps: { shrink: true },
      },
    },
    specialDietary: {
      type: "string",

      uniforms: {
        label: "Do you have any special dietary requirements?",
        variant: "outlined",
        InputLabelProps: { shrink: true },
        multiline: true,
        rows: 6,
      },
    },
    ilness: {
      type: "string",

      uniforms: {
        label:
          "Do you suffer from any illness that may affect your participation in the program?",
        variant: "outlined",
        InputLabelProps: { shrink: true },
        multiline: true,
        rows: 6,
      },
    },
    medication: {
      type: "string",

      uniforms: {
        label:
          "Are you currently taking any prescribed or non-prescribed medication?",
        variant: "outlined",
        InputLabelProps: { shrink: true },
        multiline: true,
        rows: 6,
      },
    },
    programToApply: {
      type: "string",
      enum: PROGRAM_TO_APPLY,

      uniforms: {
        label: "What program are you applying for?",
        variant: "outlined",
        InputLabelProps: { shrink: true },
      },
    },
    startDateOne: {
      type: "string",
      format: "date",
      uniforms: {
        label: "Select first choice of start date",
        variant: "outlined",
        InputProps: { inputProps: { min: getFormatedDate() } },
        InputLabelProps: { shrink: true },
      },
    },
    startDateTwo: {
      type: "string",
      format: "date",
      uniforms: {
        label: "Select second choice of start date",
        variant: "outlined",
        InputProps: { inputProps: { min: getFormatedDate() } },
        InputLabelProps: { shrink: true },
      },
    },
    intrests: {
      type: "string",
      minLength: 500,

      uniforms: {
        label:
          "We would love to learn more about you and your interest in the program. Please answer the following questions provided and anything else you would like us to know about you.",
        variant: "outlined",
        InputLabelProps: { shrink: true },
        helperText: "500 characters",
        multiline: true,
        rows: 6,
      },
    },
    questions: {
      type: "string",

      uniforms: {
        label: "Do you have any questions about the volunteer program?",
        variant: "outlined",
        InputLabelProps: { shrink: true },
        multiline: true,
        rows: 6,
      },
    },
    howHear: {
      type: "string",
      enum: HOW_HEAR,

      uniforms: {
        label: "How did you first hear about WindAid?",
        variant: "outlined",
        InputLabelProps: { shrink: true },
      },
    },
    ambassadorName: {
      type: "string",

      uniforms: {
        label: "If selected Ambassador, what was the name(s)?",
        variant: "outlined",
        InputLabelProps: { shrink: true },
      },
    },
    termAndConditions: {
      type: "boolean",
      uniforms: {
        label: (
          <span>
            {" I have read and agree to the "}
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://www.windaid.org/terms-and-conditions/"
            >
              terms and conditions
            </Link>
            .
          </span>
        ),
        variant: "outlined",
        color: "primary",
      },
    },
  },
  required: [
    "firstName",
    "lastName",
    "emailAddress",
    "country",
    "passportNumber",
    "sex",
    "spanishProfciency",
    "higherEducation",
    "specialDietary",
    "ilness",
    "medication",
    "programToApply",
    "startDateOne",
    "startDateTwo",
    "intrests",
    "termAndConditions",
  ],
};

export const applicationFormSchemaBridge = createBridge(applicationFormSchema);
