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
router.post("/api/property", createPropertyHandler);
router.get("/api/property", getPropertiesHandler);
router.get("/api/property/:slug", getPropertyHandler);
router.put("/api/property/:slug", updatePropertyHandler);
router.delete("/api/property/:slug", deletePropertyHandler);
router.get("/api/property/:page/:limit", requireUser, propertyWishlistHandler);
router.get("/api/property/:page/:limit", requireUser, propertyEnqueriedHandler);
router.get("/api/property/:page/:limit", requireUser, userPostedHandler);
router.get("/api/property/search", requireUser, searchHandler);
router.get("/api/property/sale", requireUser, getPropertiesForSaleHandler);
router.get("/api/property/rent", requireUser, getPropertiesForRentHandler);

export default router;
