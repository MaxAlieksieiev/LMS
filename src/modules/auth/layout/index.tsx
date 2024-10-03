import { Container, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Logo from "../../../assets/logo.svg";

export const AuthLayout = () => {
  return (
    <Container maxWidth="100vw" maxHeight="100vh">
      <Box>
        <Logo />
        <Outlet />
      </Box>
    </Container>
  );
};
