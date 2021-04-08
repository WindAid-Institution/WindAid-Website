import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Body from "src/shared/Body/Body";
import OUR_IMPACT_DATA from "pages/our-impact/data";

const { WHO_WERE_SERVING } = OUR_IMPACT_DATA;

const imagesQuery = graphql`
  {
    groupOne: file(
      relativePath: { eq: "OurImpact/WhoWereServing/group_1.png" }
    ) {
      childImageSharp {
        gatsbyImageData(quality: 100, placeholder: BLURRED)
      }
    }
    groupTwo: file(
      relativePath: { eq: "OurImpact/WhoWereServing/group_2.png" }
    ) {
      childImageSharp {
        gatsbyImageData(quality: 100, placeholder: BLURRED)
      }
    }
    groupThree: file(
      relativePath: { eq: "OurImpact/WhoWereServing/group_3.png" }
    ) {
      childImageSharp {
        gatsbyImageData(quality: 100, placeholder: BLURRED)
      }
    }
  }
`;

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

  const data = useStaticQuery(imagesQuery);
  const { groupOne, groupTwo, groupThree } = data || {};

  const groupOnePicture = getImage(groupOne);
  const groupTwoPicture = getImage(groupTwo);
  const groupThreePicture = getImage(groupThree);

  return (
    <div className="who_were_serving__images-with-text">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} className={classes.item}>
          <GatsbyImage
            image={groupOnePicture}
            className="who_were_serving__picture who_were_serving__picture-one"
            alt="two kids smiling"
          />
        </Grid>
        <Grid item xs={12} className={classes.textItem}>
          <Body
            body={WHO_WERE_SERVING.BODY_TWO}
            style={{ width: "calc(41.1vw + 160px" }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} className={classes.item}>
          <GatsbyImage
            image={groupTwoPicture}
            className="who_were_serving__picture who_were_serving__picture-two "
            alt="group of people"
          />
        </Grid>
        <Grid item xs={12} md={4} className={classes.item}>
          <GatsbyImage
            image={groupThreePicture}
            className="who_were_serving__picture who_were_serving__picture-three"
            alt="two man working"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ImagesWithText;
