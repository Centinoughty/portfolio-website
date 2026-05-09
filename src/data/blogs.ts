export interface Blog {
  title: string;
  slug: string;
  summary: string;
  date: string;
  readTime: number;
  tags: string[];
  featured?: boolean;
}

export const blogs: Blog[] = [];
