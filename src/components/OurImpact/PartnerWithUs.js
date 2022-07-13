import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";

import { ROUTES } from "src/constants/routes";
import useOurImpactData from "queries/ourImpact";
import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import Button from "shared/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      alignItems: "center",
    },
  },

  contentContainer: {
    [theme.breakpoints.up("md")]: {
      paddingRight: "62px",
      alignItems: "center",
    },
  },

  image: {
    objectFit: "cover",
    objectPosition: "center",
    width: "100%",
    height: "204px",
    margin: "32px 0",
    transition: "height 0.2s ease",

    [theme.breakpoints.up("sm")]: {
      height: "304px",
    },

    [theme.breakpoints.up("md")]: {
      minWidth: "464px",
      height: "368px",
    },
  },
}));

const PartnerWithUs = () => {
  const {
    partnerWithUs: {
      title,
      body: { body },
      image,
    },
  } = useOurImpactData();

  const classes = useStyles();
  return (
    <SectionWrapper>
      <Box className={classes.container}>
        <Box className={classes.contentContainer}>
          <TextSection title={title} body={body} size="auto" />
          <Button
            text="View Our Programs"
            style={{ marginTop: "26px" }}
            route={ROUTES.PARTNERSHIP}
          />
        </Box>

        <GatsbyImage
          image={image.gatsbyImageData}
          alt={image.description}
          className={classes.image}
        />
      </Box>
    </SectionWrapper>
  );
};
export default PartnerWithUs;
