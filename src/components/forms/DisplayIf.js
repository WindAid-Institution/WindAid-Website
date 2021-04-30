/* eslint-disable no-unused-vars */
import React, { Children } from "react";
import { useForm } from "uniforms";

const DisplayIf = ({ children, condition }) => {
  const uniforms = useForm();
  return condition(uniforms) ? Children.only(children) : null;
};

export default DisplayIf;
