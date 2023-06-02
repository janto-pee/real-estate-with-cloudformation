import express, { Request, Response } from "express";
import {
  createProperty,
  deleteProperty,
  getProperties,
  getProperty,
  updateProperty,
} from "../service/property.service";
import { updateUser } from "../service/user.service";
import slugify from "slugify";
import { nanoid } from "nanoid";

export async function createPropertyHandler(req: Request, res: Response) {
  try {
    const userId = res.locals.user;
    const body = req.body;
    const response = await createProperty({
      ...body,
      slug: slugify(`${body.type}-${body.address}-${body.price}-${nanoid(6)}`),
      postedby: userId,
      location: {
        type: "Point",
        cordinates: [geo?.[0].longitude, geo?.[0].latitude],
      },
      googleMap: geo,
    });

    const user = await updateUser(
      { _id: userId },
      { $addToSet: { role: "Seller" } },
      { new: true }
    );
    return res.status(200).send({ data: response });
  } catch (error) {
    return error;
  }
}
export async function getPropertyHandler(req: Request, res: Response) {
  try {
    const property = req.body.property;
    const response = await getProperty(property);
    return res.status(200).send({ data: response });
  } catch (error) {
    return error;
  }
}
export async function getPropertiesHandler(req: Request, res: Response) {
  try {
    const response = await getProperties();
    return res.status(200).send({ data: response });
  } catch (error) {
    return error;
  }
}
export async function updatePropertyHandler(req: Request, res: Response) {
  try {
    const property = req.body;
    const id = req.params.id;
    const response = await updateProperty({ _id: id }, property);
    return res.status(200).send({ data: response });
  } catch (error) {
    return error;
  }
}
export async function deletePropertyHandler(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const response = await deleteProperty({ _id: id });
    return res.status(200).send({ data: response });
  } catch (error) {
    return error;
  }
}
