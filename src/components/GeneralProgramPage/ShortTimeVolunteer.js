import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import useMediaQuery from "@material-ui/core/useMediaQuery";
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
    paddingTop: theme.spacing(3),
    [theme.breakpoints.only("xs")]: {
      background: "#FFF9F5",
    },
  },
  spacing: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "32px",
      marginBottom: "32px",
    },
  },
  content: {
    height: "auto",
    zIndex: 2,
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
      marginTop: theme.spacing(2),
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
    [theme.breakpoints.only("sm")]: {
      background: "#056839",
    },
  },
  gridAreaTitle: {
    gridArea: "title",
    position: "relative",
  },
  gridAreaBody: {
    gridArea: "body",
    paddingBottom: theme.spacing(3),
  },
  img: {
    [theme.breakpoints.only("sm")]: {
      width: "100%",
    },
  },
}));

const ShortTimeVolunteer = () => {
  const classes = useStyles();
  const data = useStaticQuery(query);
  const teamPhoto = getImage(data.teamPhoto);
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div
      container
      spacing={2}
      className={`${isUpMd && "container"} ${classes.wrapper} ${
        classes.gridLayout
      }`}
    >
      <div className={`container ${classes.content} ${classes.gridAreaTitle}`}>
        <Title title={sectionData.title} />
      </div>
      <div className={`container ${classes.content} ${classes.gridAreaBody}`}>
        <Body body={sectionData.body} />
        <Button>{sectionData.buttonText}</Button>
      </div>
      <div className={classes.gridAreaImg}>
        <div className={`container ${classes.content}`}>
          <GatsbyImage
            image={teamPhoto}
            alt=""
            className={`${classes.spacing} ${classes.img}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ShortTimeVolunteer;
