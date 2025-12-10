import { NextResponse } from "next/server";
import connectToDatabase from "@/../lib/db";
import Experience from "@/../models/Experience";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await req.json();
  await connectToDatabase();
  const updated = await Experience.findByIdAndUpdate(id, body, { new: true });
  return NextResponse.json(updated);
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  await connectToDatabase();
  await Experience.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted" });
}
