import { NextResponse } from "next/server";
import connectToDatabase from "@/../lib/db";
import Gallery from "@/../models/Gallery";

export async function GET() {
  await connectToDatabase();
  const images = await Gallery.find({}).sort({ createdAt: -1 });
  return NextResponse.json(images);
}

export async function POST(req: Request) {
  const body = await req.json();
  await connectToDatabase();
  const newImage = await Gallery.create(body);
  return NextResponse.json(newImage, { status: 201 });
}
