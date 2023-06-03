import { object, string, TypeOf } from "zod";


/**
 * @openapi
 * components:
 *  schemas:
 *    CreateSessionInput:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        password:
 *          type: string
 *          default: stringPassword123
 *    CreateSessionResponse:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *        username:
 *          type: string
 *        firstname:
 *          type: string
 *        lastname:
 *          type: string
 *        _id:
 *          type: string
 */
export const createSessionSchema = object({
  body: object({
    password: string({
      required_error: "Password is required",
    }).min(6, "Password is too short - should be min 6 chars"),
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
  })
});


export type CreateSessionInput = TypeOf<typeof createSessionSchema>["body"];
