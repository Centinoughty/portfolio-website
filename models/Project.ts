import mongoose, { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    tools: { type: [String], required: true },
    github: { type: String },
    url: { type: String },
    featured: { type: Boolean, default: false },
    image: { type: String },
  },
  { timestamps: true }
);

const Project = models.Project || model("Project", ProjectSchema);

export default Project;
