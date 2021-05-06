import React from "react";
import PropTypes from "prop-types";
import { useForm } from "uniforms";
import Alert from "@material-ui/lab/Alert";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  alert: {
    margin: "32px 0",
  },
});

const FormError = ({ isError, errorMessage }) => {
  const { error } = useForm();
  const classes = useStyles();

  if (error || isError) {
    return (
      <Alert className={classes.alert} severity="error">
        <Typography>{errorMessage}</Typography>
      </Alert>
    );
  }

  return null;
};

FormError.propTypes = {
  isError: PropTypes.bool,
  errorMessage: PropTypes.string.isRequired,
};

FormError.defaultProps = {
  isError: false,
};

export default FormError;
