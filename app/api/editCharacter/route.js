import { connectMongoDB } from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import Character from "../../../models/character";

export async function PUT(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("_id");
    const update = JSON.parse(req.body);
    await connectMongoDB();
    const characterList = await Character.findOneAndUpdate(
      { _id: id },
      update,
      { new: true }
    );
    return NextResponse.json({ characterList });
  } catch (error) {
    return NextResponse.json(
      { message: "its has all gone wrong" },
      { status: 500 }
    );
  }
}
