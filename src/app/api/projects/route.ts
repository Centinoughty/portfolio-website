import { NextResponse } from "next/server";
import connectToDatabase from "@/../lib/db";
import Project from "@/../models/Project";

export async function GET() {
  try {
    await connectToDatabase();
    const projects = await Project.find({}).sort({ createdAt: -1 });
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching projects", error },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectToDatabase();

    const newProject = await Project.create(body);
    return NextResponse.json(
      { message: "Project created", project: newProject },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating project", error },
      { status: 500 }
    );
  }
}
