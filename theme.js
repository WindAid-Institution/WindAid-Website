import { createMuiTheme } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

// we create theme where we can override default Material-UI values

const breakpoints = createBreakpoints({
  values: {
    xxs: 0,
    xs: 320,
    sm: 600,
    xmd: 768,
    md: 960,
    lg: 1200,
    xl: 1440,
  },
});

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
    info: {
      main: "#015B90",
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
        minWidth: "180px",
        textTransform: "none",
        fontWeight: 700,
        fontSize: "13px",
        lineHeight: "13px",
        [breakpoints.up("sm")]: {
          minWidth: "320px",
          fontSize: "16px",
        },
      },
    },
    MuiContainer: {
      root: {
        maxWidth: "100%",
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
        transition: "max-width 0.2s ease",
        [breakpoints.up("sm")]: {
          maxWidth: "540px",
        },
        [breakpoints.up("xmd")]: {
          maxWidth: "720px",
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
        fontStyle: "normal",
      },
    },
  },
  props: {
    MuiButton: {
      variant: "contained",
      color: "primary",
    },
  },
  breakpoints,
});

export default theme;
