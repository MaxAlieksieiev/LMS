import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const RouteGuard = ({ children }: Props) => {
  const token = localStorage.getItem("token");
  if (token) return <>{children}</>;
  if (!token) return <Navigate to="/auth/sign-in" replace />;
};
