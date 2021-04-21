import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { GatsbyImage } from "gatsby-plugin-image";
import clsx from "clsx";

import Body from "shared/Body";
import Title from "shared/Title";
import Button from "shared/Button";
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
    paddingTop: theme.spacing(3),
    [theme.breakpoints.only("xs")]: {
      background: theme.palette.primary.main,
    },
  },
  spacing: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "32px",
      marginBottom: "32px",
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
  },
}));

const LongTimeVolunteer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const whiteTextStyle = { textStyle: { color: theme.palette.secondary.main } };

  const {
    volunteerLong: {
      title,
      body: { body },
      image,
    },
  } = useGeneralProgramData();

  return (
    <div
      spacing={2}
      className={clsx(
        isUpMd && "container",
        classes.wrapper,
        classes.gridLayout
      )}
    >
      <div
        className={clsx("container", classes.content, classes.gridAreaTitle)}
      >
        <Title
          title={title}
          className={classes.contrast}
          style={whiteTextStyle}
        />
      </div>
      <div
        className={clsx(
          "container",
          classes.content,
          classes.gridAreaBody,
          classes.buttonContrast
        )}
      >
        <Body body={body} className={classes.contrast} style={whiteTextStyle} />
        <Button inverted text="Learn about the program" />
      </div>
      <div className={classes.gridAreaImg}>
        <div className={clsx("container", classes.content)}>
          <GatsbyImage
            image={image.gatsbyImageData}
            alt={image.description}
            className={clsx(classes.spacing, classes.img)}
          />
        </div>
      </div>
    </div>
  );
};

export default LongTimeVolunteer;
