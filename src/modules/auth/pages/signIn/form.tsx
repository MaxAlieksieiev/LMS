import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export const SignInForm = () => {
  return (
    <form>
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" placeholder="email" />
        <FormErrorMessage></FormErrorMessage>
        <Button size="large" variant="primary-contained">
          Log in
        </Button>
      </FormControl>
    </form>
  );
};
