import { Flex, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Logo from "../../../assets/logo.svg";

export const AuthLayout = () => {
  return (
    <Flex
      align="center"
      justify="center"
      maxWidth="100vw"
      maxHeight="100vh"
      direction="column"
    >
      <Logo />
      <Text fontSize="34px">Log in</Text>
      <Text>Welcome to LMS</Text>
      <Outlet />
    </Flex>
  );
};
