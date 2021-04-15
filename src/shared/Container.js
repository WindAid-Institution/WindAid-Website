import React from "react";
import PropTypes from "prop-types";
import { Container as MuiContainer } from "@material-ui/core/Container";

const Container = ({ children }) => <MuiContainer>{children}</MuiContainer>;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
