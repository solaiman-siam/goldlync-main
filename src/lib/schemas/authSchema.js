import * as z from "zod";

const emailValidation = z
  .string({ required_error: "Email address is required" })
  .email({ message: "Email address is required" })
  .max(80, "Email address is too long");

const passwordValidation = z
  .string({ required_error: "Password is required" })
  .min(8, "Password must be at least 8 characters long")
  .max(20, "Password must not exceed 20 characters");

export const registerSchema = z
  .object({
    name: z
      .string({ required_error: "Full name is required" })
      .min(1, "Full name is required")
      .max(80, "Full name is too long"),
    email: emailValidation,
    phoneNumber: z.string().optional().nullable(),
    language: z
      .string({ required_error: "Language is required" })
      .min(1, "Language is required"),
    password: passwordValidation,
    confirmPassword: passwordValidation,
  })
  .refine(
    ({ password, confirmPassword }) => password === confirmPassword,
    "Confirm password does not match"
  );

export const loginSchema = z.object({
  email: emailValidation,
  password: passwordValidation,
  rememberMe: z.boolean().default(false).optional(),
});

export const forgetSchema = z.object({
  email: emailValidation,
});
