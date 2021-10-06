import React from "react";
import { Grid } from "@material-ui/core";
// import PropTypes from "prop-types";
// import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";

// import useShortTermData from "../../hooks/queries/shortTerm";
import SectionWrapper from "../../shared/SectionWrapper";
import TextSection from "../../shared/TextSection";
import Button from "../../shared/Button";

const useStyles = makeStyles(() => ({
  images: {},
}));

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

  return (
    <SectionWrapper
      bgColor="primary"
      style={{ containerStyle: { display: "flex", justifyContent: "center" } }}
    >
      <Grid container direction="row">
        <Grid item xs={12} lg={8}>
          <TextSection title="title" body="body" style={style} />
          <Button
            text="Learn About Your Leisure Time"
            style={{ marginTop: "24px" }}
            route="route"
            inverted
          />
        </Grid>
        <Grid item xs={12} lg={4} className={classes.images}>
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
