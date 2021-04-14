import React from "react";
import Grid from "@material-ui/core/Grid";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import "../../styles/OurMission/MissionImages.css";

const imageInfo = {
  0: {
    className: "group-one",
    alt: "first-group",
  },
  1: {
    className: "group-two",
    alt: "second-group",
  },
  2: {
    className: "group-three",
    alt: "third-group",
  },
};

const query = graphql`
  {
    images: allFile(
      filter: { relativeDirectory: { eq: "LandingPage/OurMission" } }
      sort: { order: ASC, fields: name }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(quality: 100, placeholder: BLURRED)
        }
      }
    }
  }
`;

const MissionImages = () => {
  const data = useStaticQuery(query);
  const imagesData = data?.images?.nodes.map((imageData, index) => ({
    image: getImage(imageData),
    className: imageInfo[index].className,
    alt: imageInfo[index].alt,
  }));

  return (
    <Grid container alignItems="center" justify="center">
      <Grid className="mission-container">
        {imagesData.map((imageData) => (
          <GatsbyImage {...imageData} key={imageData.alt} />
        ))}
      </Grid>
    </Grid>
  );
};
export default MissionImages;
