import * as Yup from "yup";
import { VALIDATION_EMAIL_PATTERN } from "../constants/common";

Yup.addMethod<Yup.StringSchema>(Yup.string, "isValidEmail", function (message) {
  return Yup.string().test({
    name: "isValidEmail",
    message,
    test: (value: string) => {
      return value ? VALIDATION_EMAIL_PATTERN.test(value) : false;
    },
  });
});

export default Yup;
