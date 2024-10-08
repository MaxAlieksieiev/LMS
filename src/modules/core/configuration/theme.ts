import { extendTheme } from "@chakra-ui/react";

const COMMON_PALETTE = {
  primary: {
    50: "#EBF1FE",
    100: "#D7E3FD",
    200: "#B0C6FC",
    300: "#87A5F6",
    400: "#6889EE",
    500: "#395FE3",
    600: "#2948C3",
    700: "#1C34A3",
    800: "#122383",
    900: "#0A176C",
  },
  success: {
    50: "#F4FDEC",
    100: "#E9FCD9",
    200: "#CEFAB5",
    300: "#A9F08C",
    400: "#85E16C",
    500: "#53CE40",
    600: "#35B12E",
    700: "#209423",
    800: "#14771E",
    900: "#0C621B",
  },
  warning: {
    50: "#FEFBE5",
    100: "#F3EFE1",
    200: "#FEEE99",
    300: "#FEE266",
    400: "#FDD640",
    500: "#FCC202",
    600: "#D8A101",
    700: "#B58201",
    800: "#926500",
    900: "#785100",
  },
  error: {
    50: "#FEF3E8",
    100: "#FEE8D1",
    200: "#FECCA4",
    300: "#FEA877",
    400: "#FD8655",
    500: "#FC4E1E",
    600: "#D83115",
    700: "#B51A0F",
    800: "#92090A",
    900: "#78050E",
  },
  info: {
    50: "#E9F4FF",
    100: "#D3E9FF",
    200: "#A6D1FF",
    300: "#7AB5FF",
    400: "#599CFF",
    500: "#2374FF",
    600: "#1959DB",
    700: "#1142B7",
    800: "#0B2E93",
    900: "#061F7A",
  },
};

export const lightTheme = extendTheme({
  colors: {
    neutral: {
      0: "#222630",
      50: "#2A303C",
      100: "#414651",
      200: "#5A5E68",
      300: "#71747D",
      400: "#898C93",
      500: "#A0A3A8",
      600: "#B7B9BD",
      700: "#D0D1D4",
      800: "#E7E7E9",
      900: "#FFFFFF",
    },
    ...COMMON_PALETTE,
  },
});

export const darkTheme = extendTheme({
  colors: {
    neutral: {
      0: "#FFFFFF",
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D2D5DA",
      400: "#9DA3AE",
      500: "#6C727F",
      600: "#4D5562",
      700: "#394150",
      800: "#212936",
      900: "#121826",
    },
    ...COMMON_PALETTE,
  },
});
