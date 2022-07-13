import React from "react";

import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Body from "shared/Body";
import useTheme from "@mui/material/styles/useTheme";

const TeamCard = ({ image, name, role, email, body: { body } }) => {
  const theme = useTheme();

  const classes = {
    root: {
      maxWidth: "100%",
      backgroundColor: "#FFFEFD",
      border: "1px solid #BDBDBD",
      padding: "0 !important",
      height: "100%",

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
  };

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Box sx={classes.root}>
        <GatsbyImage
          image={image.gatsbyImageData}
          alt={image.description}
          style={classes.image}
        />
        <Box sx={classes.contentContainer}>
          <Typography sx={classes.name} variant="h5">
            {name}
          </Typography>
          <Typography sx={classes.role}>{role}</Typography>
          <Typography sx={classes.email}>
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
