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

router.post("/api/session", validateResource(createSessionSchema), createSessionHandler);
router.get("/api/session", requireUser, findSessionHandler);
router.get("/api/session/refreshaccesstoken", refreshAccessTokenHandler);

export default router;
