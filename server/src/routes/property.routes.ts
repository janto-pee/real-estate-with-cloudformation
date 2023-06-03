import express from "express";
import {
  createPropertyHandler,
  deletePropertyHandler,
  getPropertiesForRentHandler,
  getPropertiesForSaleHandler,
  getPropertiesHandler,
  getPropertyHandler,
  propertyEnqueriedHandler,
  propertyWishlistHandler,
  searchHandler,
  updatePropertyHandler,
  userPostedHandler,
} from "../controller/Property.controller";
import { requireUser } from "../middleware/requireUser";

const router = express.Router();

// route to upload images to aws
router.get("/api/property");
router.get("/api/property");

// property routes

/**
 * @openapi
 * '/api/property':
 *  post:
 *     tags:
 *     - Property
 *     summary: Create a Property
 *     requestBody:
 *      required: true
 *      contents:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreatePropertyInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreatePropertyResponse'
 *      500:
 *        description: Server Error
 */

router.post("/api/property", createPropertyHandler);

 

/**
   * @openapi
   * '/api/property':
   *  get:
   *     tags:
   *     - Property
   *     summary: Get Properties uploaded by a user
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *              $ref: '#/components/schema/GetPropertiesResponse'
   *       404:
   *         description: unable to verify user
   */
router.get("/api/property", getPropertiesHandler);

 /**
   * @openapi
   * '/api/property/{slug}':
   *  get:
   *     tags:
   *     - Property
   *     summary: Get a Property
   *     parameters:
   *      - name: id
   *        in: path
   *        description: The slug of the Property
   *        required: true
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *              $ref: '#/components/schema/GetPropertyResponse'
   *       404:
   *         description: unable to verify user
   */

router.get("/api/property/:slug", getPropertyHandler);

  /**
   * @openapi
   * '/api/property/{slug}':
   *  put:
   *     tags:
   *     - Property
   *     summary: Update a property by the property slug
   *     parameters:
   *      - name: slug
   *        in: path
   *        description: The slug of the Property
   *        required: true
   *     requestBody:
   *      required: true
   *      contents:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreatePropertyInput'
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *              $ref: '#/components/schema/CreatePropertyResponse'
   *       500:
   *         description: Server Error
   */

router.put("/api/property/:slug", updatePropertyHandler);

 /**
   * @openapi
   * '/api/property/{slug}':
   *  delete:
   *     tags:
   *     - Property
   *     summary: Delete a Property by the Property slug
   *     parameters:
   *      - name: slug
   *        in: path
   *        description: The slug of the Property
   *        required: true
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Property Not Found
   *       500:
   *         description: Server Error
 */
router.delete("/api/property/:slug", deletePropertyHandler);

 /**
   * @openapi
   * '/api/property/wishlist/{page}/{limit}':
   *  get:
   *     tags:
   *     - Property
   *     summary: Get Property Wishlist
   *     parameters:
   *      - name: page
   *        in: path
   *        description: The page number
   *        required: true
   *      - name: limit
   *        in: path
   *        description: The number of properties to be fetched per page
   *        required: true
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *              $ref: '#/components/schema/GetPropertiesResponse'
   *       404:
   *         description: unable to verify user
   */

router.get("/api/property/wishlist/:page/:limit", requireUser, propertyWishlistHandler);

/**
   * @openapi
   * '/api/property/enqueried/{page}/{limit}':
   *  get:
   *     tags:
   *     - Property
   *     summary: Get Enqueried Properties
   *     parameters:
   *      - name: page
   *        in: path
   *        description: The page number
   *        required: true
   *      - name: limit
   *        in: path
   *        description: The number of properties to be fetched per page
   *        required: true
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *              $ref: '#/components/schema/CreatePropertyResponse'
   *       404:
   *         description: unable to verify user
   */
router.get("/api/property/enqueried/:page/:limit", requireUser, propertyEnqueriedHandler);

/**
   * @openapi
   * '/api/property/sellerproperty/{page}/{limit}':
   *  get:
   *     tags:
   *     - Property
   *     summary: Get Properties posted by a seller
   *     parameters:
   *      - name: page
   *        in: path
   *        description: The page number
   *        required: true
   *      - name: limit
   *        in: path
   *        description: The number of properties to be fetched per page
   *        required: true
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *              $ref: '#/components/schema/GetPropertiesResponse'
   *       404:
   *         description: unable to verify user
   */
router.get("/api/property/sellerproperty/:page/:limit", requireUser, userPostedHandler);

/**
   * @openapi
   * '/api/property/search':
   *  get:
   *     tags:
   *     - Property
   *     summary: Get Properties posted by a seller
   *     parameters:
   *      - name: page
   *        in: path
   *        description: The page number
   *        required: true
   *      - name: limit
   *        in: path
   *        description: The number of properties to be fetched per page
   *        required: true
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *              $ref: '#/components/schema/GetPropertiesResponse'
   *       404:
   *         description: unable to verify user
   */
router.get("/api/property/search", requireUser, searchHandler);
/**
   * @openapi
   * '/api/property/sale':
   *  get:
   *     tags:
   *     - Property
   *     summary: Get Properties posted by a seller
   *     parameters:
   *      - name: page
   *        in: path
   *        description: The page number
   *        required: true
   *      - name: limit
   *        in: path
   *        description: The number of properties to be fetched per page
   *        required: true
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *              $ref: '#/components/schema/GetPropertiesResponse'
   *       404:
   *         description: unable to verify user
   */
router.get("/api/property/sale", requireUser, getPropertiesForSaleHandler);

/**
   * @openapi
   * '/api/property/rent':
   *  get:
   *     tags:
   *     - Property
   *     summary: Get all properties for rent
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *              $ref: '#/components/schema/GetPropertiesResponse'
   *       404:
   *         description: unable to verify user
   */
router.get("/api/property/rent", requireUser, getPropertiesForRentHandler);

export default router;
