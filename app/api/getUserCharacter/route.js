import { connectMongoDB } from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import Character from "../../../models/character";

export async function GET(req) {
  try {
    await connectMongoDB();
    const { searchParams } = new URL(req.url);
    const madeBy = searchParams.get("MadeBy");
    const characterList = await Character.find({ MadeBy: madeBy });
    return NextResponse.json({ characterList });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
