import mongoose, { Schema, model, models } from "mongoose";

const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
    image: { type: String },
  },
  { timestamps: true }
);

const Blog = models.Blog || model("Blog", BlogSchema);

export default Blog;
