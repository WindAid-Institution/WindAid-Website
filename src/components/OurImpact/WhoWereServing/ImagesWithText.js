import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import useOurImpactData from "queries/ourImpact";
import Body from "shared/Body";

const useStyles = makeStyles((theme) => ({
  item: {
    textAlign: "center",
  },

  textItem: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const ImagesWithText = () => {
  const classes = useStyles();

  const {
    whoWereServing: {
      images,
      bodyTwo: { bodyTwo },
    },
  } = useOurImpactData();

  const groupOnePicture = images.find(({ title }) => title === "group 1");
  const groupTwoPicture = images.find(({ title }) => title === "group 2");
  const groupThreePicture = images.find(({ title }) => title === "group 3");
  return (
    <div className="who_were_serving__images-with-text">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} className={classes.item}>
          <GatsbyImage
            image={groupOnePicture.gatsbyImageData}
            className="who_were_serving__picture who_were_serving__picture-one"
            alt={groupOnePicture.description}
          />
        </Grid>
        <Grid item xs={12} className={classes.textItem}>
          <Body body={bodyTwo} style={{ width: "calc(41.1vw + 160px" }} />
        </Grid>

        <Grid item xs={12} sm={6} md={4} className={classes.item}>
          <GatsbyImage
            image={groupTwoPicture.gatsbyImageData}
            className="who_were_serving__picture who_were_serving__picture-two "
            alt={groupTwoPicture.description}
          />
        </Grid>
        <Grid item xs={12} md={4} className={classes.item}>
          <GatsbyImage
            image={groupThreePicture.gatsbyImageData}
            className="who_were_serving__picture who_were_serving__picture-three"
            alt={groupThreePicture.description}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ImagesWithText;
