import React from "react";

import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Body from "shared/Body";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    backgroundColor: "#FFFEFD",
    border: "1px solid #BDBDBD",
    padding: "0 !important",

    [theme.breakpoints.up("md")]: {
      maxWidth: "406px",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "368px",
    },
  },
  image: {
    height: "260px",
    width: "100%",
  },
  contentContainer: {
    padding: theme.spacing(2),
  },
  name: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
  },
  role: {
    fontWeight: theme.typography.fontWeightBold,
  },
  email: {
    padding: "8px 0",
    "& > a": {
      textDecoration: "none",
      color: "#015B90",
    },
  },
}));

const TeamCard = ({ image, name, role, email, body: { body } }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Box className={classes.root}>
        <GatsbyImage
          image={image.gatsbyImageData}
          alt={image.description}
          className={classes.image}
        />
        <Box className={classes.contentContainer}>
          <Typography className={classes.name} variant="h5">
            {name}
          </Typography>
          <Typography className={classes.role}>{role}</Typography>
          <Typography className={classes.email}>
            <a href={`mailto:${email}`}>{email}</a>
          </Typography>
          <Body
            style={{ textStyle: { marginTop: 0 } }}
            body={body}
            size="full"
          />
        </Box>
      </Box>
    </Grid>
  );
};

TeamCard.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.shape({
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default TeamCard;
