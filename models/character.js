import mongoose, { Schema, models } from "mongoose";

const characterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imgUrl: {
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
  Talents: {
    type: [],
    required: true,
  },
  Recall: {
    type: Number,
    required: true,
  },
  RecallTags: {
    type: [],
    required: true,
  },
  Infer: {
    type: Number,
    required: true,
  },
  InferTags: {
    type: [],
    required: true,
  },
  Discern: {
    type: Number,
    required: true,
  },
  DiscernTags: {
    type: [],
    required: true,
  },
  Persuade: {
    type: Number,
    required: true,
  },
  PersuadeTags: {
    type: [],
    required: true,
  },
  Control: {
    type: Number,
    required: true,
  },
  ControlTags: {
    type: [],
    required: true,
  },
  Mend: {
    type: Number,
    required: true,
  },
  MendTags: {
    type: [],
    required: true,
  },
  Create: {
    type: Number,
    required: true,
  },
  CreateTags: {
    type: [],
    required: true,
  },
  Aim: {
    type: Number,
    required: true,
  },
  AimTags: {
    type: [],
    required: true,
  },
  Hide: {
    type: Number,
    required: true,
  },
  HideTags: {
    type: [],
    required: true,
  },
  Flex: {
    type: Number,
    required: true,
  },
  FlexTags: {
    type: [],
    required: true,
  },
  Fight: {
    type: Number,
    required: true,
  },
  FightTags: {
    type: [],
    required: true,
  },
  Thaum: {
    type: Number,
    required: true,
  },
  ThaumTags: {
    type: [],
    required: true,
  },
});
const Character =
  models.Character || mongoose.model("Character", characterSchema);

export default Character;
