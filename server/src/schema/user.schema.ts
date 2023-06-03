import { object, string, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserInput:
 *      type: object
 *      required:
 *        - email
 *        - username
 *        - firstname
 *        - lastname
 *        - password
 *        - passwordConfirmation
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        username:
 *          type: string
 *          default: JaneDoe
 *        firstname:
 *          type: string
 *          default: Jane
 *        lastname:
 *          type: string
 *          default: Doe
 *        password:
 *          type: string
 *          default: stringPassword123
 *        passwordConfirmation:
 *          type: string
 *          default: stringPassword123
 *    CreateUserResponse:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          example: jane.doe@example.com
 *        username:
 *          type: string
 *          example: JaneDoe
 *        firstname:
 *          type: string
 *          example: Jane
 *        lastname:
 *          type: string
 *          example: Doe
 *        password:
 *          type: string
 *          example: stringPassword123
 *        passwordConfirmation:
 *          type: string
 *          example: stringPassword123
*/

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
/**
 * @openapi
 * components:
 *   schema:
 *     VerifyEmailResponse:
 *       type: object
 *       required:
 *        - data
 *       properties:
 *         data:
 *           type: string
 *           example: user successfully verified
 */

export const verifyUserSchema = object({
  params: object({
    emailverify: string({ required_error: "verification is required" }),
  }),
});

/**
 * @openapi
 * components:
 *  schemas:
 *    ForgotPasswordInput:
 *      type: object
 *      required:
 *        - email
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *    ForgotPasswordResponse:
 *      type: object
 *      properties:
 *        data:
 *          type: string
 *          example: password reset email sent
 */

export const forgotPasswordSchema = object({
  body: object({
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
  }),
});

/**
 * @openapi
 * components:
 *   schema:
 *     accessForgotPasswordResponse:
 *       type: object
 *       required:
 *        - data
 *       properties:
 *         data:
 *           type: string
 *           example: please update your password
 */

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

/**
 * @openapi
 * components:
 *  schemas:
 *    UpdatePasswordInput:
 *      type: object
 *      required:
 *        oldpassword:
 *          type: string
 *          default: stringPassword123
 *        password:
 *          type: string
 *          default: stringPassword123
 *        passwordConfirmation:
 *          type: string
 *          default: stringPassword123
 *    UpdatePasswordResponse:
 *      type: object
 *      properties:
 *        data:
 *          type: string
 *          example: password successfully updated
 */

export const updatePasswordSchema = object({
  body: object({
    oldpassword: string({
      required_error: "Password is required",
    }).min(6, "Password is too short - should be min 6 chars"),
    password: string({
      required_error: "Password is required",
    }).min(6, "Password is too short - should be min 6 chars"),
    passwordConfirmation: string({
      required_error: "Password is required",
    }).min(6, "Password is too short - should be min 6 chars"),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});

/**
 * @openapi
 * components:
 *  schemas:
 *    UpdateForgotPasswordInput:
 *      type: object
 *      required:
 *        password:
 *          type: string
 *          default: stringPassword123
 *        confirmPassword:
 *          type: string
 *          default: stringPassword123
 *    UpdatePasswordResponse:
 *      type: object
 *      properties:
 *        data:
 *          type: string
 *          example: password successfully updated
 */
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

/**
 * @openapi
 * components:
 *  schemas:
 *    UpdateUserInput:
 *      type: object
 *      required:
 *        - email
 *        - username
 *        - firstname
 *        - lastname
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        username:
 *          type: string
 *          default: Jane Doe
 *        firstname:
 *          type: string
 *          default: Jane Doe
 *        lastname:
 *          type: string
 *          default: Jane Doe
 *    UpdateUserResponse:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          example: jane.doe@example.com
 *        username:
 *          type: string
 *          example: JaneDoe
 *        firstname:
 *          type: string
 *          example: Jane
 *        lastname:
 *          type: string
 *          example: Doe
 *        password:
 *          type: string
 *          example: stringPassword123
 *        passwordConfirmation:
 *          type: string
 *          example: stringPassword123
 */
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
