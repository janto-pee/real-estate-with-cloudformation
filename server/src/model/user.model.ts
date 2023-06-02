import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface UserInput {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  address: string;
  company: string;
  role: string;
  photo?: any;
}

export interface UserDocument extends UserInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  passwordResetCode: string;
  verified: boolean;
  enquiredProperty: ["_id"];
  wishList: ["_id"];
  comparePassword(confirm_password: string): Promise<Boolean>;
}

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    firstname: { type: String, required: true, lowercase: true },
    lastname: { type: String, required: true, lowercase: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, default: "" },
    company: { type: String, default: "" },
    photo: {},
    role: {
      type: String,
      default: "Buyer",
      enum: ["Buyer", "Seller", "Admin"],
    },
    enquiredProperties: { type: mongoose.Schema.Types.ObjectId, ref: "Ad" },
    wishList: { type: mongoose.Schema.Types.ObjectId, ref: "Ad" },
    passwordResetCode: { type: String, default: "" },
    verified: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(config.get<number>("SWF"));
  const hash = bcrypt.hashSync(this.password, salt);
  this.password = hash;
  return next();
});

UserSchema.methods.comparePassword = async function (
  confirm_password: string
): Promise<boolean> {
  return bcrypt.compare(confirm_password, this.password).catch((e) => false);
};

const UserModel = mongoose.model<UserDocument>("User", UserSchema);
export default UserModel;
