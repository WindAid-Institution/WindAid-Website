import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { AutoField, connectField } from "uniforms-material";

const useStyles = makeStyles({
  root: (rootStyle) => ({
    ...rootStyle,
  }),
});

const TextInput = ({ name, label }) => {
  console.log(name, label);
  return (
    <FormControl>
      <InputLabel shrink>{label}</InputLabel>
      <AutoField name={name} />
    </FormControl>
  );
};

export default TextInput;
