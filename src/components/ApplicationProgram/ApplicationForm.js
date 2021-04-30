import React, { useState } from "react";
import { navigate } from "gatsby";
import axios from "axios";
import {
  AutoForm,
  AutoField,
  SubmitField,
  RadioField,
  BoolField,
} from "uniforms-material";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Recaptcha from "react-recaptcha";
import { applicationFormSchemaBridge } from "src/schemas/applicationFormSchema";

import Title from "shared/Title";
import CustomAutoField from "components/forms/CustomAutoField";
import DisplayIf from "components/forms/DisplayIf";
import FormError from "components/forms/FormError";

const pageData = {
  generalTitle: "General Information",
  health: "Health Info",
  programInterest: "Program Interest",
};

const errorMessages = {
  captcha: "Please check reCAPTHA to continue",
  submit:
    "There is a problem with submitting your form. Please try again later or contact us.",
  form:
    "There are errors in your form. Please follow instructions under the fields to send your form.",
};

const useStyles = makeStyles((theme) => ({
  formSection: {
    marginBottom: theme.spacing(6),
  },
  emptyItem: {
    display: "none",
    padding: 0,
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },

  employeedFieldContainer: {
    "& > fieldset > legend": {
      color: "#333333",
      fontWeight: theme.typography.fontWeightBold,
      fontSize: "13px",

      lineHeight: "28px",
      position: "relative",

      [theme.breakpoints.up("sm")]: {
        fontSize: "16px",
      },
    },
  },

  employeedField: {
    color: "#BDBDBD",

    "&:hover": {
      color: theme.palette.primary.main,
    },
  },

  error: {
    padding: "16px 0",
    color: "red",
  },

  beforeCheckText: {
    color: "#333333",
    fontWeight: theme.typography.fontWeightBold,
    marginTop: theme.spacing(2),
  },

  recaptcha: {
    margin: "16px 0 24px",
  },

  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.secondary.main,
  },
}));

const titleStyle = {
  textStyle: {
    margin: "24px 0",
  },
};

const ApplicationForm = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const classes = useStyles();

  const handleSubmit = async (data) => {
    if (!isVerified) {
      return setIsError(true);
    }

    setIsLoading(true);
    try {
      const result = await axios.post(
        process.env.SPREADSHEET_CONNECTION_URL,
        data
      );

      if (result?.status === 200) {
        setIsError(false);
        setIsLoading(false);
        return navigate("/completed-registration");
      }

      setIsError(true);
      return setIsLoading(false);
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
      return console.error(err);
    }
  };

  const handleCaptchaVerification = (response) => {
    if (response) {
      setIsVerified(true);
      setIsError(false);
    }
  };

  return (
    <>
      <AutoForm
        schema={applicationFormSchemaBridge}
        onSubmit={handleSubmit}
        showInlineError
      >
        <Grid className={classes.root} container>
          <Title style={titleStyle} title={pageData.generalTitle} size="lg" />
          <Grid container spacing={3} className={classes.formSection}>
            <Grid item xs={12} md={6}>
              <AutoField name="firstName" component={CustomAutoField} />
            </Grid>
            <Grid item xs={12} md={6}>
              <AutoField name="lastName" component={CustomAutoField} />
            </Grid>
            <Grid item xs={12} md={6}>
              <AutoField name="emailAddress" component={CustomAutoField} />
            </Grid>
          </Grid>

          <Grid container spacing={3} className={classes.formSection}>
            <Grid item xs={12} md={6}>
              <AutoField name="country" component={CustomAutoField} />
            </Grid>
            <Grid item xs={12} md={6}>
              <AutoField name="passportNumber" component={CustomAutoField} />
            </Grid>
            <Grid item xs={12} md={6}>
              <AutoField name="sex" component={CustomAutoField} />
            </Grid>
            <Grid item xs={12} md={6}>
              <AutoField name="spanishProfciency" component={CustomAutoField} />
            </Grid>
          </Grid>

          <Grid container spacing={3} className={classes.formSection}>
            <Grid item xs={12} md={7}>
              <AutoField name="higherEducation" component={CustomAutoField} />
            </Grid>

            <Grid item xs={12} md={7}>
              <DisplayIf
                condition={(context) =>
                  context.model.higherEducation === "Other"
                }
              >
                <AutoField name="fieldOfStudy" component={CustomAutoField} />
              </DisplayIf>
            </Grid>
            <Grid item xs={12} className={classes.employeedFieldContainer}>
              <RadioField
                name="isEmployeed"
                className={classes.employeedField}
              />
            </Grid>

            <DisplayIf
              condition={(context) => context.model.isEmployeed === "Yes"}
            >
              <Grid item xs={12} md={7}>
                <AutoField name="occupation" component={CustomAutoField} />
              </Grid>
            </DisplayIf>
          </Grid>

          <Title style={titleStyle} title={pageData.health} size="lg" />

          <Grid container spacing={3} className={classes.formSection}>
            <Grid item xs={12} md={7}>
              <AutoField name="specialDietary" component={CustomAutoField} />
            </Grid>
            <Grid item xs={12} md={7}>
              <AutoField name="ilness" component={CustomAutoField} />
            </Grid>
            <Grid item xs={12} md={7}>
              <AutoField name="medication" component={CustomAutoField} />
            </Grid>
          </Grid>
          <Title
            style={titleStyle}
            title={pageData.programInterest}
            size="lg"
          />

          <Grid container spacing={3} className={classes.formSection}>
            <Grid item xs={12} md={6}>
              <AutoField name="programToApply" component={CustomAutoField} />
            </Grid>
            <Grid item xs={12} md={6} className={classes.emptyItem} />
            <Grid item xs={12} md={6}>
              <AutoField
                name="startDateOne"
                component={CustomAutoField}
                type="date"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <AutoField
                name="startDateTwo"
                component={CustomAutoField}
                type="date"
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <AutoField name="intrests" component={CustomAutoField} />
            </Grid>
            <Grid item xs={12} md={9}>
              <AutoField name="questions" component={CustomAutoField} />
            </Grid>
            <Grid item xs={12} md={6}>
              <AutoField name="howHear" component={CustomAutoField} />
            </Grid>
            <Grid item xs={12} md={6} className={classes.emptyItem} />

            <DisplayIf
              condition={(context) => context.model.howHear === "Ambassador"}
            >
              <Grid item xs={12} md={6}>
                <AutoField name="ambassadorName" component={CustomAutoField} />
              </Grid>
            </DisplayIf>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography>
              {`We will respond to your request within a maximum period of 7 days.
            Please also check your spam folder. If submitting the application
            doesn't work, please contact: `}
              <Link href="mailto:volunteer@windaid.org">
                volunteer@windaid.org
              </Link>
              .
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.beforeCheckText}>
              You must check this box to submit your application.
            </Typography>
            <BoolField name="termAndConditions" required />
          </Grid>
        </Grid>

        <Recaptcha
          sitekey={process.env.CAPTCHA_SITE_KEY}
          render="explicit"
          verifyCallback={handleCaptchaVerification}
          className={classes.recaptcha}
        />

        {!isVerified && isError && (
          <FormError isError={isError} errorMessage={errorMessages.captcha} />
        )}

        {isVerified && isError && (
          <FormError isError={isError} errorMessage={errorMessages.submit} />
        )}

        <FormError errorMessage={errorMessages.form} />
        <SubmitField />
      </AutoForm>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default ApplicationForm;
