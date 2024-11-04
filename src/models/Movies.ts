import mongoose, { Schema } from "mongoose";

const MoviesSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  director: { type: String, required: true },
  duration: { type: String, required: true },
  yearPublished: { type: Number, required: true },
  rating: { type: Number, required: true },
  genres: { type: Array, required: true },
  imageUrl: { type: Array, required: true },
  description: { type: String, required: true },
  language: { type: String, required: true },
  publisher: { type: String, required: true },
  totalViews: { type: Number, required: true },
});

export const Movies =
  mongoose.models.Movies || mongoose.model("Movies", MoviesSchema);
