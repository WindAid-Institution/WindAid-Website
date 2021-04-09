import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Header from "../../shared/Header/Header";
import Title from "../../shared/Title/Title";
import Body from "../../shared/Body/Body";

const sectionData = {
  section: {
    header: "Overview",
    title:
      "Our programs are designed to accomplish our goal of providing clean energy to many Peruvian communitites most in need.",
    body: `We are always looking for people to join us in this mission who share our 
      passion and enthsuiasm for renewable energy and come together with people 
      all over the world in making a difference. Our programs allow families 
      and communities to access not only a clean source of energy but a 
      quality of life that will see them able to live, study and socialise 
      in a way that is befitting of the modern world.`,
  },
};

const query = graphql`
  {
    group1: file(relativePath: { eq: "GeneralProgram/Overview/group1.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, placeholder: BLURRED)
      }
    }

    group2: file(relativePath: { eq: "GeneralProgram/Overview/group2.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, placeholder: BLURRED)
      }
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  smallImageBox: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    margin: "auto",
    height: "calc(10vw + 200px)",
    "& div": {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "calc(10vw + 240px)",
      marginTop: "calc(2.96vw + 21.3px)",
    },
  },
  text: {
    marginTop: "calc(2.96vw + 21.3px)",
  },
  wrapper: {
    height: "auto",
  },
  spacingRight: {
    [theme.breakpoints.up("md")]: {
      paddingRight: theme.spacing(1),
    },
  },
  spacingLeft: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(1),
    },
  },
  hideOnSm: {
    [theme.breakpoints.only("sm")]: {
      display: "none",
    },
  },
  img: {
    height: "calc(5vw + 200px)",
    marginTop: theme.spacing(2),
    display: "flex",
  },
  header: {
    width: "108px",
  },
  title: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "calc(20.4vw + 210px)",
    },
  },
  articleBody: {
    width: "100%",
    maxWidth: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "90",
    },
    [theme.breakpoints.up("md")]: {
      width: "calc(20.4vw + 270px)",
    },
  },
}));

const Overview = () => {
  const data = useStaticQuery(query);
  const group1 = getImage(data.group1);
  const group2 = getImage(data.group2);
  const classes = useStyles();

  return (
    <Grid
      container
      className={`container ${classes.wrapper}`}
      justify="space-between"
      component="section"
    >
      <Grid item className={classes.text} sm={12} md={7}>
        <Header
          header={sectionData.section.header}
          className={`${classes.header}`}
        />
        <Title
          title={sectionData.section.title}
          className={`${classes.title}`}
        />
        <Body
          body={sectionData.section.body}
          className={`${classes.articleBody}`}
        />
      </Grid>
      <Grid item sm={12} md={5} className={classes.smallImageBox}>
        <GatsbyImage image={group1} alt="" />
      </Grid>
      <Grid
        item
        md={6}
        sm={0}
        className={`${classes.spacingRight} ${classes.img} ${classes.hideOnSm}`}
      >
        <GatsbyImage image={group2} alt="" />
      </Grid>
      <Grid
        item
        md={6}
        sm={12}
        className={`${classes.spacingLeft} ${classes.img}`}
      >
        <GatsbyImage image={group2} alt="" />
      </Grid>
    </Grid>
  );
};

export default Overview;
