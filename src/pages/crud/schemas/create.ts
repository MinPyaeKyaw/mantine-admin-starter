import { requiredNumber, requiredString } from "@helpers/form-validators";
import { z } from "zod";

export const createSchema = z.object({
  firstName: requiredString("Email is required!"),
  lastName: requiredString("Password is required!"),
  age: requiredNumber("Password is required!"),
  visits: requiredNumber("Password is required!"),
  progress: requiredNumber("Password is required!"),
});
