import mongoose, { Schema } from "mongoose";

const ShopSchema = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  yearPublished: { type: Number, required: true },
  pages: { type: Number, required: true },
  rating: { type: Number, required: true },
  genres: { type: Array, required: true },
  price: { type: Number, required: true },
  totalSold: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
  ISBN: { type: String, required: true },
  language: { type: String, required: true },
  publisher: { type: String, required: true },
});

export const shop = mongoose.models.Shop || mongoose.model("Shop", ShopSchema);
