import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  button: {
    minWidth: 0,
    width: "114px",
    height: "64px",
    backgroundColor: "#F5F5F5",
    borderRadius: "6px",
    border: "1px solid #BDBDBD",
    boxShadow: "none",

    "&:hover": {
      backgroundColor: theme.palette.secondary.main,

      "& > span > p": {
        fontWeight: theme.typography.fontWeightBold,
      },
    },
  },

  activeButton: {
    backgroundColor: theme.palette.primary.main,

    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },

    "& > p": {
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightBold,
    },
  },

  buttonText: {
    color: theme.palette.primary.dark,
    fontWeight: theme.typography.fontWeightRegular,
  },

  valueInputContainer: {
    display: "flex",
    alignItems: "center",
  },

  textInput: {
    width: "256px",
    display: "flex",

    "& > div": {
      height: "64px",
      borderRadius: "6px",
      borderColor: "#BDBDBD",
      backgroundColor: "#F5F5F5",
    },

    "& > label": {
      marginTop: "2px",
    },
  },
}));
const ValueButton = ({ value, handleButtonClick, isActive }) => {
  const classes = useStyles();
  return (
    <Button
      value={value}
      onClick={handleButtonClick}
      className={clsx(classes.button, isActive && classes.activeButton)}
    >
      <Typography className={classes.buttonText}>{`$${value} USD`}</Typography>
    </Button>
  );
};

const ValueInput = ({ value, handleInputChange }) => {
  const classes = useStyles();

  const [isFocused, setIsFocused] = useState(false);
  const isAdornmentVisible = isFocused || Number.isInteger(value);

  return (
    <TextField
      className={classes.textInput}
      id="outlined-basic"
      label="Other Amount"
      variant="outlined"
      type="number"
      // placeholder="Other Amount"
      onChange={handleInputChange}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      value={value}
      InputProps={{
        startAdornment: isAdornmentVisible ? (
          <InputAdornment position="start">$</InputAdornment>
        ) : null,
        endAdornment: isAdornmentVisible ? (
          <InputAdornment position="end">USD</InputAdornment>
        ) : null,
        pattern: "[0-9]",
      }}
    />
  );
};

const DonateWidgetButtonGroup = ({
  handleButtonClick,
  donationValue,
  handleInputChange,
  inputValue,
  buttonsValues,
}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {buttonsValues.map((val) => (
        <Grid item key={val}>
          <ValueButton
            handleButtonClick={handleButtonClick}
            value={val}
            isActive={donationValue === val}
          />
        </Grid>
      ))}

      <Grid className={classes.valueInputContainer} item xs={8}>
        <ValueInput value={inputValue} handleInputChange={handleInputChange} />
      </Grid>
    </Grid>
  );
};

ValueButton.propTypes = {
  value: PropTypes.number.isRequired,
  handleButtonClick: PropTypes.func,
  isActive: PropTypes.bool.isRequired,
};

ValueButton.defaultProps = {
  handleButtonClick: () => console.info("Function is not provided"),
};

ValueInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleInputChange: PropTypes.func,
};

ValueInput.defaultProps = {
  handleInputChange: () => console.info("Function is not provided"),
};

DonateWidgetButtonGroup.propTypes = {
  handleButtonClick: PropTypes.func,
  donationValue: PropTypes.number.isRequired,
  handleInputChange: PropTypes.func,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  buttonsValues: PropTypes.array.isRequired,
};
DonateWidgetButtonGroup.defaultProps = {
  handleButtonClick: () => console.info("Function is not provided"),
  handleInputChange: () => console.info("Function is not provided"),
};

export default DonateWidgetButtonGroup;
