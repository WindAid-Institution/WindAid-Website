import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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
      dark: "#BDBDBD",
    },
  },
  typography: {
    fontFamily: "Open Sans",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    body1: {
      lineHeight: "28px",
      fontSize: "16px",
      // [breakpoints.up("sm")]: {
      //   fontSize: "16px",
      // },
    },
    body2: {
      lineHeight: "20px",
      fontSize: "14px",
      fontWeight: 700,
    },
    h1: {
      fontSize: "40px",
      lineHeight: "54px",
      fontWeight: 800,
    },
    h4: {
      fontSize: "24px",
      lineHeight: "35px",
      fontWeight: 700,
      // [breakpoints.up("sm")]: {
      //   fontSize: "30px",
      //   lineHeight: "40px",
      // },
      // [breakpoints.up("md")]: {
      //   fontSize: "40px",
      // },
    },
    subtitle1: {
      fontSize: "18px",
      lineHeight: "29px",
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 30,
  },
  // overrides: {
  //   MuiButton: {
  //     root: {
  //       height: "48px",
  //       minWidth: "180px",
  //       textTransform: "none",
  //       fontWeight: 700,
  //       fontSize: "13px",
  //       lineHeight: "13px",
  //       // [breakpoints.up("sm")]: {
  //       //   minWidth: "320px",
  //       //   fontSize: "16px",
  //       // },
  //     },
  //   },
  //   MuiContainer: {
  //     root: {
  //       maxWidth: "100%",
  //       paddingRight: "15px",
  //       paddingLeft: "15px",
  //       marginRight: "auto",
  //       marginLeft: "auto",
  //       transition: "max-width 0.2s ease",
  //       // [breakpoints.up("sm")]: {
  //       //   maxWidth: "540px",
  //       // },
  //       // [breakpoints.up("xmd")]: {
  //       //   maxWidth: "720px",
  //       // },
  //       // [breakpoints.up("md")]: {
  //       //   maxWidth: "920px",
  //       // },

  //       // [breakpoints.up("lg")]: {
  //       //   maxWidth: "1140px",
  //       // },
  //       // [breakpoints.up("xl")]: {
  //       //   maxWidth: "1380px",
  //       // },
  //     },
  //   },
  //   MuiTypography: {
  //     root: {
  //       color: "#000000",
  //       fontStyle: "normal",
  //     },
  //     h1: {
  //       fontSize: "40px",
  //       lineHeight: "54px",
  //       fontWeight: 800,
  //     },
  //   },
  //   MuiLink: {
  //     root: {
  //       fontWeight: 700,
  //     },
  //   },
  //   MuiRadio: {
  //     root: {
  //       color: "#056839",
  //     },
  //   },
  // },
  // props: {
  //   MuiButton: {
  //     variant: "contained",
  //     color: "primary",
  //   },
  // },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 320,
      sm: 600,
      xmd: 768,
      md: 960,
      lg: 1200,
      xl: 1440,
    },
  },
});

theme.typography.body2 = {
  [theme.breakpoints.up("sm")]: {
    lineHeight: "32px",
    fontSize: "18px",
  },
  ...theme.typography.body2
};

export default theme;
