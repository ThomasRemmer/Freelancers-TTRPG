import { connectMongoDB } from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import Character from "../../../models/character";

export async function GET(req) {
  try {
    await connectMongoDB();
    const characterList = await Character.find(); // Removed filter object
    return NextResponse.json({ characterList });
  } catch (error) {
    return NextResponse.json(
      { message: "its has all gone wrong" },
      { status: 500 }
    );
  }
}
