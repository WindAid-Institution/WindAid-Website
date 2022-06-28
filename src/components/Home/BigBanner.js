import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Grid, Box } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";

import useHomepageData from "src/hooks/queries/homepage";

const BigBanner = () => {
  const theme = useTheme();

  const classes = {
    picture: {
      height: "calc(19.7vw + 329px)",
      maxHeight: "850px",
      width: "100%",
      objectFit: "cover",
    },
  };

  const {
    hero: {
      title,
      subtitle,
      image: { description, gatsbyImageData },
    },
  } = useHomepageData();

  return (
    <Grid
      container
      sx={{ position: "relative", height: "100%", width: "100%" }}
    >
      <Grid item sx={{ position: "relative", height: "100%", width: "100%" }}>
        <GatsbyImage
          image={gatsbyImageData}
          style={classes.picture}
          alt={description}
          backgroundColor={theme.palette.primary.main}
        />
        <Grid
          item
          sx={{
            position: "absolute",
            top: "calc(7.7vw + 89.3px)",
            padding: {
              xs: "0px 34px",
              sm: "0px 54px",
              lg: "0 calc(12.6vw - 75px)",
            },
            // [theme.breakpoints.up("sm")]: {
            //   padding: "0px 54px",
            // },
            // [theme.breakpoints.up("xl")]: {
            //   padding: "0 calc(12.6vw - 75px)",
            // },
          }}
        >
          <Box
            sx={{
              typography: "h1",
              color: theme.palette.secondary.main,
              fontSize: "calc(1.48vw + 18.7px)",
              fontWeight: theme.typography.fontWeightBold,
              lineHeight: "calc(1.76vw + 28.7px)",
              width: "calc(20.74vw + 201.33px)",
            }}
          >
            {title}
          </Box>
          <Box
            align="left"
            sx={{
              typography: "subtitle1",
              color: theme.palette.secondary.main,
              fontSize: "calc(0.37vw + 12.7px)",
              fontWeight: theme.typography.fontWeightRegular,
              lineHeight: "calc(0.09vw + 27.7px)",
              width: "calc(20.74vw + 201.33px)",
              margin: "8px 0px",
            }}
          >
            {subtitle}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BigBanner;
