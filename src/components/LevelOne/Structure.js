import React from "react";
import { Grid, Box, Button } from "@mui/material";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles, useTheme } from "@mui/styles";

import TextSection from "../../shared/TextSection";
import useLevelOneData from "../../hooks/queries/levelOne";
import SectionWrapper from "../../shared/SectionWrapper";

const useStyles = makeStyles((theme) => ({
  containerWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "65px",
  },
  moduleContainerWrapper: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 550px))",
    gap: "34px",
  },

  moduleContainer: {
    display: "flex",
    gap: "24px",
    marginTop: "30px",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
  textSection: {
    marginTop: "36px",
  },
  imgContainer: {},
  image: {
    width: "50px",
    height: "50px",
  },
  button: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    border: `3px solid ${theme.palette.secondary.main}`,
    textDecoration: "none",
    textTransform: "none",
    fontWeight: "700",
    height: "48px",
    [theme.breakpoints.up("sm")]: {
      minWidth: "320px",
      fontSize: "16px",
    },

    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
      borderColor: theme.palette.primary.main,
    },
  },

  link: {
    textDecoration: "none",
  },
}));

const Structure = () => {
  const { structureContent, modulesContent } = useLevelOneData();
  const classes = useStyles();
  const theme = useTheme();

  const style = {
    sectionStyle: {
      paddingTop: "33px",
      paddingBottom: "33px",
      borderBottom: "3px solid",
      borderBottomColor: theme.palette.primary.main,
    },
  };

  const textStyle = {
    subHeaderStyle: {
      textStyle: {
        color: theme.palette.primary.main,
      },
    },
    titleStyle: {
      textStyle: {
        color: theme.palette.secondary.main,
      },
    },
    headerStyle: {
      textStyle: {
        color: theme.palette.secondary.main,
        fontSize: "28px",
      },
    },
    bodyStyle: {
      textStyle: {
        color: theme.palette.secondary.main,
      },
    },
  };

  return (
    <SectionWrapper bgColor="primary" style={style}>
      <Grid container className={classes.containerWrapper}>
        <Grid item>
          <TextSection title={structureContent.header} style={textStyle} />
        </Grid>
        <Grid item className={classes.moduleContainerWrapper}>
          {modulesContent.map(
            ({ orderNumber, moduleTitle, moduleDescription, moduleIcon }) => (
              <Box key={orderNumber} className={classes.moduleContainer}>
                <Box className={classes.imgContainer}>
                  <GatsbyImage
                    image={moduleIcon.gatsbyImageData}
                    alt={moduleIcon.title}
                    className={classes.image}
                  />
                </Box>
                <Box className={classes.textContainer}>
                  <TextSection header={moduleTitle} style={textStyle} />
                  <TextSection
                    body={moduleDescription.moduleDescription}
                    style={textStyle}
                  />
                </Box>
              </Box>
            )
          )}
        </Grid>
        <Grid item xs={12}>
          <Button className={classes.button} href={structureContent.body.body}>
            View the full syllabus
          </Button>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default Structure;
