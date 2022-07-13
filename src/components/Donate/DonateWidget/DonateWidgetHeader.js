/* eslint-disable max-len */
import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import useClasses from "../../../styles/useClasses";

const styles = (theme) => ({
  header: {
    backgroundColor: theme.palette.secondary.dark,
    maxHeight: "72px",
    textAlign: "center",

    "& > div > h6": {
      fontWeight: 600,
    },
  },

  editAmount: {
    display: "inline",
    textDecoration: "none",

    cursor: "pointer",

    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: theme.palette.primary.main,
    },
  },

  editAmountContent: {
    color: theme.palette.primary.main,
  },
});

const DonateWidgetHeader = ({ donationValue, isFirstStep, goBack, isDone }) => {
  const classes = useClasses(styles);

  return (
    <CardHeader
      className={classes.header}
      title={
        isDone ? (
          <Typography className={classes.headerText} variant="h6">
            Thank you!
          </Typography>
        ) : (
          <Typography className={classes.headerText} variant="h6">
            {isFirstStep ? (
              "Choose an amount to give"
            ) : (
              <>
                {`Giving $${donationValue} `}

                <Box className={classes.editAmount} onClick={goBack}>
                  (
                  <span className={classes.editAmountContent}>edit amount</span>
                  )
                </Box>
              </>
            )}
          </Typography>
        )
      }
    />
  );
};

DonateWidgetHeader.propTypes = {
  donationValue: PropTypes.number.isRequired,
  isFirstStep: PropTypes.bool.isRequired,
  goBack: PropTypes.func.isRequired,
  isDone: PropTypes.bool.isRequired,
};

export default DonateWidgetHeader;
