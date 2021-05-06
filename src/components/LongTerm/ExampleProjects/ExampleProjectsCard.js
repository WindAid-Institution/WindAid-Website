import React, { useState } from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import { GrLinkedin } from "@react-icons/all-files/gr/GrLinkedin";

import Body from "shared/Body";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.secondary.main,
  },

  textContainer: {
    paddingTop: theme.spacing(2),

    [theme.breakpoints.up("md")]: {
      paddingTop: 0,
    },
  },

  image: {
    width: "100%",
    float: "left",
    height: "320px",
    marginBottom: theme.spacing(3),

    [theme.breakpoints.up("md")]: {
      height: "460px",
      width: "350px",
      paddingRight: theme.spacing(2),
      marginRight: theme.spacing(3),
      marginBottom: 0,
    },
  },

  bodyContainer: ({ isCardExpanded }) => ({
    height: isCardExpanded ? "auto" : "300px",
    paddingTop: isCardExpanded ? theme.spacing(2) : 0,
  }),

  title: {
    fontSize: "18px",
    lineHeight: "24px",
    paddingBottom: "6px",

    "& > h5": {
      fontWeight: theme.typography.fontWeightBold,
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "24px",
      lineHeight: "36px",
    },
  },

  subTitle: {
    fontSize: "16px",
    lineHeight: "24px",

    [theme.breakpoints.up("md")]: {
      fontSize: "18px",
    },
  },

  mediaContainer: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
  },

  linkedIn: {
    marginRight: theme.spacing(2),
    width: "25px",
    height: "25px",

    "& > svg": {
      width: "inherit",
      height: "inherit",
    },
    "& > svg > path": {
      color: theme.palette.secondary.main,
    },
  },

  email: {
    textDecoration: "none",
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightBold,
  },

  date: {
    fontSize: "16px",
    lineHeight: "24px",
    paddingLeft: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      fontSize: "18px",
    },
  },

  leftAlign: {
    textAlign: "left",
  },

  rightAlign: {
    display: "flex",
    justifyContent: "flex-end",
  },

  boldFont: {
    fontWeight: theme.typography.fontWeightBold,
  },

  subText: {
    margin: "16px 6px 6px 0",
    alignSelf: "flex-end",
    fontWeight: theme.typography.fontWeightLight,
  },

  bodyTwo: {
    paddingTop: theme.spacing(2),
  },

  expand: {
    width: "100px",
    cursor: "pointer",
    marginTop: theme.spacing(2),

    " & > p": {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
}));

const ExampleProjectsCard = ({
  image,
  name,
  location,
  date,
  body,
  url,
  email,
}) => {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  const toggleCard = () => {
    setIsCardExpanded((value) => !value);
  };
  const classes = useStyles({ isCardExpanded });
  const theme = useTheme();

  const bodyTextStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: isCardExpanded ? "inline" : "-webkit-box",
    "-webkit-line-clamp": 10,
    "-webkit-box-orient": "vertical",
    color: theme.palette.secondary.main,
  };

  return (
    <Box className={classes.root}>
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className={classes.image}
      />
      <Box item>
        <Box className={classes.textContainer}>
          <Box
            className={clsx(classes.leftAlign, classes.boldFont, classes.title)}
          >
            <Typography variant="h5" color="secondary">
              {name}
            </Typography>
          </Box>
          <Box className={(classes.leftAlign, classes.subTitle)}>
            <span className={classes.boldFont}>{location}</span>
            <span className={classes.date}>{date}</span>
          </Box>
          {(url || email) && (
            <Box className={(classes.leftAlign, classes.mediaContainer)}>
              {url && (
                <a href={url} className={classes.linkedIn}>
                  <GrLinkedin />
                </a>
              )}
              {email && (
                <a className={classes.email} href={`mailto:${email}`}>
                  {email}
                </a>
              )}
            </Box>
          )}
          <Box>
            <Box className={clsx(classes.bodyContainer)}>
              <Body
                style={{
                  textStyle: bodyTextStyle,
                }}
                body={body.text}
                size="auto"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.rightAlign}>
        <Box className={classes.expand} onClick={toggleCard}>
          <Typography color="secondary">
            {isCardExpanded ? "Read Less" : "Read More"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

ExampleProjectsCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }).isRequired,
  image: PropTypes.object.isRequired,
  url: PropTypes.string,
  email: PropTypes.string,
};

ExampleProjectsCard.defaultProps = {
  url: "",
  email: "",
};

export default ExampleProjectsCard;
