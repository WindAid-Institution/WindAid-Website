import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import useGeneralProgramData from "queries/generalProgram";
import { getImage } from "src/utils/utils";

const textSectionStyle = {
  titleStyle: { textStyle: { maxWidth: "740px" } },
  bodyStyle: { textStyle: { maxWidth: "740px" } },
};

const Overview = () => {
  const theme = useTheme();

  const {
    overview: {
      header,
      title: textTitle,
      body: { body },
      bodyTwo: { bodyTwo },
      images,
    },
  } = useGeneralProgramData();

  const classes = {
    smallImageBox: {
      display: "flex",
      justifyContent: "flex-end",
      width: "100%",
      margin: "auto",
      height: "calc(10vw + 200px)",
      "& div": {
        width: "100%",
      },
      [theme.breakpoints.up("md")]: {
        width: "calc(10vw + 240px)",
        margin: 0,
        height: "auto",
      },
    },
    text: {
      paddingBottom: theme.spacing(2),
    },
    spacingRight: {
      [theme.breakpoints.up("md")]: {
        paddingRight: theme.spacing(1),
      },
    },
    spacingLeft: {
      [theme.breakpoints.up("md")]: {
        paddingLeft: theme.spacing(1),
      },
    },
    hideOnSm: {
      [theme.breakpoints.only("sm")]: {
        display: "none",
      },
    },
    img: {
      marginTop: theme.spacing(2),
      width: "100%",
      "& div": {
        width: "100%",
      },
    },
  };
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const groupOnePicture = getImage(images, "group 1");
  const groupTwoPicture = getImage(images, "group 2");
  const groupThreePicture = getImage(images, "group 3");

  return (
    <SectionWrapper>
      <Grid container justifyContent="space-between">
        <Grid item sx={classes.text} sm={12} md={8}>
          <TextSection
            header={header}
            title={textTitle}
            body={body}
            bodyTwo={bodyTwo}
            style={textSectionStyle}
            size={isUpMd ? "md" : "lg"}
          />
        </Grid>
        <Grid item sm={12} md={4} sx={classes.smallImageBox}>
          <GatsbyImage
            image={groupOnePicture.gatsbyImageData}
            alt={groupOnePicture.description}
          />
        </Grid>
        <Grid
          item
          md={6}
          sx={{ ...classes.spacingRight, ...classes.img, ...classes.hideOnSm }}
        >
          <GatsbyImage
            image={groupTwoPicture.gatsbyImageData}
            alt={groupTwoPicture.description}
          />
        </Grid>
        <Grid
          item
          md={6}
          sm={12}
          sx={{ ...classes.spacingLeft, ...classes.img }}
        >
          <GatsbyImage
            image={groupThreePicture.gatsbyImageData}
            alt={groupThreePicture.description}
          />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default Overview;
