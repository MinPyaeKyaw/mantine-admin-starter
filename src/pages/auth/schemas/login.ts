import { requiredString } from "@helpers/form-validators";
import { z } from "zod";

export const loginSchema = z.object({
  email: requiredString("Email is required!"),
  password: requiredString("Password is required!"),
});
