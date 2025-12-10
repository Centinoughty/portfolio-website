import mongoose, { Schema, model, models } from "mongoose";

const ExperienceSchema = new Schema(
  {
    company: { type: String, required: true },
    role: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
  },
  { timestamps: true }
);

const Experience = models.Experience || model("Experience", ExperienceSchema);

export default Experience;
