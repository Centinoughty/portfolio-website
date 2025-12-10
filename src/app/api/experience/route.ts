import { NextResponse } from "next/server";
import connectToDatabase from "@/../lib/db";
import Experience from "@/../models/Experience";

export async function GET() {
  await connectToDatabase();
  const experiences = await Experience.find({}).sort({ startDate: -1 });
  return NextResponse.json(experiences);
}

export async function POST(req: Request) {
  const body = await req.json();
  await connectToDatabase();
  const newExperience = await Experience.create(body);
  return NextResponse.json(newExperience, { status: 201 });
}
