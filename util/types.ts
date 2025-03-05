export interface Project {
  name: string;
  description: string;
  tools: string[];
  github?: string;
  url?: string;
  role?: string;
  image?: string;
}

export interface Experience {
  title: string;
  role: string;
  year: number;
  url?: string;
  work: string;
}
