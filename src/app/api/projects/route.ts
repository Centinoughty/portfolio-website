import { connectDb } from "../../../../lib/db";
import Project from "../../../../models/Project";

// export async function POST(req: Request) {
//   try {
//     await connectDb();

//     const body = await req.json();

//     const { name, description, tools, github, featured } = body;

//     if (!name || !description || !tools?.length) {
//       return new Response(
//         JSON.stringify({ error: "Missing required fields" }),
//         { status: 400 }
//       );
//     }

//     const newProject = await Project.create({
//       name,
//       description,
//       tools,
//       github,
//       featured: featured ?? false,
//     });

//     return new Response(JSON.stringify(newProject), { status: 201 });
//   } catch (error) {
//     console.log(error)
//     return new Response(JSON.stringify({ error: "Failed to create project" }), {
//       status: 500,
//     });
//   }
// }

export async function GET() {
  try {
    await connectDb();

    const projects = await Project.find({ featured: false })
      .sort({ createdAt: -1 })
      .limit(6);

    return new Response(JSON.stringify(projects), { status: 200 });
  } catch (error) {
    console.log("Error fetching projects");
    return new Response(JSON.stringify({ error: "Failed to fetch projects" }), {
      status: 500,
    });
  }
}
