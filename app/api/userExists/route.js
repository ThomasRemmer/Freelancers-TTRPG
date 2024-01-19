import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import User from "../../../models/user";
export async function POST(req) {
  try {
    await connectMongoDB();
    const { email } = await req.json();
    const user = await User.findOne({ email }).select("_id");
    console.log(user);
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json(
      { message: "its has all gone wrong" },
      { status: 500 }
    );
  }
}
