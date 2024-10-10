import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: {
    width: "100%",
    borderRadius: "8px",
  },
  sizes: {
    large: {
      height: "52px",
    },
    medium: {
      height: "44px",
    },
    small: {
      height: "36px",
    },
  },
  variants: {
    "primary-contained": {
      color: "white",
      background: "primary.500",
    },
    "primary-outlined": {
      borderColor: "primary.500",
      borderWidth: "1px",
      color: "primary.500",
    },
    "primary-text": {
      color: "primary.500",
    },
    "secondary-contained": {
      color: "primary.500",
      background: "white",
    },
    "secondary-outlined": {
      borderColor: "white",
      borderWidth: "1px",
      color: "white",
    },
    "secondary-text": {
      color: "white",
    },
    "error-contained": {
      color: "white",
      background: "error.500",
    },
    "error-outlined": {
      borderColor: "error.500",
      borderWidth: "1px",
      color: "error.500",
    },
    "error-text": {
      color: "error.500",
    },
  },
});

export { Button };
