import { NextResponse } from "next/server";
import connectToDatabase from "@/../lib/db";
import Gallery from "@/../models/Gallery";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  await connectToDatabase();
  await Gallery.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted" });
}
