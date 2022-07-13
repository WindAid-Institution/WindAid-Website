import React from "react";
import PropTypes from "prop-types";
import FormGroup from "@mui/material/FormGroup";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import useClasses from "../../../styles/useClasses";

const styles = (theme) => ({
  container: {
    width: "100%",
    display: "flex",
    margin: "16px 0 16px 16px",
  },

  label: {
    color: "#4F4F4F",
    textAlign: "left",
  },

  labelChecked: {
    fontWeight: theme.typography.fontWeightBold,
  },
});

const DonateWidgetCheckbox = ({ handleCheckboxToggle, isChecked }) => {
  const classes = useClasses(styles);
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
