import mongoose, { Schema } from "mongoose";

const MoviesSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  director: { type: String, required: true },
  duration: { type: String, required: true },
  year_of_publishing: { type: Number, required: true },
  rating: { type: Number, required: true },
  tags: { type: Array, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

export const Movies = mongoose.models.Movies || mongoose.model("Movies", MoviesSchema);