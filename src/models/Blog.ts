import mongoose, { Schema } from "mongoose";

const BlogSchema = new Schema({
  name: { type: String, required: true },
  category: { type: Object, required: true },
  intro: { type: String, required: true },
  author: { type: String, required: true },
  likes: { type: Number, required: true },
  date: { type: String, required: true },
  genres: { type: Array, required: true },
  explanation: { type: String, required: true },
  images: { type: Object, required: true },
  description: { type: String, required: true },
  endingParagraph: { type: String, required: true },
});

export const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
