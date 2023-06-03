import express from "express";
import {
  createSessionHandler,
  findSessionHandler,
  refreshAccessTokenHandler,
} from "../controller/session.controller";
import { requireUser } from "../middleware/requireUser";
import { validateResource } from "../middleware/validateResources";
import { createSessionSchema } from "../schema/session.schema";

const router = express.Router();

/**
 * @openapi
 * '/api/session':
 *  post:
 *     tags:
 *     - Session
 *     summary: Login
 *     requestBody:
 *      required: true
 *      contents:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateSessionInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateSessionResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Email or Password Incorrect
 */
router.post("/api/session", validateResource(createSessionSchema), createSessionHandler);
router.get("/api/session", requireUser, findSessionHandler);
router.get("/api/session/refreshaccesstoken", refreshAccessTokenHandler);

export default router;
