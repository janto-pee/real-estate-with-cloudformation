import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
  body: object({
    username: string({
      required_error: "First name is required",
    }),
    firstname: string({
      required_error: "Last name is required",
    }),
    lastname: string({
      required_error: "Last name is required",
    }),
    password: string({
      required_error: "Password is required",
    }).min(6, "Password is too short - should be min 6 chars"),
    passwordConfirmation: string({
      required_error: "Password confirmation is required",
    }),
    role: string({
      required_error: "role is required",
    }),
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});

export const verifyUserSchema = object({
  params: object({
    emailverify: string({ required_error: "verification is required" }),
  }),
});

export const forgotPasswordSchema = object({
  body: object({
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
  }),
});

export const accessForgotPasswordSchema = object({
  params: object({
    accesscode: string({ required_error: "verification is required" }),
  }),
});
export const publicProfileSchema = object({
  params: object({
    username: string({ required_error: "username is required" }),
  }),
});

export const updatePasswordSchema = object({
  body: object({
    oldpassword: string({
      required_error: "Password is required",
    }).min(6, "Password is too short - should be min 6 chars"),
    password: string({
      required_error: "Password is required",
    }).min(6, "Password is too short - should be min 6 chars"),
  }),
});
export const updateForgotPasswordSchema = object({
  body: object({
    password: string({
      required_error: "Password is required",
    }).min(6, "Password is too short - should be min 6 chars"),
    confirmPassword: string({
      required_error: "Password is required",
    }).min(6, "Password is too short - should be min 6 chars"),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});
export const updateProfileSchema = object({
  body: object({
    username: string({
      required_error: "First name is required",
    }),
    firstname: string({
      required_error: "Last name is required",
    }),
    lastname: string({
      required_error: "Last name is required",
    }),
  }),
});

export type CreateUserInput = TypeOf<typeof createUserSchema>["body"];
export type VerifyUserInput = TypeOf<typeof verifyUserSchema>["params"];
export type forgotPasswordInput = TypeOf<typeof forgotPasswordSchema>["body"];
export type accessForgotPasswordInput = TypeOf<
  typeof accessForgotPasswordSchema
>["params"];
export type publicProfileInput = TypeOf<typeof publicProfileSchema>["params"];
export type updatePasswordInput = TypeOf<typeof updatePasswordSchema>["body"];
export type updateForgotPasswordInput = TypeOf<typeof updateForgotPasswordSchema>["body"];
export type updateProfileInput = TypeOf<typeof updateProfileSchema>["body"];
