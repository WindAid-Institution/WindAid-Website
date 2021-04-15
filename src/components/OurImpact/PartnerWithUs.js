import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

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

  link: {
    display: "inline-block",
    marginTop: "26px",

    "&:hover": {
      textDecoration: "none",
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
          <Link className={classes.link} to="/">
            <Button text="View Our Programs" />
          </Link>
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
