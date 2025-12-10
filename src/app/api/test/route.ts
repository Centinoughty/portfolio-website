import connectToDatabase from "@/../lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDatabase();
    return NextResponse.json({ message: "Connected to MongoDB successfully!" });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to connect to DB", error: (error as Error).message },
      { status: 500 }
    );
  }
}
