import express from "express";
import {
  accessForgotPassword,
  createUserHandler,
  forgotPassword,
  getAllUserHandler,
  getCurrentUser,
  publicProfile,
  updatePasswordHandler,
  updateProfile,
  verifyUserHandler,
} from "../controller/user.controller";
import { requireUser } from "../middleware/requireUser";
import { validateResource } from "../middleware/validateResources";
import {
  accessForgotPasswordSchema,
  forgotPasswordSchema,
  publicProfileSchema,
  updatePasswordSchema,
  updateProfileSchema,
  verifyUserSchema,
} from "../schema/user.schema";

const router = express.Router();

router.post("/api/user", createUserHandler);
router.post(
  "/api/verify/:emailverify",
  validateResource(verifyUserSchema),
  verifyUserHandler
);
router.post(
  "/api/user/forgotpassword",
  validateResource(forgotPasswordSchema),
  forgotPassword
);
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
router.post(
  "/api/user/updatepassword",
  [validateResource(updatePasswordSchema), requireUser],
  updatePasswordHandler
);
router.post(
  "/api/user/updateprofile",
  [validateResource(updateProfileSchema), requireUser],
  updateProfile
);
router.get("/api/user/getallusers", requireUser, getAllUserHandler);
export default router;
