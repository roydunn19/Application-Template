import { createTheme } from "@mui/material";

const colors = {
  black: "#000000",
  white: "#ffffff",
  red: "#b7142e",
  grey: "#bdbdbd",
};

const theme = createTheme({
  components: {
    MuiTab: {
      variants: [
        {
          props: {},
          style: {
            fontFamily: "Tilt Warp",
            fontSize: "16px",
            color: colors.red,
          },
        },
      ],
    },
    MuiRadio: {
      variants: [
        {
          props: {},
          style: {
            color: colors.grey,
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: {},
          style: {
            fontFamily: "Tilt Warp",
            fontSize: "16px",
            color: colors.white,
            backgroundColor: colors.red,
          },
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "h1" },
          style: {
            fontFamily: "Tilt Warp",
          },
        },
        {
          props: { variant: "h1" },
          style: {
            fontFamily: "Tilt Warp",
          },
        },
        {
          props: { variant: "h2" },
          style: {
            fontFamily: "Roboto",
          },
        },
        {
          props: { variant: "h3" },
          style: {
            fontFamily: "Tilt Warp",
          },
        },
        {
          props: { variant: "h4" },
          style: {
            fontFamily: "Tilt Warp",
          },
        },
        {
          props: { variant: "h5" },
          style: {
            fontFamily: "Tilt Warp",
          },
        },
        {
          props: { variant: "h6" },
          style: {
            fontFamily: "Tilt Warp",
          },
        },
      ],
    },
  },
  palette: {
    primary: {
      main: colors.grey,
    },
    secondary: {
      main: colors.black,
    },
    info: {
      main: colors.white,
    },
    text: {
      primary: colors.black,
      secondary: colors.white,
    },
  },
});
export default theme;
