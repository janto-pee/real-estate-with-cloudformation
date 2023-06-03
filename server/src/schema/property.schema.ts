import { object, string, number, TypeOf } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *    CreatePropertyInput:
 *      type: object
 *      required:
 *        - price
 *        - address
 *        - bedrooms
 *        - bathrooms
 *        - landsize
 *        - carpark
 *        - title
 *        - slug
 *        - description
 *        - sold
 *        - type
 *        - action
 *        - view
 *      properties:
 *        price:
 *          type: number
 *          default: 125000
 *        address:
 *          type: string
 *          default: xxxxxxxxxxxx
 *        bedrooms:
 *          type: number
 *          default: 4
 *        bathrooms:
 *          type: number
 *          default: 4
 *        landsize:
 *          type: number
 *          default: 124
 *        carpark:
 *          type: number
 *          default: 2
 *        title:
 *          type: number
 *          default: 2
 *        slug:
 *          type: number
 *          default: 124
 *        description:
 *          type: number
 *          default: 2
 *        sold:
 *          type: boolean
 *          default: false
 *        type:
 *          type: string
 *          default: other
 *        action:
 *          type: string
 *          default: sell
 *        view:
 *          type: Number
 *          default: 0
 *    CreatePropertyResponse:
 *      type: object
 *      properties:
 *        price:
 *          type: number
 *        address:
 *          type: string
 *        bedrooms:
 *          type: number
 *        bathrooms:
 *          type: number
 *        landsize:
 *          type: number
 *        carpark:
 *          type: number
 *        title:
 *          type: number
 *        slug:
 *          type: number
 *        description:
 *          type: number
 *        sold:
 *          type: boolean
 *        type:
 *          type: string
 *        action:
 *          type: string
 *        view:
 *          type: Number
 *
 */

export const createPropertySchema = object({
  body: object({
    price: number({
      required_error: "price is required",
    }).min(5, "please enter the amount of house per annum"),
    address: string({
      required_error: "Last name is required",
    }),
    bedrooms: number({
      required_error: "price is required",
    }),
    bathrooms: number({
      required_error: "price is required",
    }),
    landsize: number({
      required_error: "price is required",
    }),
    carpark: number({
      required_error: "price is required",
    }),
    title: string({
      required_error: "Last name is required",
    }),
    slug: string({
      required_error: "Last name is required",
    }),
    type: string({
      required_error: "Last name is required",
    }),
    action: string({
      required_error: "Last name is required",
    }),
    view: number({
      required_error: "price is required",
    }),
  }),
});

/**
 * @openapi
 * components:
 *   schema:
 *     GetPropertiesResponse:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           price:
 *             type: number
 *           address:
 *             type: string
 *           bedroooms:
 *             type: string
 *           bathrooms:
 *             type: string
 *           landsize:
 *             type: number
 *           carpark:
 *             type: string
 *           title:
 *             type: string
 *           slug:
 *             type: string
 *           description:
 *             type: string
 *           sold:
 *             type: string
 *           type:
 *             type: number
 *           action:
 *             type: string
 *           view:
 *             type: string
 */


export const getPropertySchema = object({
  params: object({
    id: string({ required_error: "verification is required" }),
  }),
});

export const updatePropertySchema = object({
  params: object({
    id: string({ required_error: "verification is required" }),
  }),
  body: object({
    brand: string({
      required_error: "Last name is required",
    }),
    model: string({
      required_error: "Last name is required",
    }),
    problem: string({
      required_error: "Last name is required",
    }),
    chasis: string({
      required_error: "role is required",
    }),
    company: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
  }),
});

export const deletePropertySchema = object({
  params: object({
    id: string({ required_error: "id is required" }),
  }),
});

export type CreatePropertyInput = TypeOf<typeof createPropertySchema>["body"];
export type GetPropertyInput = TypeOf<typeof getPropertySchema>["params"];
export type UpdatePropertyInput = TypeOf<typeof updatePropertySchema>["body"];
export type DeletePropertyInput = TypeOf<typeof deletePropertySchema>["params"];
