import { connectMongoDB } from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import Character from "../../../models/character";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("_id");
    console.log(searchParams);
    console.log(id);
    await connectMongoDB();
    const characterList = await Character.findOne({ _id: id });
    return NextResponse.json({ characterList });
  } catch (error) {
    return NextResponse.json(
      { message: "its has all gone wrong" },
      { status: 500 }
    );
  }
}
