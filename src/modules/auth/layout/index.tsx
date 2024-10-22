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
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap="60px"
      >
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Logo />
          <Text textStyle="h4" color="neutral.900">
            Log in
          </Text>
          <Text color="neutral.500" textStyle="body1">
            Welcome to LMS
          </Text>
        </Flex>
        <Outlet />
      </Flex>
    </Flex>
  );
};
