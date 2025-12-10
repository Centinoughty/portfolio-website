import { NextResponse } from "next/server";
import connectToDatabase from "@/../lib/db";
import Project from "@/../models/Project";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await req.json();
    await connectToDatabase();

    const updatedProject = await Project.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedProject) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Project updated", project: updatedProject },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating project", error },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    await connectToDatabase();

    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Project deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting project", error },
      { status: 500 }
    );
  }
}
