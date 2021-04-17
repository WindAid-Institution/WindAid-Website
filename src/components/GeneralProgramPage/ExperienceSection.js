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
  body1: `Working with WindAid Institute provides an ideal opportunity 
      for you to gain experience working on sustainable projects, 
      helping encourage conservation and educating people on the 
      benefits of appropriate and renewable technologies.`,
  body2: `You will be interacting and working with a Peruvian team in 
      the city of Trujillo by building a wind turbine from scratch 
      previous engineering experience is not a requirement to participate 
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
    paddingBottom: "8px",
    [theme.breakpoints.up("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "calc(28vw + 400px)",
    },
  },
  img: {
    minHeight: "230px",
    width: "100%",
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
      <Body body={sectionData.body1} className={classes.articleBody} />
      <Body body={sectionData.body2} className={classes.articleBody} />
      <Grid container spacing={2}>
        <Grid item md={6} sm={6} xs={12}>
          <GatsbyImage image={firstImg} alt="" className={classes.img} />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <GatsbyImage image={secImg} alt="" className={classes.img} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExperienceSection;
