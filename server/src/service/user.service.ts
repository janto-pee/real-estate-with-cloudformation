import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import UserModel, { UserInput, UserDocument } from "../model/user.model";

export async function createUser(user: Partial<UserInput>) {
  const response = await UserModel.create(user);
  return response;
}
export async function findUserByEmail(email: string) {
  const response = await UserModel.findOne({ email });
  return response;
}
export async function findUserById(id: string) {
  const response = await UserModel.findById(id);
  return response;
}
export async function findUserByUsername(user: string) {
  const response = await UserModel.findOne({ username: user });
  return response;
}

export const updateUser = async (
  query: FilterQuery<UserDocument>,
  update: UpdateQuery<UserInput>,
  options: QueryOptions
) => {
  return await UserModel.findOneAndUpdate(query, update, options);
};
export const allUser = async () => {
  return await UserModel.find();
};

// export async function getAllUsers(page: number, limit: number) {
//   const Users = await UserModel.find()
//     .skip(page * limit)
//     .limit(limit);
//   return Users;
// }

