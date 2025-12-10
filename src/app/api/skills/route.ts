import { NextResponse } from "next/server";
import connectToDatabase from "@/../lib/db";
import Skill from "@/../models/Skill";

export async function GET() {
  await connectToDatabase();
  const skills = await Skill.find({});
  return NextResponse.json(skills);
}

export async function POST(req: Request) {
  const body = await req.json();
  await connectToDatabase();
  const newSkill = await Skill.create(body);
  return NextResponse.json(newSkill, { status: 201 });
}
