import { NextResponse } from "next/server";
import connectToDatabase from "@/../lib/db";
import Blog from "@/../models/Blog";

export async function GET() {
  await connectToDatabase();
  const blogs = await Blog.find({}).sort({ date: -1 });
  return NextResponse.json(blogs);
}

export async function POST(req: Request) {
  const body = await req.json();
  await connectToDatabase();
  const newBlog = await Blog.create(body);
  return NextResponse.json(newBlog, { status: 201 });
}
