import React from "react";
import PropTypes from "prop-types";
import useTheme from "@mui/material/styles/useTheme";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { AutoField } from "uniforms-material";
import { connectField } from "uniforms";

const CustomAutoInput = ({
  name,
  label,
  type,
  required,
  field: { uniforms },
}) => {
  const theme = useTheme();

  const classes = {
    root: {
      width: "100%",

      "&:focus-within > label": {
        color: theme.palette.primary.main,
      },
    },
    label: {
      color: "#333333",
      fontWeight: theme.typography.fontWeightBold,
      fontSize: "16px",
      lineHeight: "28px",
      position: "relative",

      [theme.breakpoints.up("sm")]: {
        fontSize: "21px",
      },
    },
    field: {
      width: "100%",
      borderRadius: "5px",

      "& > div": {
        borderRadius: "inherit",
        backgroundColor: theme.palette.secondary.main,
      },

      "& > p": {
        marginLeft: 0,
      },
    },
  };

  return (
    <FormControl sx={classes.root}>
      <InputLabel sx={classes.label} shrink required={required} htmlFor={name}>
        {label}
      </InputLabel>
      {uniforms?.additionalinfo && uniforms.additionalinfo}
      <AutoField label="" style={classes.field} id={name} type={type} />
    </FormControl>
  );
};

CustomAutoInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool.isRequired,
  field: PropTypes.shape({
    uniforms: PropTypes.object.isRequired,
  }).isRequired,
};

CustomAutoInput.defaultProps = {
  type: "",
};

const CustomAutoField = connectField(CustomAutoInput, { initialValue: false });
export default CustomAutoField;
