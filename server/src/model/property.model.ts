import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import { string } from "zod";

export interface PropertyInput {
  photos: any[];
  Price: number;
  address: string;
  bedrooms: number;
  bathrooms: number;
  landsize: number;
  carpark: number;
  location: {
    type: string;
    cordinates: number[];
  };
  title: string;
  slug: string;
  description: any;
  sold: boolean;
  googleMap: {};
  type: string;
  action: string;
  view: number;
}

export interface PropertyDocument extends PropertyInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  postedby: ["_id"];
}

const PropertySchema = new mongoose.Schema(
  {
    photos: [{}],
    Price: {
      type: Number,
      required: true,
      maxLength: 255,
    },
    address: {
      type: String,
      required: true,
      maxLength: 255,
    },
    bedrooms: Number,
    bathrooms: Number,
    landsize: Number,
    carpark: Number,
    location: {
      type: {
        type: string,
        enum: ["Point"],
        default: "Point",
      },
      cordinates: {
        type: [Number],
        default: [6.6018, 3.3515],
      },
    },
    title: {
      type: String,
      maxLength: 255,
    },
    slug: {
      type: String,
      lowercase: true,
      unique: true,
    },
    description: {},
    postedby: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    sold: { default: false, type: Boolean },
    googleMap: {},
    type: {
      type: String,
      default: "Other",
    },
    action: {
      type: String,
      default: "sell",
    },
    view: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const PropertyModel = mongoose.model<PropertyDocument>(
  "Property",
  PropertySchema
);
export default PropertyModel;
