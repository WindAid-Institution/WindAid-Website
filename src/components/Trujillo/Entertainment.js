import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import { useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { GatsbyImage } from "gatsby-plugin-image";
import clsx from "clsx";

import SectionWrapper from "shared/SectionWrapper";
import TextSection from "shared/TextSection";
import Body from "shared/Body";
import useTrujilloData from "hooks/queries/trujillo";
import { getImage } from "src/utils/utils";
import useClasses from "../../styles/useClasses";

const styles = (theme) => ({
  image: {
    width: "100%",
    height: "260px",
  },

  mediumSection: {
    marginTop: theme.spacing(2),
  },

  mdUpOnly: {
    display: "none",

    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },

  lgUpOnly: {
    display: "none",

    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  },

  sectionContainer: {
    display: "flex",
    marginTop: theme.spacing(1),
  },

  secondBodyContainer: {
    margin: "16px 0",
  },
  textSectionContainer: {
    margin: "16px 0",
    display: "flex",
    alignItems: "center",
  },

  lastImage: {
    height: "100%",
  },
});

const Image = ({ image, customClass }) => {
  const classes = useClasses(styles);
  const { gatsbyImageData, description } = image;
  return (
    <GatsbyImage
      image={gatsbyImageData}
      alt={description}
      className={clsx(classes.image, customClass)}
    />
  );
};

const Entertainment = () => {
  const {
    entertainmentOne: {
      title,
      body: { body },
      bodyTwo: { bodyTwo },
      images,
    },
    entertainmentTwo: {
      title: secondTitle,
      body: { body: secondBody },
    },
  } = useTrujilloData();

  const classes = useClasses(styles);
  const theme = useTheme();

  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const groupOnePicture = getImage(images, "group 1");
  const groupTwoPicture = getImage(images, "group 2");
  const groupThreePicture = getImage(images, "group 3");
  const groupFourPicture = getImage(images, "group 4");
  const groupFivePicture = getImage(images, "group 5");
  const groupSixPicture = getImage(images, "group 6");
  const groupSevenPicture = getImage(images, "group 7");
  const groupEightPicture = getImage(images, "group 8");

  return (
    <SectionWrapper>
      <Grid container>
        <Grid container spacing={2}>
          <Grid item xs={6} lg={5} className={classes.lgUpOnly}>
            <Image image={groupOnePicture} />
          </Grid>

          <Grid
            item
            xs={12}
            md={8}
            lg={7}
            className={classes.textSectionContainer}
          >
            <TextSection
              title={title}
              body={body}
              bodyTwo={isUpMd ? bodyTwo : ""}
              size="full"
            />
          </Grid>
          <Hidden lgUp>
            <Grid item xs={6} md={4}>
              <Image image={groupOnePicture} />
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid item xs={6}>
              <Image image={groupFivePicture} />
            </Grid>
          </Hidden>

          <Hidden mdUp>
            <Grid item xs={12} className={classes.secondBodyContainer}>
              <Body body={bodyTwo} size="full" />
            </Grid>
          </Hidden>
        </Grid>

        <Hidden lgUp>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Image image={groupSevenPicture} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Image image={groupTwoPicture} />
            </Grid>
          </Grid>

          <Grid container spacing={2} className={classes.mediumSection}>
            <Grid item xs={3} className={classes.mdUpOnly}>
              <Image image={groupFivePicture} />
            </Grid>

            <Grid item xs={12} md={9} className={classes.textSectionContainer}>
              <TextSection title={secondTitle} body={secondBody} size="full" />
            </Grid>

            <Grid item xs={6}>
              <Image image={groupEightPicture} />
            </Grid>
            <Grid item xs={6}>
              <Image image={groupSixPicture} />
            </Grid>
          </Grid>
        </Hidden>

        <Grid
          container
          spacing={2}
          className={clsx(classes.lgUpOnly, classes.sectionContainer)}
        >
          <Grid className={classes.lgUpOnly} item lg={9}>
            <Grid container spacing={2}>
              <Grid item lg={4}>
                <Image image={groupTwoPicture} />
              </Grid>
              <Grid item lg={4}>
                <Image image={groupFourPicture} />
              </Grid>
              <Grid item lg={4}>
                <Image image={groupThreePicture} />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item lg={7} className={classes.textSectionContainer}>
                <TextSection
                  title={secondTitle}
                  body={secondBody}
                  size="full"
                />
              </Grid>
              <Grid item lg={5}>
                <Image image={groupSixPicture} />
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={3} className={classes.lgUpOnly}>
            <Image image={groupFivePicture} customClass={classes.lastImage} />
          </Grid>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

Image.propTypes = {
  image: PropTypes.object.isRequired,
  customClass: PropTypes.string,
};
Image.defaultProps = {
  customClass: "",
};

export default Entertainment;
