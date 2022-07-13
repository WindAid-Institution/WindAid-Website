import React from "react";
import { getSrc } from "gatsby-plugin-image";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import { ROUTES } from "src/constants/routes";
import Body from "shared/Body";
import Title from "shared/Title";
import SubHeader from "shared/SubHeader";
import Button from "shared/Button";
import useGeneralProgramData from "queries/generalProgram";

const AdventureSection = () => {
  const theme = useTheme();
  const classes = {
    wrapper: {
      // marginTop: "calc(4vw + 24px)",
      height: "auto",
      position: "relative",
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",

      [theme.breakpoints.up("lg")]: {
        height: "40vw",
        maxHeight: "900px",
      },
    },
    title: {
      width: "100%",
      color: theme.palette.primary.dark,
    },
    articleBody: {
      textStyle: {
        width: "100%",
        maxWidth: "600px",

        [theme.breakpoints.up("sm")]: {
          width: "90",
        },
        [theme.breakpoints.up("md")]: {
          width: "calc(15vw + 300px)",
        },
      },
    },
    boldQuestion: {
      color: theme.palette.primary.dark,
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
      paddingLeft: "16px",
      [theme.breakpoints.up("sm")]: {
        paddingLeft: "32px",
      },
      [theme.breakpoints.up("xmd")]: {
        paddingLeft: "calc(25vw)",
      },
      [theme.breakpoints.up("md")]: {
        paddingLeft: "calc(40vw)",
      },
      [theme.breakpoints.up("xl")]: {
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
  };

  const {
    adventure: {
      header: title,
      subHeader,
      body: { body },
      image,
    },
  } = useGeneralProgramData();

  const blackTextStyle = {
    textStyle: {
      color: theme.palette.primary.dark,
      width: "100%",
    },
  };
  const imageSrc = getSrc(image);
  return (
    <Box
      component="section"
      style={{ backgroundImage: `url(${imageSrc})` }}
      sx={classes.wrapper}
    >
      <Box sx={classes.contentBox}>
        <Box>
          <Title title={title} style={blackTextStyle} />
          <Body body={body} size="md" style={classes.articleBody} />
          <SubHeader subHeader={subHeader} className={classes.boldQuestion} />
          <Button
            text="Explore trujillo"
            route={ROUTES.TRUJILLO}
            style={{ marginTop: theme.spacing(2) }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AdventureSection;
