import { NextResponse } from "next/server";
import connectToDatabase from "@/../lib/db";
import Gallery from "@/../models/Gallery";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await connectToDatabase();
  await Gallery.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted" });
}
