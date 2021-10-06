import React from "react";
import { Grid } from "@material-ui/core";
// import PropTypes from "prop-types";
// import { GatsbyImage } from "gatsby-plugin-image";
// import { makeStyles } from "@material-ui/core/styles";

// import useLongTermData from "../../hooks/queries/longTerm";
import SectionWrapper from "../../shared/SectionWrapper";
import TextSection from "../../shared/TextSection";

// const useStyles = makeStyles(() => ({

// }));

const style = {
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

const Structure = () => (
  // const {
  //   structure: {
  //     title,
  //     body: { body },
  //     bodyTwo: { bodyTwo },
  //     image,
  //   },
  // } = useLongTermData();

  // const classes = useStyles();

  <SectionWrapper
    bgColor="primary"
    style={{ containerStyle: { display: "flex", justifyContent: "center" } }}
  >
    <Grid container direction="column">
      <Grid item xs={12} md={6}>
        <TextSection
          title="title"
          body="body"
          bodyTwo="bodyTwo"
          style={style}
        />
      </Grid>
      <Grid item xs={12} md={6}>
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
export default Structure;
