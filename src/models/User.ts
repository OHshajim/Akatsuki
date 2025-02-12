import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  subscription: { type: String },
  role: { type: String, required: true },
  imageURL: { type: String, required: true },
  WishList: { type: Array, required: true },
  CartList: { type: Array, required: true },
  Liked: { type: Array, required: true },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
