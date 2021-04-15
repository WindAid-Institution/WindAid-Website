import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import Body from "../../shared/Body/Body";
import Title from "../../shared/Title/Title";
import Button from "../../shared/Button/Button";

const sectionData = {
  title: "Long-term Volunteer:",
  body: `Have the chance to become a part of our Research & Design team. 
  During the first four weeks of your stay, you would be doing the same 
  as a short term volunteer, but after that, you will be able to develop 
  your own project in line with WindAid’s objectives. This could focus on 
  a wide range of areas, but is usually related to: the improvement of the 
  wind turbine, manufacturing process, monitoring systems and machinery 
  equipment, or work with communities, education, communications or training. `,
  buttonText: "Learn about the program",
};

const query = graphql`
  {
    teamPhoto: file(
      relativePath: { eq: "GeneralProgram/VolunteerProgram/team-photo.png" }
    ) {
      childImageSharp {
        gatsbyImageData(quality: 100, placeholder: BLURRED)
      }
    }

    womanPhoto: file(
      relativePath: { eq: "GeneralProgram/VolunteerProgram/woman-photo.png" }
    ) {
      childImageSharp {
        gatsbyImageData(quality: 100, placeholder: BLURRED)
      }
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  contrast: {
    color: "#fff",
    "& .body-text": {
      color: "#fff",
    },
  },
  buttonContrast: {
    "& .custom-button": {
      color: "#056839",
      background: "#fff",
    },
  },
  wrapper: {
    height: "auto",
    padding: "16px 0",
    [theme.breakpoints.only("sm")]: {},
    [theme.breakpoints.up("md")]: {
      margin: "calc(4vw + 24px) auto",
      zIndex: 2,
    },
  },
  spacing: {
    marginTop: "32px",
    marginBottom: "32px",
  },
  content: {
    zIndex: 2,
  },
  backgroundGreen: {
    background: "#056839",
  },
  gridLayout: {
    display: "grid",
    gridGap: "16px",
    gridColumn: 1,
    gridTemplateAreas: `
    "title"
    "img"
    "body"`,
    [theme.breakpoints.up("sm")]: {
      gridColumn: 1,
      gridTemplateAreas: `
    "title"
    "body"
    "img"`,
    },
    [theme.breakpoints.up("md")]: {
      gridTemplateRows: "40px 1fr",
      gridColumn: 2,
      gridTemplateColumns: "1fr 1fr",
      gridTemplateAreas: `
    "title img"
    "body img"`,
    },
  },
  gridAreaImg: {
    gridArea: "img",
    margin: "auto 0",
  },
  gridAreaTitle: {
    gridArea: "title",
    margin: "auto 0",
  },
  gridAreaBody: {
    gridArea: "body",
  },
}));

const LongTimeVolunteer = () => {
  const classes = useStyles();
  const data = useStaticQuery(query);
  const womanPhoto = getImage(data.womanPhoto);

  return (
    <div
      container
      spacing={2}
      className={`container ${classes.wrapper} ${classes.gridLayout}`}
    >
      <div className={`${classes.content} ${classes.gridAreaTitle}`}>
        <Title title={sectionData.title} className={classes.contrast} />
      </div>
      <div
        className={`${classes.content} ${classes.gridAreaBody} ${classes.buttonContrast} ${classes.spacing}`}
      >
        <Body body={sectionData.body} className={classes.contrast} />
        <Button>{sectionData.buttonText}</Button>
      </div>
      <div className={classes.gridAreaImg}>
        <GatsbyImage
          image={womanPhoto}
          alt=""
          className={`${classes.spacing} ${classes.backgroundGreen}`}
        />
      </div>
    </div>
  );
};

export default LongTimeVolunteer;
