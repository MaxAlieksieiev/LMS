/* eslint-disable @typescript-eslint/no-unused-vars */
import { StringSchema, StringSchemaConstructor } from "yup";

declare module "yup" {
  interface StringSchema {
    isValidEmail(message: string): StringSchema;
  }
}

export const validation: DateSchemaConstructor;
