import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validationSchema, Values } from "./config";

export const SignInForm = () => {
  const { t } = useTranslation("auth");

  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm<Values>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = () => {
    console.log("values", getValues("email"));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex width="557px" direction="column" gap="16px">
        <FormControl isInvalid={!!errors?.email}>
          <FormLabel htmlFor="email" textStyle="caption">
            {t("field.email")}
          </FormLabel>
          <Input
            id="email"
            placeholder={t("field.email")}
            {...register("email")}
          />
          {errors?.email && (
            <FormErrorMessage>{errors?.email.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={!!errors?.password}>
          <FormLabel htmlFor="password" textStyle="caption">
            {t("field.password")}
          </FormLabel>
          <Input
            id="password"
            placeholder="*******"
            type="password"
            {...register("password")}
          />
          {errors?.password && (
            <FormErrorMessage>{errors?.password.message}</FormErrorMessage>
          )}
        </FormControl>
        <Button
          size="large"
          variant="primary-contained"
          mt="8px"
          onClick={onSubmit}
          type="submit"
        >
          {t("button.login")}
        </Button>
      </Flex>
    </form>
  );
};
