import React from "react";

import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import useTheme from "@mui/material/styles/useTheme";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const MeetCard = ({ image, name, location, date, email }) => {
  const theme = useTheme();

  const classes = {
    root: {
      maxWidth: "100%",
      height: "410px",
      margin: "0 auto",
      border: "1px solid #BDBDBD",
      backgroundColor: "#FFFEFD",

      [theme.breakpoints.up("sm")]: {
        height: "440px",
      },

      [theme.breakpoints.up("xmd")]: {
        height: "420px",
      },
    },
    image: {
      width: "100%",
      height: "240px",
    },

    name: {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightBold,
    },
    bold: {
      fontWeight: theme.typography.fontWeightMedium,
      padding: "2px 0",
    },

    contentContainer: {
      padding: theme.spacing(2),
    },
    email: {
      paddingTop: theme.spacing(1),
      "& > a": {
        textDecoration: "none",
        color: "#015B90",
      },
    },
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box sx={classes.root}>
        <GatsbyImage
          image={image.gatsbyImageData}
          alt={image.description}
          style={classes.image}
        />
        <Box sx={classes.contentContainer}>
          <Typography sx={classes.name} variant="h6">
            {name}
          </Typography>
          <Typography sx={classes.bold}>{location}</Typography>
          <Typography sx={classes.bold}>{date}</Typography>
          <Typography sx={classes.email}>
            <a href={`mailto:${email}`}>{email}</a>
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

MeetCard.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default MeetCard;
