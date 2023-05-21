import config from "config";
import mongoose from "mongoose";

mongoose.set('strictQuery', false)

export async function connectToDB() {
  try {
    const dbURI = config.get<string>("dbURI");
    await mongoose.connect(dbURI);
    console.log('connected to db')
  } catch (error: any) {
    return error;
  }
}
