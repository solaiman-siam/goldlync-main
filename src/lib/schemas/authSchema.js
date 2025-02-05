import * as z from "zod";
import { MAX_PROFILE_IMAGE_SIZE } from "../staticData";

const nameValidation = z
  .string({ required_error: "Full name is required" })
  .min(1, "Full name is required")
  .max(80, "Full name is too long");

const phoneNumberValidation = z
  .string({ required_error: "Phone number is required" })
  .min(1, "Phone number is required")

const addressValidation = z
  .string({ required_error: "Address is required" })
  .min(10, "Address must be at least 10 characters long")
  .max(200, "Address must not exceed 200 characters");

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
    name: nameValidation,
    phoneNumber: phoneNumberValidation,
    address: addressValidation,
    language: z
      .string({ required_error: "Language is required" })
      .min(1, "Language is required").optional(),
    email: emailValidation,
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

export const profileUpdateSchema = z.object({
  avatar: z
    .instanceof(File, {
      message: "Please upload the valid image file",
    })
    .refine(
      (file) => ["image/jpg", "image/jpeg", "image/png"].includes(file.type),
      {
        message: "Image must be in JPG or JPEG or PNG format",
      }
    )
    .refine((file) => file.size <= MAX_PROFILE_IMAGE_SIZE, {
      message: "Image size should be less than 5 MB",
    })
    .nullable()
    .optional(),
  name: nameValidation,
  email: emailValidation,
  phoneNumber: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  bio: z.string().max(2000, "Bio is too long").optional().nullable(),
});
