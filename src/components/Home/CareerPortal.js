import React from "react";

import { ROUTES } from "src/constants/routes";
import useHomepageData from "../../hooks/queries/homepage";
import Separator from "../../shared/Separator";

const CareerPortal = () => {
  const {
    careerPortal: {
      title,
      body: { body },
      bodyTwo: { bodyTwo },
      image,
    },
  } = useHomepageData();

  const data = {
    route: ROUTES.CAREERS,
    title,
    body,
    bodyTwo,
    image,
  };
  return <Separator {...data} />;
};

export default CareerPortal;
