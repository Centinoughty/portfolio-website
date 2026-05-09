export interface Project {
  name: string;
  description: string;
  featured: boolean;
  tools: string[];
  github?: string;
  image?: string;
  url?: string;
}

export const projects: Project[] = [
  {
    name: "Letscode",
    description:
      "LetsCode lets you collaborate on code in real-time, just like Google Docs but for developers. Whether you're pair programming, teaching, or building together, it keeps everyone in sync. With live cursors, instant updates, and a clean interface, it makes coding together feel effortless, fast, and even fun.",
    featured: true,
    tools: [
      "React",
      "NextJS",
      "ReduxJS",
      "FastAPI",
      "ExpressJS",
      "SocketIO",
      "Docker",
      "PostgreSQL",
    ],
    github: "https://github.com/Centinoughty/letscode",
    image: "/temp.png",
  },
  {
    name: "Null Pointer",
    description:
      "Null Pointer is a file management API that allows users to upload files via HTTP requests. Users can upload local files using curl commands. This service allows users to upload files to a server and retrieves a publicly accessible URL for each uploaded file.",
    featured: true,
    tools: ["Node", "Express", "Multer", "MongoDB"],
    github: "https://github.com/Centinoughty/null-pointer",
    image: "/temp.png",
  },
  {
    name: "Minerva",
    description:
      "Contributed to Ragam 2025 by developing backend systems and automating email workflows using custom scripts, enabling efficient communication, streamlined event updates, and improved participant engagement at scale.",
    featured: false,
    tools: ["React", "GSAP", "Strapi", "GAuth", "Docker"],
  },
  {
    name: "Ragam 2025",
    description:
      "Contributed to Ragam 2025 by developing backend systems and automating email workflows using custom scripts, enabling efficient communication, streamlined event updates, and improved participant engagement at scale.",
    featured: false,
    tools: ["React", "Node", "Express", "Strapi"],
    github: "https://github.com/Ragam-25",
  },
  {
    name: "Tathva 2024",
    description:
      "Contributed to Tathva 2024, NITC's annual technical fest, working on the web platform with a focus on performance and smooth user experience across events and registrations.",
    featured: false,
    tools: ["React", "GSAP", "Strapi"],
    github: "https://github.com/Tathva-24",
  },
];
