import React from "react";

import { ROUTES } from "src/constants/routes";
import useShortTermData from "queries/levelTwo";
import { Typography } from "@mui/material";
import Separator from "../../shared/Separator";
import useClasses from "../../styles/useClasses";

const styles = () => ({
  link: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "black",
  },
});

const Apply = () => {
  const {
    apply: {
      title,
      bodyTwo: { bodyTwo },
      image,
    },
  } = useShortTermData();
  const classes = useClasses(styles);
  const data = {
    route: ROUTES.APPLY,
    title,
    bodyTwo,
    image,
  };
  return (
    <Separator {...data}>
      <Typography variant="body1">
        For any questions, reach out to our team at{" "}
        <a href="mailto:volunteer@WindAid.org" className={classes.link}>
          volunteer@WindAid.org
        </a>{" "}
        or visit our{" "}
        <a href={ROUTES.FAQ.path} className={classes.link}>
          FAQ page
        </a>
      </Typography>
    </Separator>
  );
};

export default Apply;
