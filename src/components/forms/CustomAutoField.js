import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { AutoField } from "uniforms-material";
import { connectField } from "uniforms";

const useStyles = makeStyles((theme) => ({
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
    backgroundColor: theme.palette.secondary.main,
    "& > div": {
      borderRadius: "inherit",
    },
  },
}));

const CustomAutoInput = ({
  name,
  label,
  type,
  required,
  field: { uniforms },
}) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.root}>
      <InputLabel
        className={classes.label}
        shrink
        required={required}
        htmlFor={name}
      >
        {label}
      </InputLabel>
      {uniforms?.additionalinfo && uniforms.additionalinfo}
      <AutoField label="" className={classes.field} id={name} type={type} />
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
