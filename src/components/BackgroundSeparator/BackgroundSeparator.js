/* eslint-disable no-dupe-keys */
import React from "react";
import PropTypes from "prop-types";
import useTheme from "@mui/material/styles/useTheme";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const container = {
  width: "100%",
  height: "100%",
  display: "flex",
};

const BackgroundSeparator = ({
  imageSrc,
  headingText,
  paragraphText,
  isFilter,
}) => {
  const theme = useTheme();

  const classes = {
    root: {
      position: "relative",
      height: "460px",
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",

      /* You can uncomment a line bellow to achive parallax effect.
      I turned it off right now because image is low quality and it looks preety bad
    */

      /* backgroundAttachment: "fixed", */
      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      transition: "height 0.2s ease",
      imageRendering: "high-quality",

      [theme.breakpoints.up("md")]: {
        height: "320px",
      },
    },

    container,

    filter: {
      ...container,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },

    textContainer: {
      display: "flex",
      height: "auto",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      transition: "width 0.2s ease, padding 0.2s ease",
    },

    header: {
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: "20px",
      lineHeight: "30px",
      width: "calc(30.4vw + 219px)",
      transition: "font-size 0.2s ease, line-height 0.2s ease, width 0.2s ease",

      [theme.breakpoints.up("xs")]: {
        fontSize: "calc(0.0333 * 100vw + 8px)",
        lineHeight: "calc(0.042 * 100vw + 15px)",
      },

      [theme.breakpoints.up("sm")]: {
        fontSize: "28px",
        lineHeight: "40px",
        width: "calc(30.4vw + 300px)",
      },
    },

    paragraph: {
      color: theme.palette.secondary.main,
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "28px",
      paddingTop: "16px",
      width: "calc(41.1vw + 160px)",

      [theme.breakpoints.up("xs")]: {
        fontSize: "calc(0.0167 * 100vw + 8px)",
        lineHeight: "calc(-0.025 * 100vw + 37px)",
      },

      [theme.breakpoints.up("sm")]: {
        fontSize: "calc(-0.0056 * 100vw + 21.33px)",
        lineHeight: "calc(0.0167 * 100vw + 12px)",
      },

      [theme.breakpoints.up("md")]: {
        fontSize: "16px",
        lineHeight: "28px",
      },
    },
  };
  return (
    <Box style={{ backgroundImage: `url(${imageSrc})` }} sx={classes.root}>
      <Box sx={isFilter ? classes.filter : classes.container}>
        <Container sx={classes.textContainer}>
          <Typography variant="h3" sx={classes.header}>
            {headingText}
          </Typography>
          {Array.isArray(paragraphText) ? (
            paragraphText.map((paragraph) => (
              <Typography key={paragraph} sx={classes.paragraph}>
                {paragraph}
              </Typography>
            ))
          ) : (
            <Typography sx={classes.paragraph}>{paragraphText}</Typography>
          )}
        </Container>
      </Box>
    </Box>
  );
};

BackgroundSeparator.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  headingText: PropTypes.string,
  paragraphText: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  isFilter: PropTypes.bool,
};
BackgroundSeparator.defaultProps = {
  headingText: "",
  paragraphText: "",
  isFilter: true,
};

export default BackgroundSeparator;
