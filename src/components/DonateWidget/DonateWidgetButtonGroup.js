import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
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

    "& > span > p": {
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightBold,
    },
  },

  buttonText: {
    color: "#828282",
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

  console.log("val", value);
  return (
    <TextField
      className={classes.textInput}
      id="outlined-basic"
      label="Other Amount"
      variant="outlined"
      type="number"
      onChange={handleInputChange}
      value={value}
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
        <Grid item key={val} xs={4}>
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
  value: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func,
};

ValueInput.defaultProps = {
  handleInputChange: () => console.info("Function is not provided"),
};

DonateWidgetButtonGroup.propTypes = {
  handleButtonClick: PropTypes.func,
  donationValue: PropTypes.number.isRequired,
  handleInputChange: PropTypes.func,
  inputValue: PropTypes.string.isRequired,
  buttonsValues: PropTypes.array.isRequired,
};
DonateWidgetButtonGroup.defaultProps = {
  handleButtonClick: () => console.info("Function is not provided"),
  handleInputChange: () => console.info("Function is not provided"),
};

export default DonateWidgetButtonGroup;
