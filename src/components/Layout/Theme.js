// theme.js

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    mainRed: {
      500: "#900C3E", // Light mode color
      900: "#FBB3CC", // Dark mode color
    },
  },
});

export default theme;
