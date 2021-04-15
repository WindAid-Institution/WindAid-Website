import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import Body from "../../shared/Body/Body";
import Title from "../../shared/Title/Title";
import Button from "../../shared/Button/Button";

const sectionData = {
  title: "Short-term Volunteer:",
  body: `Spend a period of four weeks with us. 
  The first three weeks are spent in our workshop here in the city of Trujillo 
  and in your last week, you will travel to a rural community and install the 
  WindAid turbine you have manufactured in the workshop. And of course, there 
  will be plenty of opportunity for exploring Trujillo and the rest of Peru 
  during evenings and weekends!`,
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
  }
`;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "auto",
    padding: "16px 0",
    [theme.breakpoints.only("xs")]: {
      background: "#FFF9F5",
    },
    [theme.breakpoints.only("s")]: {},
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
  greenBackgroundS: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      position: "absolute",
      height: "100%",
      width: "100%",
      background: "#056839",
    },

    [theme.breakpoints.up("md")]: {
      display: "none",
    },
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
    position: "relative",
  },
  gridAreaBody: {
    gridArea: "body",
  },
}));

const ShortTimeVolunteer = () => {
  const classes = useStyles();
  const data = useStaticQuery(query);
  const teamPhoto = getImage(data.teamPhoto);
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
        <GatsbyImage image={teamPhoto} alt="" className={classes.spacing} />
      </div>
    </div>
  );
};

export default ShortTimeVolunteer;
