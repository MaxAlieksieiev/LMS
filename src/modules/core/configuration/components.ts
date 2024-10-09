import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  sizes: {
    large: {
      height: "52px",
      borderRadius: "8px",
      width: "100%",
    },
  },
  variants: {
    primary: {
      color: "white",
      background: "primary.500",
    },
  },
});

export { Button };
