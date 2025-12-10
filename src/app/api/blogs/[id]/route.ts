import { NextResponse } from "next/server";
import connectToDatabase from "@/../lib/db";
import Blog from "@/../models/Blog";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await req.json();
  await connectToDatabase();
  const updated = await Blog.findByIdAndUpdate(id, body, { new: true });
  return NextResponse.json(updated);
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  await connectToDatabase();
  await Blog.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted" });
}
