import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import Header from "./Header";
import SubHeader from "./SubHeader";
import Title from "./Title";
import Body from "./Body";

const useStyles = makeStyles({
  root: (rootStyle) => ({
    ...rootStyle,
  }),
});

const TextSection = ({
  header,
  title,
  subHeader,
  body,
  bodyTwo,
  size,
  style,
}) => {
  const { rootStyle, headerStyle, titleStyle, subHeaderStyle, bodyStyle } =
    style || {};

  const classes = useStyles(rootStyle);
  return (
    <Box className={classes.root}>
      {header && <Header header={header} style={headerStyle} />}
      {title && <Title title={title} style={titleStyle} size={size} />}
      {subHeader && <SubHeader subHeader={subHeader} style={subHeaderStyle} />}
      {body && <Body body={body} style={bodyStyle} size={size} />}
      {bodyTwo && <Body body={bodyTwo} style={bodyStyle} size={size} />}
    </Box>
  );
};

TextSection.propTypes = {
  header: PropTypes.string,
  title: PropTypes.string,
  subHeader: PropTypes.string,
  body: PropTypes.string,
  bodyTwo: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
};
TextSection.defaultProps = {
  header: "",
  title: "",
  subHeader: "",
  body: "",
  bodyTwo: "",
  size: "auto",
  style: {},
};

export default TextSection;
