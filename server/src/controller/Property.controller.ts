import express, { Request, Response } from "express";
import {
  countProperties,
  countUserProperties,
  createProperty,
  deleteProperty,
  getProperty,
  getPropertyByAction,
  getPropertyById,
  propertyEnqueried,
  propertyWishlist,
  searchProperty,
  updateProperty,
} from "../service/property.service";
import { findUserById, updateUser } from "../service/user.service";
import slugify from "slugify";
import { nanoid } from "nanoid";
import { AWSS3 } from "../utils/configurations";

export async function uploadPropertyImageHandler(req: Request, res: Response) {
  try {
    const userId = res.locals.user;
    const { image } = req.body;
    if (!userId) {
      return res.status(400).json({ error: "unauthorised user" });
    }

    const base64Image = Buffer.from(
      image.replace(/^data:image\/\w+;base64,/, ""),
      "base64"
    );
    const type = image.split(";")[0].split("/")[1];

    // image params
    const params = {
      Bucket: "realist-app-udemy-course-bucket",
      Key: `${nanoid()}.${type}`,
      Body: base64Image,
      ACL: "public-read",
      ContentEncoding: "base64",
      ContentType: `image/${type}`,
    };

    //  AWSS3.upload(params, (err, data) => {
    //   if (err) {
    //     console.log(err);
    //     res.sendStatus(400);
    //   } else {
    //     // console.log(data);
    //     res.send(data);
    //   })
    const response = "successfuly uploaded";
    return res.status(200).send({ data: response });
  } catch (error) {
    return error;
  }
}

export async function deletePropertyImageHandler(req: Request, res: Response) {
  try {
    const { Key, Bucket } = req.body;

    // AWSS3.deleteObject({ Bucket, Key }, (err, data) => {
    //   if (err) {
    //     console.log(err);
    //     res.sendStatus(400);
    //   } else {
    //     res.send({ ok: true });
    //   }
    // });
    return res.status(200).send({ data: "image successfully deleted" });
  } catch (error) {
    return error;
  }
}

export async function createPropertyHandler(req: Request, res: Response) {
  try {
    const userId = res.locals.user;
    const body = req.body;
    const response = await createProperty({
      ...body,
      slug: slugify(`${body.type}-${body.address}-${body.price}-${nanoid(6)}`),
      postedby: userId,
    });
    // location: {
    //   type: "Point",
    //   cordinates: [geo?.[0].longitude, geo?.[0].latitude],
    // },
    // googleMap: geo,

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
    const { slug } = req.params;
    const course = await getProperty(slug);
    if (!course) {
      return res.status(404).send("course not found");
    }
    const data = {
      error: false,
      course,
    };
    res.status(200).json(data);
  } catch (error) {
    res.status(200).json({ error: error });
  }
}

export async function getPropertiesHandler(req: Request, res: Response) {
  try {
    let page =
      typeof req.query.page !== "undefined" ? Number(req.query.page) - 1 : 0;
    let limit =
      typeof req.query.lmino !== "undefined" ? Number(req.query.lmino) : 10;

    let propertyForSale = await getPropertyByAction("sale", page, limit);
    let propertyForRent = await getPropertyByAction("rent", page, limit);
    const total = await countProperties();

    propertyForRent.length > 15
      ? propertyForRent.filter((item, index: number) => index < 15)
      : propertyForRent;
    propertyForSale.length > 15
      ? propertyForSale.filter((item, index: number) => index < 15)
      : propertyForSale;

    const response = {
      error: false,
      total,
      page: page + 1,
      propertyForRent,
      propertyForSale,
    };
    return res.status(200).send(response);
  } catch (error) {
    return res.status(400).json({ error: error });
  }
}

export async function updatePropertyHandler(req: Request, res: Response) {
  try {
    const userId = res.locals.user._id;
    const update = req.body;
    const slug = req.params.slug;
    const property = await getProperty(slug);
    if (userId !== property?.postedby) {
      return res.status(400).json({ error: "unauthorised user" });
    }
    const response = await updateProperty({ slug: slug }, update, {
      new: true,
    });
    return res.status(200).send({ data: response });
  } catch (error) {
    return error;
  }
}

export async function deletePropertyHandler(req: Request, res: Response) {
  try {
    const userId = res.locals.user._id;
    const { slug } = req.params;
    const property = await getProperty(slug);
    if (userId !== property?.postedby) {
      return res.status(400).json({ error: "unauthorised user" });
    }
    const response = await deleteProperty({ slug: slug });
    return res.status(200).send({ data: "successfully deleted" });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}

export async function propertyWishlistHandler(req: Request, res: Response) {
  try {
    let page =
      typeof req.params.page !== "undefined" ? Number(req.params.page) - 1 : 0;
    let limit =
      typeof req.params.limit !== "undefined" ? Number(req.params.limit) : 10;

    const userId = res.locals.user._id;
    const user = await findUserById(userId);
    if (!user) {
      return res.status(400).json({ error: "unauthorised user" });
    }
    const wishlist = await propertyWishlist(
      { slug: user.wishList },
      page,
      limit
    );
    const total = await countUserProperties({ postedby: user.wishList });
    const response = {
      error: false,
      total,
      "courses displayed": wishlist.length,
      page: page + 1,
      wishlist,
    };
    return res.status(200).json(response);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}

export async function propertyEnqueriedHandler(req: Request, res: Response) {
  try {
    let page =
      typeof req.params.page !== "undefined" ? Number(req.params.page) - 1 : 0;
    let limit =
      typeof req.params.limit !== "undefined" ? Number(req.params.limit) : 10;

    const userId = res.locals.user._id;
    const user = await findUserById(userId);
    if (!user) {
      return res.status(400).json({ error: "unauthorised" });
    }
    const enqueriedResponse = await propertyEnqueried(
      { slug: user.enquiredProperty },
      page,
      limit
    );
    const total = await countUserProperties({ slug: user.enquiredProperty });
    const response = {
      error: false,
      total,
      "courses displayed": enqueriedResponse.length,
      page: page + 1,
      enqueriedResponse,
    };
    return res.status(200).json(response);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}

export async function userPostedHandler(req: Request, res: Response) {
  try {
    let page =
      typeof req.params.page !== "undefined" ? Number(req.params.page) - 1 : 0;
    let limit =
      typeof req.params.limit !== "undefined" ? Number(req.params.limit) : 10;

    const userId = res.locals.user._id;
    if (!userId) {
      return res.status(400).json({ error: "unauthorised " });
    }
    const userAds = await propertyWishlist({ postedBy: userId }, page, limit);
    const total = await countUserProperties({ postedby: userId });
    const response = {
      error: false,
      total,
      "courses displayed": userAds.length,
      page: page + 1,
      userAds,
    };
    return res.status(200).json(response);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}

export async function searchHandler(req: Request, res: Response) {
  try {
    let page =
      typeof req.query.page !== "undefined" ? Number(req.query.page) - 1 : 0;
    let limit =
      typeof req.query.lmino !== "undefined" ? Number(req.query.lmino) : 10;
    const { action, address, type, priceRange } = req.query;

    const searchresponse = await searchProperty(
      {
        action: action,
        type: type,
        location: {
          $near: {
            $maxDist: 5000,
            $geometry: { type: "Point", coordinates: [6000, 3000] },
          },
        },
      },
      page,
      limit
    );
    const total = await countUserProperties({
      action: action,
      type: type,
      location: {
        $near: {
          $maxDist: 5000,
          $geometry: { type: "Point", coordinates: [6000, 3000] },
        },
      },
    });
    const response = {
      error: false,
      total,
      "courses displayed": searchresponse.length,
      page: page + 1,
      searchresponse,
    };
    return res.status(200).json(response);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}

export async function getPropertiesForSaleHandler(req: Request, res: Response) {
  try {
    let page =
      typeof req.query.page !== "undefined" ? Number(req.query.page) - 1 : 0;
    let limit =
      typeof req.query.lmino !== "undefined" ? Number(req.query.lmino) : 10;

    let propertyForSale = await getPropertyByAction("sale", page, limit);
    const total = await countProperties();

    propertyForSale.length > 15
      ? propertyForSale.filter((item, index: number) => index < 15)
      : propertyForSale;

    const response = {
      error: false,
      total,
      page: page + 1,
      propertyForSale,
    };
    return res.status(200).send(response);
  } catch (error) {
    return res.status(400).json({ error: error });
  }
}
export async function getPropertiesForRentHandler(req: Request, res: Response) {
  try {
    let page =
      typeof req.query.page !== "undefined" ? Number(req.query.page) - 1 : 0;
    let limit =
      typeof req.query.lmino !== "undefined" ? Number(req.query.lmino) : 10;

    let propertyForRent = await getPropertyByAction("rent", page, limit);
    const total = await countProperties();

    propertyForRent.length > 15
      ? propertyForRent.filter((item, index: number) => index < 15)
      : propertyForRent;

    const response = {
      error: false,
      total,
      page: page + 1,
      propertyForRent,
    };
    return res.status(200).send(response);
  } catch (error) {
    return res.status(400).json({ error: error });
  }
}
