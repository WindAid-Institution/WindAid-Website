import React from "react";
import PropTypes from "prop-types";
import { useForm } from "uniforms";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";

const FormError = ({ isError, errorMessage }) => {
  const { error } = useForm();
  const classes = {
    alert: {
      margin: "32px 0",
    },
  };

  if (error || isError) {
    return (
      <Alert sx={classes.alert} severity="error">
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
