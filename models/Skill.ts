import mongoose, { Schema, model, models } from "mongoose";

const SkillSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const Skill = models.Skill || model("Skill", SkillSchema);

export default Skill;
