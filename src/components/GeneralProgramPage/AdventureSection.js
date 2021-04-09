import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Body from "../../shared/Body/Body";
import Title from "../../shared/Title/Title";
import Button from "../../shared/Button/Button";

const sectionData = {
  title: "Adventure in the city and around Peru!",
  body: `You will have the chance to not just live in a house in
   the middle of the city of Trujillo, but also to travel around 
   different attractive places in Peru during the weekends!   
   We believe in the multiplier effect of the actual journey: 
   From the moment you step foot in Trujillo, to building a wind 
   turbine, to being immersed in Peruvian culture with others, 
   to shareing your experiences with others around you, 
   there will always be something to provide lifelong 
   memories of your South American adventure.`,
  boldBody: "Want to know what it’s like living in Truijllo?",
  buttonText: "Explore trujillo",
};

const query = graphql`
  {
    background: file(relativePath: { eq: "GeneralProgram/mountains.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, placeholder: BLURRED)
      }
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: "calc(4vw + 24px)",
    height: "auto",
    position: "relative",
  },
  title: {
    width: "100%",
    color: "#000000",
  },
  articleBody: {
    width: "100%",
    maxWidth: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "90",
    },
    [theme.breakpoints.up("md")]: {
      width: "calc(15vw + 300px)",
    },
  },
  boldQuestion: {
    color: "#000000",
    fontSize: "18px",
    lineHeight: "24px",
    [theme.breakpoints.up("md")]: {
      fontSize: "24px",
      lineHeight: "36px",
    },
  },
  contentBox: {
    width: "100%",
    paddingTop: "calc(4vw + 24px)",
    paddingBottom: "calc(280px - 6vw)",
    paddingRight: "32px",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "32px",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "calc(45vw)",
    },
  },
  background: {
    zIndex: "-1",
    top: 0,
    height: "100%",
    width: "100%",
    position: "absolute",
  },
}));

const AdventureSection = () => {
  const classes = useStyles();
  const data = useStaticQuery(query);
  const background = getImage(data.background);

  return (
    <Box component="section" className={`${classes.wrapper}`}>
      <Box className={`${classes.contentBox}`}>
        <Box className="container">
          <Title title={sectionData.title} className={classes.title} />
          <Body body={sectionData.body} className={classes.articleBody} />
          <Title
            title={sectionData.boldBody}
            className={classes.boldQuestion}
          />
          <Button>{sectionData.buttonText}</Button>
        </Box>
      </Box>
      <GatsbyImage image={background} alt="" className={classes.background} />
    </Box>
  );
};

export default AdventureSection;
