import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Body from "../../shared/Body/Body";
import Title from "../../shared/Title/Title";

const sectionData = {
  title:
    "Creating memorable experiences and incredibly strong bonds between each other, the communities and Peru! ",
  body: `Working with WindAid Institute provides an ideal opportunity 
      for you to gain experience working on sustainable projects, 
      helping encourage conservation and educating people on the 
      benefits of appropriate and renewable technologies. 
      You will be interacting and working with a Peruvian team in 
      the city of Trujillo by building a wind turbine from scratch 
      (previous engineering experience is not a requirement to participate 
        in this program).`,
};

const query = graphql`
  {
    teamPhoto: file(
      relativePath: { eq: "GeneralProgram/ExperienceSection/team-photo.png" }
    ) {
      childImageSharp {
        gatsbyImageData(quality: 100, placeholder: BLURRED)
      }
    }

    teamWork: file(
      relativePath: { eq: "GeneralProgram/ExperienceSection/team-work.png" }
    ) {
      childImageSharp {
        gatsbyImageData(quality: 100, placeholder: BLURRED)
      }
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: "calc(4vw + 24px) auto",
    height: "auto",
  },
  title: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "calc(28vw + 300px)",
    },
  },
  articleBody: {
    width: "100%",
    maxWidth: "100%",
    paddingBottom: "32px",
    [theme.breakpoints.up("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "calc(28vw + 400px)",
    },
  },
}));

const ExperienceSection = () => {
  const classes = useStyles();
  const data = useStaticQuery(query);
  const firstImg = getImage(data.teamPhoto);
  const secImg = getImage(data.teamWork);

  return (
    <Box component="section" className={`${classes.wrapper} container`}>
      <Title title={sectionData.title} className={classes.title} />
      <Body body={sectionData.body} className={classes.articleBody} />
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <GatsbyImage image={firstImg} alt="" width="100%" />
        </Grid>
        <Grid item md={6} xs={12}>
          <GatsbyImage image={secImg} alt="" width="100%" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExperienceSection;