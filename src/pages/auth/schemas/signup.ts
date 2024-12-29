import {
  requiredEmail,
  requiredString,
  requiredTrueValue,
} from "@helpers/form-validators";
import { z } from "zod";

export const signupSchema = z.object({
  name: requiredString("Name is required!"),
  email: requiredEmail("Email is required!"),
  password: requiredString("Password is required!"),
  terms: requiredTrueValue("You must agree to terms and conditions"),
});
