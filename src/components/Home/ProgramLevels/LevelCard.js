import React from "react";
import PropTypes from "prop-types";

import TextSection from "shared/TextSection";
import Card from "shared/Card";
import theme from "../../../../theme";

const additionalStyle = {
  textContainerStyle: {
    [theme.breakpoints.up("lg")]: {
      height: "650px",
    },
  },
};

const LevelCard = ({ header, title, body, image }) => {
  const { body: bodyContent } = body;

  return (
    <Card image={image} style={additionalStyle}>
      <TextSection title={title} header={header} body={bodyContent} />
    </Card>
  );
};

LevelCard.propTypes = {
  header: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
};

export default LevelCard;
