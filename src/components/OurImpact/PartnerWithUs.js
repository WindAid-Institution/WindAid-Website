import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Box from "@mui/material/Box";

import { ROUTES } from "src/constants/routes";
import useOurImpactData from "queries/ourImpact";
import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import Button from "shared/Button";
import useClasses from "../../styles/useClasses";

const styles = (theme) => ({
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
});

const PartnerWithUs = () => {
  const {
    partnerWithUs: {
      title,
      body: { body },
      image,
    },
  } = useOurImpactData();

  const classes = useClasses(styles);
  return (
    <SectionWrapper>
      <Box className={classes.container}>
        <Box className={classes.contentContainer}>
          <TextSection title={title} body={body} size="auto" />
          <Button
            text="Contact Us"
            style={{ marginTop: "26px" }}
            route={ROUTES.CONTACT_US}
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
