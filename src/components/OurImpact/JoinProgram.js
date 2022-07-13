import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useTheme } from "@mui/styles";
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
      flexDirection: "row-reverse",
      alignItems: "center",
    },
  },

  contentContainer: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "62px",
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

const JoinProgram = () => {
  const {
    joinOurProgram: {
      title,
      body: { body },
      image,
    },
  } = useOurImpactData();

  const classes = useClasses(styles);
  const theme = useTheme();

  return (
    <SectionWrapper bgColor="primary">
      <Box className={classes.container}>
        <Box className={classes.contentContainer}>
          <TextSection
            title={title}
            body={body}
            size="auto"
            style={{
              bodyStyle: { textStyle: { color: theme.palette.secondary.main } },
              titleStyle: {
                textStyle: { color: theme.palette.secondary.main },
              },
            }}
          />
          <Button
            text="View Our Programs"
            inverted
            style={{ marginTop: "26px" }}
            route={ROUTES.PROGRAMS}
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
export default JoinProgram;
