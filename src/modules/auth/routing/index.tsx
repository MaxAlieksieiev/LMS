import { SignIn } from "../pages/signIn";
import { SignUp } from "../pages/signUp";

export const AuthRoutingModule = [
  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
];
