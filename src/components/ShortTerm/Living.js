import React from "react";
import { Grid } from "@material-ui/core";
// import PropTypes from "prop-types";
// import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// import useShortTermData from "../../hooks/queries/shortTerm";
import SectionWrapper from "../../shared/SectionWrapper";
import TextSection from "../../shared/TextSection";
import Button from "../../shared/Button";

const useStyles = makeStyles(() => ({
  root: {
    direction: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  images: {
    height: "400px",
    width: "100%",
  },
}));

const Living = () => {
  // const {
  //   structure: {
  //     title,
  //     body: { body },
  //     bodyTwo: { bodyTwo },
  //     image,
  //   },
  // } = useShortTermData();

  const classes = useStyles();
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const style = {
    // containerStyle: {
    //   display: "flex",
    //   justifyContent: "center"
    // },
    sectionStyle: {
      paddingTop: "33px",
      paddingBottom: "33px",
      borderBottom: "3px solid",
      borderBottomColor: theme.palette.primary.main,
      background: isUpMd
        ? `linear-gradient(to left, ${theme.palette.secondary.dark} 40%, ${theme.palette.primary.main} 40%)`
        : `linear-gradient(to top, ${theme.palette.secondary.dark} 400px, ${theme.palette.primary.main} 400px)`,
    },
  };

  const textStyle = {
    bodyStyle: {
      textStyle: {
        color: "white",
      },
    },
    titleStyle: {
      textStyle: {
        color: "white",
      },
    },
  };

  return (
    <SectionWrapper style={style}>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={6}>
          <TextSection title="title" body="body" style={textStyle} />
          <Button
            text="Learn About Your Leisure Time"
            style={{ marginTop: "24px" }}
            route="route"
            inverted
          />
        </Grid>
        <Grid item xs={12} md={4} className={classes.images}>
          <p>img</p>
          {/* <GatsbyImage
            image={image.gatsbyImageData}
            alt={image.description}
            className={classes.image}
          /> */}
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default Living;
