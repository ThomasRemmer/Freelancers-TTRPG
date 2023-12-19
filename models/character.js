import mongoose, { Schema, models } from "mongoose";

const characterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  Pronoun: {
    type: String,
    required: true,
  },
  Agency: {
    type: String,
    required: true,
  },
  Rank: {
    type: String,
    required: true,
  },
  Vigour: {
    type: Number,
    required: true,
  },
  Speed: {
    type: Number,
    required: true,
  },
  Intuition: {
    type: Number,
    required: true,
  },
  Resolve: {
    type: Number,
    required: true,
  },
  Emotion: {
    type: Number,
    required: true,
  },
  Stamina: {
    type: Number,
    required: true,
  },
  Stress: {
    type: Number,
    required: true,
  },
  Wounds: {
    type: Number,
    required: true,
  },
  Callsign: {
    type: String,
    required: true,
  },
  Position: {
    type: String,
    required: true,
  },
  Talent1: {
    type: String,
    required: true,
  },
  Talent2: {
    type: String,
    required: true,
  },
  Talent3: {
    type: String,
    required: true,
  },
  Talent4: {
    type: String,
    required: true,
  },
  Recall: {
    type: Number,
    required: true,
  },
  Infer: {
    type: Number,
    required: true,
  },
  Discern: {
    type: Number,
    required: true,
  },
  Persuade: {
    type: Number,
    required: true,
  },
  Control: {
    type: Number,
    required: true,
  },
  Mend: {
    type: Number,
    required: true,
  },
  Create: {
    type: Number,
    required: true,
  },
  Aim: {
    type: Number,
    required: true,
  },
  Hide: {
    type: Number,
    required: true,
  },
  Flex: {
    type: Number,
    required: true,
  },
  Fight: {
    type: Number,
    required: true,
  },
  Thaum: {
    type: Number,
    required: true,
  },
});
const Character =
  models.Character || mongoose.model("Character", characterSchema);

export default Character;
