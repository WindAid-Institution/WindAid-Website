import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
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
    paddingTop: theme.spacing(3),
    [theme.breakpoints.only("xs")]: {
      background: "#056839",
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
      background: "#FFF9F5",
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

const LongTimeVolunteer = () => {
  const classes = useStyles();
  const data = useStaticQuery(query);
  const womanPhoto = getImage(data.womanPhoto);
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
        <Title title={sectionData.title} className={classes.contrast} />
      </div>
      <div
        className={`container ${classes.content} ${classes.gridAreaBody} ${classes.buttonContrast}`}
      >
        <Body body={sectionData.body} className={classes.contrast} />
        <Button>{sectionData.buttonText}</Button>
      </div>
      <div className={classes.gridAreaImg}>
        <div className={`container ${classes.content}`}>
          <GatsbyImage
            image={womanPhoto}
            alt=""
            className={`${classes.spacing} ${classes.img}`}
          />
        </div>
      </div>
    </div>
  );
};

export default LongTimeVolunteer;
