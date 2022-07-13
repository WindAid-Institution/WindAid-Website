import React from "react";

import { makeStyles, useTheme } from "@mui/styles";
import { Grid, Typography, Box } from "@mui/material";
import { GatsbyImage } from "gatsby-plugin-image";

import { FOOTER_SOCIALS } from "src/constants/footer";
import useContactUsData from "../../hooks/queries/contactUs";
import TextSection from "../../shared/TextSection";
import SectionWrapper from "../../shared/SectionWrapper";
import useHomepageData from "../../hooks/queries/homepage";
import ContactForm from "./Form";

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    flexDirection: "row",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "50px",
  },
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  text: {
    textAlign: "left",
    paddingLeft: "8px",
    display: "flex",
    alignItems: "center",
    marginLeft: "15px",
  },
  infoRow: {
    display: "grid",
    gridTemplateColumns: "40px 1fr",
  },
  socialsLink: {
    display: "flex",
    width: "24px",
    height: "24px",
    padding: "3px",
    margin: "3px",
    borderRadius: "50%",
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    textDecoration: "none",

    [theme.breakpoints.up("lg")]: {
      padding: "4px",
      margin: "4px",
    },

    "&:hover": {
      color: theme.palette.secondary.main,
      background: theme.palette.primary.main,
    },

    "& *": {
      margin: "auto",
    },
  },
  socials: {
    display: "flex",
  },
  socialHeader: {
    fontFamily: theme.typography.fontFamily,
    fontStyle: "normal",
    fontSize: "18px",
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: "32px",
    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
      lineHeight: "36px",
    },
  },
  imageContainer: {
    position: "relative",
    height: "300px",
    [theme.breakpoints.down("md")]: {
      height: "200px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  image: {
    position: "absolute",
    bottom: "0",
    right: "0",
    height: "100%",
  },
}));

const ContactUs = () => {
  const theme = useTheme();
  const classes = useStyles();
  const {
    contactUs: { title, subHeaderText, infoIcons, infoList },
  } = useContactUsData();

  const {
    careerPortal: {
      image: {
        description,
        file: { url },
      },
    },
  } = useHomepageData();

  const sectionStyle = {
    sectionStyle: {
      height: "auto",
      backgroundSize: "cover",
      backgroundPosition: "bottom",
      paddingTop: "40px",
      paddingBottom: 0,
    },
  };

  const contactSectionStyle = {
    sectionStyle: {
      flexGrow: 1,
      borderRadius: "16px",
      border: `2px solid ${theme.palette.primary.main}`,
      paddingBottom: "20px",
      paddingTop: "20px",
      marginBottom: "20px",
      [theme.breakpoints.down("sm")]: {
        border: "none",
      },
    },
  };

  const textStyles = {
    headerStyle: {
      textStyle: {
        color: theme.palette.primary.main,
      },
    },
    bodyStyle: {
      textStyle: {
        marginTop: 0,
        marginBottom: "40px",
      },
    },
  };

  return (
    <SectionWrapper bgColor="secondary" style={sectionStyle}>
      <Grid container className={classes.sectionContainer}>
        <SectionWrapper bgColor="secondary" style={sectionStyle}>
          <Grid container className={classes.container}>
            <Grid item>
              <TextSection header={title} style={textStyles} />
            </Grid>
            <Grid item>
              <TextSection body={subHeaderText} style={textStyles} />
            </Grid>
            <Grid container className={classes.container} sx={{ gap: "20px" }}>
              {infoIcons.map((info, index) => (
                <Grid container className={classes.infoRow}>
                  <GatsbyImage image={info.gatsbyImageData} alt={info.title} />
                  <Typography variant="body1" className={classes.text}>
                    {infoList[index]}
                  </Typography>
                </Grid>
              ))}
            </Grid>
            <Grid item sx={{ marginTop: "60px" }}>
              <Typography variant="h2" className={classes.socialHeader}>
                Socials
              </Typography>
              <Box className={classes.socials}>
                {FOOTER_SOCIALS.links.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className={classes.socialsLink}
                    target="blank"
                  >
                    {item.icon}
                  </a>
                ))}
              </Box>
            </Grid>
            <Grid item className={classes.imageContainer}>
              <img src={url} alt={description} className={classes.image} />
            </Grid>
          </Grid>
        </SectionWrapper>
        <SectionWrapper bgColor="tertiary" style={contactSectionStyle}>
          <Grid
            container
            className={classes.container}
            sx={{ bgColor: "#fff" }}
          >
            <Grid item>
              <ContactForm />
            </Grid>
          </Grid>
        </SectionWrapper>
      </Grid>
    </SectionWrapper>
  );
};

export default ContactUs;
