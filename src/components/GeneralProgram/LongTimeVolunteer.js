import React from "react";

import { makeStyles, useTheme } from "@mui/styles";
import { GatsbyImage } from "gatsby-plugin-image";
import clsx from "clsx";

import { ROUTES } from "src/constants/routes";
import Body from "shared/Body";
import Title from "shared/Title";
import Button from "shared/Button";
import SectionWrapper from "shared/SectionWrapper";
import useGeneralProgramData from "queries/generalProgram";

const useStyles = makeStyles((theme) => ({
  contrast: {
    color: theme.palette.secondary.main,
    "& h3": {
      color: theme.palette.secondary.main,
    },
  },
  buttonContrast: {
    "& .custom-button": {
      color: theme.palette.primary.main,
      background: theme.palette.secondary.main,
    },
  },
  wrapper: {
    height: "auto",
    [theme.breakpoints.only("xs")]: {
      background: theme.palette.primary.main,
    },
  },
  spacing: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "32px",
      marginBottom: "32px",
    },

    [theme.breakpoints.up("md")]: {
      margin: 0,
    },
  },
  content: {
    height: "auto",
    zIndex: 2,
  },
  gridLayout: {
    display: "grid",
    gridGap: "16px",
    gridColumn: 1,
    gridTemplateAreas: `
    "title"
    "img"
    "body"`,
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(2),
      gridColumn: 1,
      gridTemplateAreas: `
    "title"
    "body"
    "img"`,
    },
    [theme.breakpoints.up("md")]: {
      gridTemplateRows: "40px 1fr",
      gridColumn: 2,
      gridTemplateColumns: "1fr 1fr",
      gridTemplateAreas: `
    "title img"
    "body img"`,
    },
  },
  gridAreaImg: {
    gridArea: "img",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.only("sm")]: {
      background: theme.palette.secondary.dark,
    },
  },
  gridAreaTitle: {
    gridArea: "title",
    position: "relative",
  },
  gridAreaBody: {
    gridArea: "body",
    paddingBottom: theme.spacing(3),
  },
  img: {
    [theme.breakpoints.only("sm")]: {
      width: "100%",
    },

    [theme.breakpoints.up("md")]: {
      maxWidth: "560px",
    },
  },
}));

const LongTimeVolunteer = () => {
  const classes = useStyles();
  const theme = useTheme();

  const whiteTextStyle = { textStyle: { color: theme.palette.secondary.main } };

  const {
    volunteerLong: {
      title,
      body: { body },
      image,
    },
  } = useGeneralProgramData();

  return (
    <SectionWrapper bgColor="primary">
      <div spacing={2} className={clsx(classes.wrapper, classes.gridLayout)}>
        <div className={clsx(classes.content, classes.gridAreaTitle)}>
          <Title
            title={title}
            className={classes.contrast}
            style={whiteTextStyle}
          />
        </div>
        <div
          className={clsx(
            classes.content,
            classes.gridAreaBody,
            classes.buttonContrast
          )}
        >
          <Body
            body={body}
            className={classes.contrast}
            style={whiteTextStyle}
          />
          <Button
            inverted
            text="Learn about the program"
            style={{ marginTop: theme.spacing(2) }}
            route={ROUTES.LONG_TERM_PROGRAM}
          />
        </div>
        <div className={classes.gridAreaImg}>
          <div className={clsx(classes.content)}>
            <GatsbyImage
              image={image.gatsbyImageData}
              alt={image.description}
              className={clsx(classes.spacing, classes.img)}
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LongTimeVolunteer;
