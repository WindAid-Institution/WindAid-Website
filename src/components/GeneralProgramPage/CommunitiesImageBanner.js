import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Body from "../../shared/Body/Body";

const sectionData = {
  body: `This program also offers a focus on education by 
    helping Peruvian communities understand the benefits of 
    renewable energy. You will have the opportunity to contribute 
    to our educational impact by demonstrating the importance and use of clean, 
    sustainable energy sources. Finally, we are sure you will come to see 
    participation in the program as an inspiration for the potential and 
    power of renewable energies on both a local and global scale. `,
};

const query = graphql`
  {
    background: file(relativePath: { eq: "GeneralProgram/aerial-view.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, placeholder: BLURRED)
      }
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "-1",
    top: "0",
  },
  body: {
    height: "auto",
    padding: "calc(6vw + 32px) 0",

    "& .body-text": {
      color: "#fff",
      fontWeight: "bold",
      [theme.breakpoints.up("md")]: {
        width: "calc(30.4vw + 450px)",
      },
    },
  },
}));

const CommunitiesImageBanner = () => {
  const classes = useStyles();
  const data = useStaticQuery(query);
  const background = getImage(data.background);

  return (
    <Box component="section" flex position="relative" className={classes.box}>
      <GatsbyImage image={background} alt="" className={classes.background} />
      <Body body={sectionData.body} className={`container ${classes.body}`} />
    </Box>
  );
};

export default CommunitiesImageBanner;
