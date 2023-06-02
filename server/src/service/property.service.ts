import { FilterQuery, UpdateQuery, QueryOptions } from "mongoose";
import PropertyModel, {
  PropertyInput,
  PropertyDocument,
} from "../model/property.model";

export async function createProperty(input: Partial<PropertyInput>) {
  return await PropertyModel.create(input);
}
export async function getProperty(id: FilterQuery<PropertyDocument>) {
  return await PropertyModel.findOne(id);
}
export async function getProperties() {
  return await PropertyModel.find();
}
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
