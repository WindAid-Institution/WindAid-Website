import React from "react";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import useTheme from "@mui/material/styles/useTheme";
import Button from "./Button";
import TextSection from "./TextSection";
import SectionWrapper from "./SectionWrapper";

const Separator = ({ route, title, body, bodyTwo, image, children }) => {
  const {
    description,
    file: { url },
  } = image;
  const theme = useTheme();

  const classes = {
    textSection: {
      paddingBottom: "97px",
    },
    image: {
      position: "absolute",
      bottom: "0",
      right: "0",
      height: "35%",
      [theme.breakpoints.up("sm")]: {
        height: "50%",
      },
      [theme.breakpoints.up("lg")]: {
        height: "60%",
      },
    },
  };

  const style = {
    sectionStyle: {
      position: "relative",
      paddingBottom: "0",
      borderBottom: "3px solid",
      borderBottomColor: theme.palette.primary.main,
      backgroundColor: theme.palette.secondary.dark,
    },
  };

  return (
    <SectionWrapper style={style}>
      <Grid container direction="row">
        <Grid item xs={12} sx={classes.textSection}>
          <TextSection title={title} body={body} />
          {children}
          <Button text={bodyTwo} style={{ marginTop: "24px" }} route={route} />
        </Grid>
      </Grid>
      <img src={url} alt={description} style={classes.image} />
    </SectionWrapper>
  );
};

Separator.propTypes = {
  route: PropTypes.object,
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  bodyTwo: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  children: PropTypes.node,
};

Separator.defaultProps = {
  body: "",
  children: null,
  route: {
    name: "Home",
    path: "/",
  },
};

export default Separator;
