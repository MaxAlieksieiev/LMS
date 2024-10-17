import { Button, FormControl, FormLabel, Input, Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const SignInForm = () => {
  const { t } = useTranslation("auth");
  return (
    <Flex width="100%" direction="column" gap="16px">
      <FormControl>
        <FormLabel htmlFor="email" textStyle="caption">
          {t("field.email")}
        </FormLabel>
        <Input id="email" placeholder={t("field.email")} />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password" textStyle="caption">
          {t("field.password")}
        </FormLabel>
        <Input id="password" placeholder="*******" type="password" />
      </FormControl>
      <Button size="large" variant="primary-contained" mt="8px">
        Log in
      </Button>
    </Flex>
  );
};
