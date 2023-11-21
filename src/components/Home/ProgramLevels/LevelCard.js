import React from "react";

import { Link } from "gatsby";
import PropTypes from "prop-types";
import StackedCards from "shared/StackedCards";
import TextSection from "shared/TextSection";
import { ROUTES } from "src/constants/routes";

import theme from "../../../../theme";

const additionalStyle = {
  textContainerStyle: {
    [theme.breakpoints.up("lg")]: {
      height: "auto",
    },
  },
};

const LevelCard = ({ header, title, body, image, path }) => {
  const { body: bodyContent } = body;

  return (
    <Link to={ROUTES[path].path} style={{ textDecoration: "none" }}>
      <StackedCards image={image} style={additionalStyle}>
        <TextSection title={title} header={header} body={bodyContent} />
      </StackedCards>
    </Link>
  );
};

LevelCard.propTypes = {
  header: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
};

export default LevelCard;
