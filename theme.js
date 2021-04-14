import { createMuiTheme } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

// we create theme where we can override default Material-UI values

const breakpoints = createBreakpoints({});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#056839",
      dark: "#000000",
    },
    secondary: {
      main: "#ffffff",
      dark: "#fff9f5",
    },
  },
  typography: {
    fontFamily: "Open Sans",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
  shape: {
    borderRadius: 30,
  },
  overrides: {
    MuiButton: {
      root: {
        height: "48px",
        width: "180px",
        textTransform: "none",
        fontWeight: 700,
        fontSize: "16px",
        lineHeight: "13px",
        [breakpoints.up("sm")]: {
          width: "320px",
          fontSize: "16px",
        },
      },
    },
    MuiContainer: {
      root: {
        maxWidth: "100%",
        [breakpoints.up("sm")]: {
          maxWidth: "540px",
        },
        [breakpoints.up("md")]: {
          maxWidth: "920px",
        },

        [breakpoints.up("lg")]: {
          maxWidth: "1140px",
        },
        [breakpoints.up("xl")]: {
          maxWidth: "1380px",
        },
      },
    },
    MuiTypography: {
      root: {
        color: "#000000",
      },
    },
  },
  props: {
    MuiButton: {
      variant: "contained",
      color: "primary",
    },
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 320,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1440,
    },
  },
});

export default theme;
