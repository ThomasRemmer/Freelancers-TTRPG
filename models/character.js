import mongoose, { Schema, models } from "mongoose";

const characterSchema = new Schema({
  name: {
    type: String,
  },
  imgUrl: {
    type: String,
  },
  Pronoun: {
    type: String,
  },
  Agency: {
    type: String,
  },
  Rank: {
    type: String,
  },
  Vigour: {
    type: Number,
  },
  Speed: {
    type: Number,
  },
  Intuition: {
    type: Number,
  },
  Resolve: {
    type: Number,
  },
  Emotion: {
    type: Number,
  },
  Stamina: {
    type: Number,
  },
  currentStamina: {
    type: Number,
  },
  Stress: {
    type: Number,
  },
  currentStress: {
    type: Number,
  },
  Wounds: {
    type: Number,
  },
  currentWounds: {
    type: Number,
  },
  Callsign: {
    type: String,
  },
  Position: {
    type: String,
  },
  Talents: {
    type: [],
  },
  Recall: {
    type: Number,
  },
  RecallTags: {
    type: [],
  },
  Infer: {
    type: Number,
  },
  InferTags: {
    type: [],
  },
  Discern: {
    type: Number,
  },
  DiscernTags: {
    type: [],
  },
  Persuade: {
    type: Number,
  },
  PersuadeTags: {
    type: [],
  },
  Control: {
    type: Number,
  },
  ControlTags: {
    type: [],
  },
  Mend: {
    type: Number,
  },
  MendTags: {
    type: [],
  },
  Create: {
    type: Number,
  },
  CreateTags: {
    type: [],
  },
  Aim: {
    type: Number,
  },
  AimTags: {
    type: [],
  },
  Hide: {
    type: Number,
  },
  HideTags: {
    type: [],
  },
  Flex: {
    type: Number,
  },
  FlexTags: {
    type: [],
  },
  Fight: {
    type: Number,
  },
  FightTags: {
    type: [],
  },
  Thaum: {
    type: Number,
  },
  ThaumTags: {
    type: [],
  },
  MadeBy: {
    type: String,
  },
});
const Character =
  models.Character || mongoose.model("Character", characterSchema);

export default Character;
