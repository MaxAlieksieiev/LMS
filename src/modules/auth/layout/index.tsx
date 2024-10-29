import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../../../assets/logo.svg";

export const AuthLayout = () => {
  const { t } = useTranslation("auth");
  const navigate = useNavigate();

  const onGoToSignUp = () => navigate("/auth/sign-up");

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
        <Box
          display="flex"
          width="100%"
          alignItems="center"
          justifyContent="center"
          gap="10px"
        >
          <Text textStyle="body1">{t("account.not.exist")}</Text>
          <Button width="fit-content" variant="link" onClick={onGoToSignUp}>
            {t("sign.up")}
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};
