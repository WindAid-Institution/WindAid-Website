import React from "react";

import { ROUTES } from "src/constants/routes";
import useShortTermData from "queries/shortTerm";
import Separator from "../../shared/Separator";

const Apply = () => {
  const {
    apply: {
      title,
      body: { body },
      bodyTwo: { bodyTwo },
      image,
    },
  } = useShortTermData();

  const data = {
    route: ROUTES.APPLY,
    title,
    body,
    bodyTwo,
    image,
  };
  return <Separator {...data} />;
};

export default Apply;
