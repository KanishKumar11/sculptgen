import { connectDb } from "@/lib/connectDb";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  await connectDb();
  const reqBody = await req.json();
  console.log(reqBody);
  try {
    const contact = await Contact.create(reqBody);
    return NextResponse.json(
      { success: true, data: contact },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      {
        status: 400,
      }
    );
  }
}
