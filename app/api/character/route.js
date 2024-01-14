import { connectMongoDB } from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import Character from "../../../models/character";

export async function POST(req) {
  try {
    const {
      name,
      imgURL,
      Pronoun,
      Agency,
      Rank,
      Vigour,
      Speed,
      Intuition,
      Resolve,
      Emotion,
      Stamina,
      currentStamina,
      Stress,
      currentStress,
      Wounds,
      currentWounds,
      Callsign,
      Position,
      Talents,
      Recall,
      RecallTags,
      Discern,
      DiscernTags,
      Infer,
      InferTags,
      Persuade,
      PersuadeTags,
      Control,
      ControlTags,
      Mend,
      MendTags,
      Create,
      CreateTags,
      Aim,
      AimTags,
      Hide,
      HideTags,
      Flex,
      FlexTags,
      Fight,
      FightTags,
      Thaum,
      ThaumTags,
      MadeBy,
    } = await req.json();

    await connectMongoDB();
    await Character.create({
      name,
      imgURL,
      Pronoun,
      Agency,
      Rank,
      Vigour,
      Speed,
      Intuition,
      Resolve,
      Emotion,
      Stamina,
      currentStamina,
      Stress,
      currentStress,
      Wounds,
      currentWounds,
      Callsign,
      Position,
      Talents,
      Recall,
      RecallTags,
      Discern,
      DiscernTags,
      Infer,
      InferTags,
      Persuade,
      PersuadeTags,
      Control,
      ControlTags,
      Mend,
      MendTags,
      Create,
      CreateTags,
      Aim,
      AimTags,
      Hide,
      HideTags,
      Flex,
      FlexTags,
      Fight,
      FightTags,
      Thaum,
      ThaumTags,
      MadeBy,
    });

    return NextResponse.json(
      { message: "Character created." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while creating the character." },
      { status: 500 }
    );
  }
}
