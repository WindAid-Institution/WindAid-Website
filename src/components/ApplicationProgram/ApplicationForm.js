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
import Alert from "@material-ui/lab/Alert";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Recaptcha from "react-recaptcha";

import Title from "shared/Title";
import { applicationFormSchemaBridge } from "src/schemas/applicationFormSchema";
import DisplayIf from "./DisplayIf";

const pageData = {
  generalTitle: "General Information",
  health: "Health Info",
  programInterest: "Program Interest",
};

const useStyles = makeStyles((theme) => ({
  root: {
    // input
    "& > div > div > div ": {
      minHeight: "60px",
    },

    // input wrapper
    "& > div > div > div > div": {
      borderRadius: "5px",
      minHeight: "50px",
    },

    // input label
    "& > div > div> div > label": {
      top: "4px",
    },
    // text area input
    "& > div > div > div > div > textarea": {
      paddingTop: theme.spacing(2),
    },
  },

  emptyItem: {
    display: "none",

    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },

  error: {
    padding: "16px 0",
    color: "red",
  },

  recaptcha: {
    margin: "16px 0",
  },

  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
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
      <Title style={titleStyle} title={pageData.generalTitle} size="lg" />

      <AutoForm
        schema={applicationFormSchemaBridge}
        onSubmit={handleSubmit}
        showInlineError
      >
        <Grid className={classes.root} container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <AutoField name="firstName" />
            </Grid>
            <Grid item xs={12} md={6}>
              <AutoField name="lastName" />
            </Grid>
            <Grid item xs={12} md={6}>
              <AutoField name="emailAddress" />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <AutoField name="country" />
            </Grid>
            <Grid item xs={12} md={6}>
              <AutoField name="passportNumber" />
            </Grid>
            <Grid item xs={12} md={6}>
              <AutoField name="sex" />
            </Grid>
            <Grid item xs={12} md={6}>
              <AutoField name="spanishProfciency" />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <AutoField name="higherEducation" />
            </Grid>

            <Grid item xs={12} md={7}>
              <DisplayIf
                condition={(context) =>
                  context.model.higherEducation === "Other"
                }
              >
                <AutoField name="fieldOfStudy" />
              </DisplayIf>
            </Grid>
            <Grid item xs={12}>
              <RadioField name="isEmployeed" />
            </Grid>
            <Grid item xs={12} md={7}>
              <DisplayIf
                condition={(context) => context.model.isEmployeed === "Yes"}
              >
                <AutoField name="occupation" />
              </DisplayIf>
            </Grid>
          </Grid>

          <Title style={titleStyle} title={pageData.generalTitle} size="lg" />

          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <AutoField name="specialDietary" />
            </Grid>
            <Grid item xs={12} md={7}>
              <AutoField name="ilness" />
            </Grid>
            <Grid item xs={12} md={7}>
              <AutoField name="medication" />
            </Grid>
          </Grid>
          <Title
            style={titleStyle}
            title={pageData.programInterest}
            size="lg"
          />

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <AutoField name="programToApply" />
            </Grid>
            <Grid item xs={12} md={6} className={classes.emptyItem} />
            <Grid item xs={12} md={6}>
              <AutoField name="startDateOne" type="date" format="DD-MM-YYYY" />
            </Grid>
            <Grid item xs={12} md={6}>
              <AutoField name="startDateTwo" type="date" format="DD-MM-YYYY" />
            </Grid>
            <Grid item xs={12} md={9}>
              <AutoField name="intrests" />
            </Grid>
            <Grid item xs={12} md={9}>
              <AutoField name="questions" />
            </Grid>
            <Grid item xs={12} md={6}>
              <AutoField name="howHear" />
            </Grid>
            <Grid item xs={12} md={6} className={classes.emptyItem} />
            <Grid item xs={12} md={6}>
              <DisplayIf
                condition={(context) => context.model.howHear === "Ambassador"}
              >
                <AutoField name="ambassadorName" />
              </DisplayIf>
            </Grid>
          </Grid>
          <Grid item xs={12}>
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
            <Typography>
              You must check this box to submit your application.
            </Typography>
            <BoolField name="termAndConditions" required />
          </Grid>
        </Grid>

        {!isVerified && isError && (
          <Typography className={classes.error}>
            Please check reCAPTHA to continue
          </Typography>
        )}

        {isVerified && isError && (
          <Alert severity="error">
            <Typography className={classes.error}>
              There is a problem with submitting your form. Please try again
              later or contact us.
            </Typography>
          </Alert>
        )}

        <Recaptcha
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          render="explicit"
          verifyCallback={handleCaptchaVerification}
          className={classes.recaptcha}
        />

        <SubmitField />
      </AutoForm>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default ApplicationForm;
