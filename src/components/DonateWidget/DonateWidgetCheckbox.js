import React from "react";
import PropTypes from "prop-types";
import FormGroup from "@material-ui/core/FormGroup";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    margin: "16px 0 16px 16px",
  },

  label: {
    color: "#4F4F4F",
  },

  labelChecked: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const DonateWidgetCheckbox = ({ handleCheckboxToggle, isChecked }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked}
              onChange={handleCheckboxToggle}
              name="checkedB"
              color="primary"
            />
          }
          label={
            <Typography className={classes.label}>
              I would like this to be a monthly donation
            </Typography>
          }
        />
      </FormGroup>
    </Box>
  );
};

DonateWidgetCheckbox.propTypes = {
  handleCheckboxToggle: PropTypes.func,
  isChecked: PropTypes.bool.isRequired,
};

DonateWidgetCheckbox.defaultProps = {
  handleCheckboxToggle: () => console.info("Function is not provided"),
};

export default DonateWidgetCheckbox;
