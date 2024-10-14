import {
  defineStyleConfig,
  createMultiStyleConfigHelpers,
} from "@chakra-ui/react";
import { inputAnatomy } from "@chakra-ui/anatomy";

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
      backgroundColor: "primary.500",
      _disabled: {
        backgroundColor: "primary.opacity-500-20",
      },
      _hover: {
        backgroundColor: "primary.400",
        _disabled: {
          backgroundColor: "primary.opacity-500-20",
        },
      },
    },
    "primary-outlined": {
      borderColor: "primary.500",
      borderWidth: "1px",
      color: "primary.500",
      _disabled: {
        backgroundColor: "primary.opacity-500-20",
      },
      _hover: {
        backgroundColor: "primary.opacity-500-10",
        _disabled: {
          backgroundColor: "primary.opacity-500-20",
        },
      },
    },
    "primary-text": {
      color: "primary.500",
      _disabled: {
        backgroundColor: "primary.opacity-500-20",
      },
      _hover: {
        backgroundColor: "primary.opacity-500-10",
        _disabled: {
          backgroundColor: "primary.opacity-500-20",
        },
      },
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

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    color: "neutral.900",
    width: "100%",
    height: "44px",
    padding: "12px 16px",
    _placeholder: {
      color: "neutral.400",
    },
    _focusVisible: {
      borderColor: "primary.500",
      boxShadow: "none",
    },
    _hover: {
      _disabled: {
        color: "neutral.300",
      },
    },
    _disabled: {
      color: "neutral.300",
    },
  },
  element: {
    color: "neutral.500",
  },
  addon: {
    color: "neutral.500",
  },
});

const inputTheme = defineMultiStyleConfig({ baseStyle });

export { Button, inputTheme };
