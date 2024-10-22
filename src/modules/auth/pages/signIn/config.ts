import Yup from "../../../core/configuration/validation";

type LoginForm = {
  email: string;
  password: string;
};

export const initialValues: LoginForm = {
  email: "",
  password: "",
};

export const validationSchema = Yup.object({
  email: Yup.string()
    .required("This field is required.")
    .isValidEmail("Email isn't correct."),
  password: Yup.string().required("This field is required.").min(4).max(20),
});

export type Values = Yup.InferType<typeof validationSchema>;
