// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@mui/styles";
import { TextField } from "@mui/material";
import validator from "validator";
import "react-phone-number-input/style.css";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";

import TextSection from "../../shared/TextSection";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "grid",
    flexDirection: "column",
    gridTemplateColumns: "repeat(auto-fit)",
    gap: "32px",
  },
  inputBox: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "5px",
    },
  },
  phoneInput: {
    height: "40px",

    "& > input": {
      borderRadius: "5px",
      border: `1px solid ${theme.palette.info.dark}`,
      height: "100%",
      fontSize: "16px",
    },
  },

  button: ({ inverted, style }) => ({
    color: inverted ? theme.palette.primary.main : theme.palette.secondary.main,
    backgroundColor: inverted
      ? theme.palette.secondary.main
      : theme.palette.primary.main,
    border: `3px solid ${
      inverted ? theme.palette.secondary.main : theme.palette.primary.main
    }`,
    borderRadius: "8px",
    textDecoration: "none",
    textTransform: "none",
    fontWeight: "700",
    height: "48px",
    [theme.breakpoints.up("sm")]: {
      minWidth: "320px",
      fontSize: "16px",
    },
    ...style,

    "&:hover": {
      backgroundColor: inverted
        ? theme.palette.primary.main
        : theme.palette.secondary.main,

      color: inverted
        ? theme.palette.secondary.main
        : theme.palette.primary.main,

      borderColor: theme.palette.primary.main,
    },
  }),
}));

const ContactForm = () => {
  const theme = useTheme();
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [submitted, setSubmitted] = useState(false);
  const errorDict = {
    first_name: { errorState: false, helperText: "" },
    last_name: { errorState: false, helperText: "" },
    phone_number: { errorState: false, helperText: "" },
    email: { errorState: false, helperText: "" },
    reason: { errorState: false, helperText: "" },
    message: { errorState: false, helperText: "" },
  };

  const [error, setError] = React.useState(errorDict);

  function addError(name, errorString) {
    setError((prevErrorDict) => ({
      ...prevErrorDict,
      [name]: {
        errorState: true,
        helperText: `${errorString}`,
      },
    }));
  }

  function removeError(name) {
    setError((prevErrorDict) => ({
      ...prevErrorDict,
      [name]: {
        errorState: false,
        helperText: "",
      },
    }));
  }

  const helperTextStyle = {
    bodyStyle: {
      rootStyle: {
        marginTop: "-30px",
        marginLeft: "50px",
      },
      textStyle: {
        margin: 0,
        fontSize: "12px",
        color: "red",
      },
    },
  };

  const submitTextStyle = {
    bodyStyle: {
      textStyle: {
        color: theme.palette.primary.main,
      },
    },
  };

  const [values, setValues] = React.useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    reason: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "first_name":
        if (value === "") {
          addError(name, "Please provide a first name");
        } else {
          setValues({
            // On autofill we get a stringified value.
            ...values,
            first_name: value,
          });
          removeError(name);
        }
        break;
      case "last_name":
        if (value === "") {
          addError(name, "Please provide a last name");
        } else {
          setValues({
            // On autofill we get a stringified value.
            ...values,
            last_name: value,
          });
          removeError(name);
        }
        break;
      case "email":
        // eslint-disable-next-line no-restricted-globals
        if (!validator.isEmail(value)) {
          addError(name, "Please provide a valid email address");
        } else {
          setValues({
            // On autofill we get a stringified value.
            ...values,
            email: value,
          });
          removeError(name);
        }
        break;
      case "reason":
        setValues({
          // On autofill we get a stringified value.
          ...values,
          reason: value,
        });
        break;
      case "message_input":
        setValues({
          // On autofill we get a stringified value.
          ...values,
          message: value,
        });
        break;
      default:
        break;
    }
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     let submit = true;
  //     // eslint-disable-next-line no-restricted-syntax
  //     for (const value of Object.values(error)) {
  //       if (!value.errorState) {
  //         // eslint-disable-next-line no-restricted-syntax
  //         for (const [keyInner, valueInner] of Object.entries(values)) {
  //           if (valueInner === "" && keyInner !== "phone_number") {
  //             submit = false;
  //             break;
  //           }
  //         }
  //       }
  //     }
  //     if (submit) {
  //       setSubmitted(true);
  //     }
  //   };

  //   useEffect(() => {
  //     if (submitted) {
  //       console.log("Contact form submitted");
  //     }
  //   }, [submitted]);

  return (
    <form
      name="contact-form"
      data-netlify="true"
      method="POST"
      className={classes.formContainer}
      netlify-honeypot="bot-field"
    >
      {/* This is needed when using gatsby to generate the form submissions https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/#form-handling-with-static-site-generators */}
      <input type="hidden" name="form-name" value="contact-form" />
      <TextField
        label="First Name"
        name="first_name"
        id="first_name"
        onChange={handleChange}
        required
        className={classes.inputBox}
        error={error.first_name.errorState}
        helperText={error.first_name.helperText}
      />
      <TextField
        label="Last Name"
        name="last_name"
        id="last_name"
        onChange={handleChange}
        required
        className={classes.inputBox}
        error={error.last_name.errorState}
        helperText={error.last_name.helperText}
      />
      <TextField
        label="Email"
        name="email"
        id="email"
        onChange={handleChange}
        required
        className={classes.inputBox}
        error={error.email.errorState}
        helperText={error.email.helperText}
      />
      <PhoneInput
        name="phone_number"
        id="phone_number"
        international
        countryCallingCodeEditable={false}
        defaultCountry="PE"
        value={values.phone_number}
        onChange={(value) =>
          setValues({
            ...values,
            phone_number: value,
          })
        }
        className={classes.phoneInput}
      />
      {values.phone_number && !isPossiblePhoneNumber(values.phone_number) && (
        <TextSection body="Invalid Phone Number" style={helperTextStyle} />
      )}
      <TextField
        label="Reason for Contact"
        name="reason"
        id="reason"
        fullWidth
        onChange={handleChange}
        required
        className={classes.inputBox}
      />
      <TextField
        label="Message"
        name="message_input"
        id="message_input"
        fullWidth
        multiline
        minRows={6}
        onChange={handleChange}
        required
        className={classes.inputBox}
      />
      {!submitted ? (
        <button type="submit" className={classes.button}>
          Submit
        </button>
      ) : (
        <TextSection
          body="Thank you for reaching out! We will get back to you shortly"
          style={submitTextStyle}
        />
      )}
    </form>
  );
};

export default ContactForm;
