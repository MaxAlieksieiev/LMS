import { Button, FormControl, FormLabel, Input, Flex } from "@chakra-ui/react";

export const SignInForm = () => {
  return (
    <Flex width="100%" direction="column" gap="16px">
      <FormControl>
        <FormLabel htmlFor="email" textStyle="caption">
          Email
        </FormLabel>
        <Input id="email" placeholder="email" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password" textStyle="caption">
          Password
        </FormLabel>
        <Input id="password" placeholder="*******" type="password" />
      </FormControl>
      <Button size="large" variant="primary-contained" mt="8px">
        Log in
      </Button>
    </Flex>
  );
};
