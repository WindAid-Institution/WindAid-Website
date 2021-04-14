import React from "react";
import { Button as MuiButton } from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: (inverted) => ({
    color: inverted ? theme.palette.primary : theme.palette.secondary,
    backgroundColor: inverted ? theme.palette.secondary : theme.palette.primary,
  }),
}));

const Button = ({ inverted, text }) => {
  const classes = useStyles(inverted);

  return (
    <MuiButton fullWidth className={classes.root}>
      {text}
    </MuiButton>
  );
};

export default Button;
