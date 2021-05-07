import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SuccessIcon from "images/icons/success.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "24px 12px",
  },

  upperText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
  },

  icon: {
    marginRight: theme.spacing(1),
  },

  lowerText: {
    textAlign: "center",
  },
}));

const DonateWidgetSuccess = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography variant="h6" className={classes.upperText}>
        <img className={classes.icon} src={SuccessIcon} alt="Success sign" />
        Donation Sucessfull!
      </Typography>
      <Typography className={classes.lowerText}>
        Thank you, your donation is being processed. We will be sending you an
        email with your receipt shortly
      </Typography>
    </Box>
  );
};

export default DonateWidgetSuccess;
