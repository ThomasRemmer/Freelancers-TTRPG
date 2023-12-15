import { connectMongoDB } from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import User from "../../../models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 4);
    hashedPassword.toString();
    console.log(hashedPassword);

    await connectMongoDB();

    await User.create({ name, email, password: hashedPassword });

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "its has all gone wrong" },
      { status: 500 }
    );
  }
}
