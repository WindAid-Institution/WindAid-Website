import React from "react";
import {
  AutoForm,
  AutoField,
  SubmitField,
  RadioField,
  DateField,
} from "uniforms-material";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

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
}));

const titleStyle = {
  textStyle: {
    margin: "24px 0",
  },
};

const ApplicationForm = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };

  const classes = useStyles();
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
            <AutoField name="termAndConditions" />
          </Grid>
        </Grid>
        <SubmitField />
      </AutoForm>
    </>
  );
};

export default ApplicationForm;
