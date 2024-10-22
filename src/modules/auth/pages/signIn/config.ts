import * as yup from "yup";

type LoginForm = {
  email: string;
  password: string;
};

export const initialValues: LoginForm = {
  email: "",
  password: "",
};

export const validationSchema = yup.object({
  email: yup.string().required("This field is required."),
  password: yup.string().required("This field is required.").min(4).max(20),
});

export type Values = yup.InferType<typeof validationSchema>;
