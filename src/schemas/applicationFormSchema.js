import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

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

const intrestInfo = [
  "What interested you in WindAid Institute?",
  "Do you have any skills or experience relevant to renewable technologies or engineering?",
  "What do you hope to gain from this experience?",
];

const applicationFormSchema = {
  title: "ApplicationForm",
  type: "object",
  properties: {
    firstName: {
      type: "string",
      maxLength: 200,
      uniforms: {
        label: "First name",
        variant: "outlined",
      },
    },
    lastName: {
      type: "string",
      maxLength: 200,
      uniforms: {
        label: "Last name",
        variant: "outlined",
      },
    },
    emailAddress: {
      type: "string",
      format: "email",
      uniforms: {
        label: "Email address",
        variant: "outlined",
      },
    },
    country: {
      type: "string",
      enum: COUNTRIES,
      uniforms: {
        label: "What country are you arriving from?",
        variant: "outlined",
      },
    },
    passportNumber: {
      type: "string",
      pattern: "^[A-Z0-9]*$",
      uniforms: {
        label: "What is your passport number?",
        variant: "outlined",
      },
    },
    sex: {
      type: "string",
      enum: SEX_TYPES,
      uniforms: {
        label: "What is your sex?",
        variant: "outlined",
      },
    },
    spanishProfciency: {
      type: "string",
      enum: SPANISH_PROFICIENCY,
      uniforms: {
        label: "What is your Spanish profciency?",
        variant: "outlined",
      },
    },
    higherEducation: {
      type: "string",
      enum: HIGHER_EDUCATION,

      uniforms: {
        label:
          "Have you completed or in the process of completing higher level education?",
        variant: "outlined",
      },
    },
    fieldOfStudy: {
      type: "string",

      uniforms: {
        label: "If other, please specify your what",
        variant: "outlined",
      },
    },
    isEmployeed: {
      type: "string",
      enum: YES_NO,
      uniforms: {
        label: "Are you currently employeed?",
        variant: "outlined",
        color: "primary",
      },
    },
    occupation: {
      type: "string",

      uniforms: {
        label: "If yes, please specify your field of occupation and role.",
        variant: "outlined",
      },
    },
    specialDietary: {
      type: "string",

      uniforms: {
        label: "Do you have any special dietary requirements?",
        variant: "outlined",
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
      },
    },
    startDateOne: {
      type: "string",
      format: "date",
      uniforms: {
        label: "Select first choice of start date",
        variant: "outlined",
        InputProps: { inputProps: { min: getFormatedDate() } },
      },
    },
    startDateTwo: {
      type: "string",
      format: "date",
      uniforms: {
        label: "Select second choice of start date",
        variant: "outlined",
        InputProps: { inputProps: { min: getFormatedDate() } },
      },
    },
    intrests: {
      type: "string",
      minLength: 500,

      uniforms: {
        label:
          "We would love to learn more about you and your interest in the program. Please answer the following questions provided and anything else you would like us to know about you.",
        variant: "outlined",
        additionalinfo: (
          <ul style={{ paddingLeft: "20px" }}>
            {intrestInfo.map((item) => (
              <li style={{ padding: "6px 0" }} key={item}>
                <Typography>{item}</Typography>
              </li>
            ))}
          </ul>
        ),
        helperText: "Minimum 500 characters",
        multiline: true,
        rows: 6,
      },
    },
    questions: {
      type: "string",

      uniforms: {
        label: "Do you have any questions about the volunteer program?",
        variant: "outlined",
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
      },
    },
    ambassadorName: {
      type: "string",

      uniforms: {
        label: "If selected Ambassador, what was the name(s)?",
        variant: "outlined",
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
