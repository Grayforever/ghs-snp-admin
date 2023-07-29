import { createTheme } from "@mui/material/styles";
import Lexend from "./assets/fonts/lexend.ttf";

const theme = createTheme({
  typography: {
    fontFamily: "Lexend, Arial",
  },
  palette: {
    background: {
      default: "#F5F5F5",
    },
    primary: {
      main: "#4F9A0A",
      dark: "#01A30B",
      light: "#D4F7E8",
    },
    secondary: {
      main: "#000000",
      light: "#FFFFFF",
    },
    error: {
      main: "#DD0101",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Lexend';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Lexend'), local('Lexend-Regular'), url(${Lexend}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            boxShadow: "none",
            padding: "1px 20px",
            textTransform: "capitalize",
            whiteSpace: "nowrap",
            textAlign: "center",
          },
        },
        {
          props: { variant: "contained", color: "success" },
          style: {
            backgroundColor: "#D4F7E8",
            color: "#4F9A0A",
            borderRadius: 0,
            border: "none",
            boxShadow: "none",
            padding: "1px 20px",
            "&:hover": {
              backgroundColor: "#4F9A0A",
              color: "#FFFFFF",
              boxShadow: "none",
              border: "none",
            },
          },
        },
        {
          props: { variant: "text" },
          style: {
            color: "#4F9A0A",
            padding: "4px 20px",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#D4F7E8",
              boxShadow: "none",
            },
          },
        },
        {
          props: { variant: "text", color: "secondary" },
          style: {
            color: "#000000",
            textTransform: "inherit",
            alignSelf: "self-start",
            fontSize: 16,
          },
        },
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            backgroundColor: "#FFFFFF",
            color: "#000000",
            border: "2px solid #000000",
            boxShadow: "none",
            textTransform: "initial",
          },
        },
        {
          props: { variant: "contained", color: "info" },
          style: {
            backgroundColor: "#CCCCCC",
            color: "#000000",
            boxShadow: "none",
            textTransform: "inherit",
            "&:hover": {
              backgroundColor: "#CCCCCC",
              color: "#000000",
            },
          },
        },
      ],
    },
  },
});

export default theme;
