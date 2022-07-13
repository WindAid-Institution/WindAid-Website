import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useTheme from "@mui/material/styles/useTheme";

const BottomFooter = () => {
  const theme = useTheme();
  const classes = {
    bar: {
      display: "flex",
      justifyContent: "center",
      background: theme.palette.primary.main,
      color: theme.palette.secondary.main,
      padding: "16px",

      "& p": {
        margin: 0,
        marginLeft: "4px",

        fontFamily: theme.typography.fontFamily,
        fontSize: "14px",
        lineHeight: "16px",

        [theme.breakpoints.down("md")]: {
          fontSize: "12px",
        },
      },
    },
    privacyText: {
      background: theme.palette.primary.main,
      color: theme.palette.secondary.main,
      display: "flex",
      justifyContent: "center",
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },

      "& > p": {
        color: theme.palette.secondary.main,
      },
    },
  };
  const year = new Date().getFullYear();
  return (
    <Box sx={classes.bar}>
      <Box sx={classes.privacyText}>
        <Typography> {`© ${year} WindAid Institute Registered NGO`}</Typography>
        <Typography>
          {" "}
          |{" "}
          <a
            href="https://www.windaid.org/terms-and-conditions/ "
            style={{ color: theme.palette.secondary.main }}
          >
            Terms and Conditions
          </a>
        </Typography>
        <Typography> | All rights reserved</Typography>
        <Typography>
          {" "}
          | Designed by{" "}
          <a
            href="http://www.blendibraha.com/"
            style={{ color: theme.palette.secondary.main }}
          >
            Blendi Braha
          </a>
          . Developed by{" "}
          <a
            href="https://www.vazco.eu/"
            style={{ color: theme.palette.secondary.main }}
          >
            Vazco
          </a>{" "}
          and{" "}
          <a
            href="https://rishikhan.dev"
            style={{ color: theme.palette.secondary.main }}
          >
            Rishi Khan Dev
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default BottomFooter;
