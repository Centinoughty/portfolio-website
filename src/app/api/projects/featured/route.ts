import { connectDb } from "../../../../../lib/db";
import Project from "../../../../../models/Project";

export async function GET() {
  try {
    await connectDb();

    const featured = await Project.find({ featured: true })
      .sort({ createdAt: -1 })
      .limit(2);

    return new Response(JSON.stringify(featured), { status: 200 });
  } catch (error) {
    console.log("Error fetching featured projects");
    return new Response(
      JSON.stringify({ error: "Failed to fetch featured projects" }),
      {
        status: 500,
      }
    );
  }
}
