import { NextResponse } from "next/server";
import connectToDatabase from "@/../lib/db";
import Skill from "@/../models/Skill";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json();
  await connectToDatabase();
  const updated = await Skill.findByIdAndUpdate(id, body, { new: true });
  return NextResponse.json(updated);
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await connectToDatabase();
  await Skill.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted" });
}
