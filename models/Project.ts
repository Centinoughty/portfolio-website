import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tools: [String],
    github: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Project", ProjectSchema);
