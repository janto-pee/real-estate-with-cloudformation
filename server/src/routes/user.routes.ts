import express from "express";
import {
  accessForgotPassword,
  addEnqueriedHanlder,
  addWishlistHanlder,
  createUserHandler,
  forgotPassword,
  getAllUserHandler,
  getCurrentUser,
  publicProfile,
  updateForgotPasswordHandler,
  updatePasswordHandler,
  updateProfile,
  verifyUserHandler,
} from "../controller/user.controller";
import { requireUser } from "../middleware/requireUser";
import { validateResource } from "../middleware/validateResources";
import {
  accessForgotPasswordSchema,
  createUserSchema,
  forgotPasswordSchema,
  publicProfileSchema,
  updateForgotPasswordSchema,
  updatePasswordSchema,
  updateProfileSchema,
  verifyUserSchema,
} from "../schema/user.schema";

const router = express.Router();

/**
 * @openapi
 * '/api/user':
 *  post:
 *     tags:
 *     - User
 *     summary: Register a user
 *     requestBody:
 *      required: true
 *      contents:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateUserInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
router.post("/api/user", validateResource(createUserSchema), createUserHandler);

/**
 * @openapi
 * '/api/verify/{emailverify}':
 *  get:
 *     tags:
 *     - User
 *     summary: verify a user email address
 *     parameters:
 *      - name: emailverify
 *        in: path
 *        description: signed email sent to registered user
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/VerifyEmailResponse'
 *       404:
 *         description: unable to verify user
 */
router.get(
  "/api/verify/:emailverify",
  validateResource(verifyUserSchema),
  verifyUserHandler
);

/**
 * @openapi
 * '/api/user/forgotpassword':
 *  post:
 *     tags:
 *     - User
 *     summary: Forgot Password
 *     requestBody:
 *      required: true
 *      contents:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/ForgotPasswordInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ForgotPasswordResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
router.post(
  "/api/user/forgotpassword",
  validateResource(forgotPasswordSchema),
  forgotPassword
);

/**
 * @openapi
 * '/api/user/accessaccount/{accesscode}':
 *  get:
 *     tags:
 *     - User
 *     summary: Recover an account after forgetting password
 *     parameters:
 *      - name: accesscode
 *        in: path
 *        description: recovery from access link in email
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/accessForgotPasswordResponse'
 *       404:
 *         description: unable to verify user
 */

router.get(
  "/api/user/accessaccount/:accesscode",
  validateResource(accessForgotPasswordSchema),
  accessForgotPassword
);

router.get("/api/user/currentuser", requireUser, getCurrentUser);

router.get(
  "/api/user/public-user/:username",
  validateResource(publicProfileSchema),
  publicProfile
);

/**
 * @openapi
 * '/api/user/updatepassword':
 *  post:
 *     tags:
 *     - User
 *     summary: Update User Password
 *     requestBody:
 *      required: true
 *      contents:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/UpdatePasswordInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UpdatePasswordResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
router.post(
  "/api/user/updatepassword",
  [validateResource(updatePasswordSchema), requireUser],
  updatePasswordHandler
);


router.post(
  "/api/user/updateforgotpassword",
  [validateResource(updateForgotPasswordSchema), requireUser],
  updateForgotPasswordHandler
);

/**
 * @openapi
 * '/api/user/updateprofile':
 *  post:
 *     tags:
 *     - User
 *     summary: Update User Information
 *     requestBody:
 *      required: true
 *      contents:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/UpdateUserInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UpdateUserResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
router.post(
  "/api/user/updateprofile",
  [validateResource(updateProfileSchema), requireUser],
  updateProfile
);
router.get("/api/user/getallusers", requireUser, getAllUserHandler);

/**
 * @openapi
 * '/api/user/wishlist':
 *  get:
 *     tags:
 *     - User
 *     summary: Recover an account after forgetting password
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/accessForgotPasswordResponse'
 *       404:
 *         description: unable to verify user
 */
router.get("/api/user/wishlist", requireUser, addWishlistHanlder);

/**
 * @openapi
 * '/api/user/enqueried':
 *  get:
 *     tags:
 *     - User
 *     summary: Recover an account after forgetting password
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/accessForgotPasswordResponse'
 *       404:
 *         description: unable to verify user
 */
router.get("/api/user/enqueried", requireUser, addEnqueriedHanlder);

export default router;
