import { FilterQuery, UpdateQuery, QueryOptions } from "mongoose";
import PropertyModel, {
  PropertyInput,
  PropertyDocument,
} from "../model/property.model";

export async function createProperty(input: Partial<PropertyInput>) {
  return await PropertyModel.create(input);
}

export async function getProperty(
  slug: FilterQuery<PropertyDocument> | string
) {
  return await PropertyModel.findOne({ slug: slug }).populate(
    "postedBy",
    "firstname lastname email"
  );
}
export async function getPropertyById(
  id: FilterQuery<PropertyDocument> | string
) {
  return await PropertyModel.findOne({ _id: id }).populate(
    "postedBy",
    "firstname lastname email"
  );
}

export async function getPropertyByAction(
  action: FilterQuery<PropertyDocument> | string,
  page: number,
  limit: number
) {
  return await PropertyModel.find({ action: action })
    .select("slug title price address")
    .sort({ createdAt: -1 })
    .skip(page * limit)
    .limit(limit);
}

export async function relatedProperty(singleproperty: PropertyDocument) {
  return await PropertyModel.find({
    _id: { $ne: singleproperty._id },
    action: singleproperty.action,
    type: singleproperty.type,
  })
    .select("slug title price address")
    .limit(3);
}

export const countProperties = async () => {
  const response = PropertyModel.countDocuments();
  return response;
};
export const countUserProperties = async (query: FilterQuery<PropertyDocument>) => {
  const response = PropertyModel.countDocuments(query);
  return response;
};

export async function updateProperty(
  query: FilterQuery<PropertyDocument>,
  update: UpdateQuery<PropertyInput>,
  options: QueryOptions = { new: true }
) {
  return await PropertyModel.findOneAndUpdate(query, update, options);
}

export async function deleteProperty(query: FilterQuery<PropertyDocument>) {
  return await PropertyModel.deleteOne(query);
}

export async function propertyWishlist(
  query: FilterQuery<PropertyDocument>,
  page: number,
  limit: number
) {
  return await PropertyModel.find(query)
    .select("slug title price address")
    .sort({ createdAt: -1 })
    .skip(page * limit)
    .limit(limit);
}
export async function propertyEnqueried(
  query: FilterQuery<PropertyDocument>,
  page: number,
  limit: number
) {
  return await PropertyModel.find(query)
    .select("slug title price address")
    .sort({ createdAt: -1 })
    .skip(page * limit)
    .limit(limit);
}
export async function searchProperty(
  query: FilterQuery<PropertyDocument>,
  page: number,
  limit: number
) {
  return await PropertyModel.find(query)
    .select("slug title price address")
    .sort({ createdAt: -1 })
    .skip(page * limit)
    .limit(limit);
}
