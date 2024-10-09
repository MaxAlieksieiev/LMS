import { Flex, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Logo from "../../../assets/logo.svg";

export const AuthLayout = () => {
  return (
    <Flex
      align="center"
      justify="center"
      width="100vw"
      height="100vh"
      direction="column"
    >
      <Logo />
      <Text textStyle="h4">Log in</Text>
      <Text>Welcome to LMS</Text>
      <Outlet />
    </Flex>
  );
};
