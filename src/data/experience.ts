interface Experience {
  company: string;
  role: string;
  description: string;
  startDate: Date;
  endDate?: Date;
}

export const experiences: Experience[] = [
  {
    company: "CSED NITC",
    role: "Developer",
    startDate: new Date(2024, 11, 1),
    description:
      "Built and maintained web experiences for the student community, collaborating across design, content, and engineering.",
    endDate: new Date(2025, 2, 28),
  },
  {
    company: "Pediaverse",
    role: "Product Developer",
    startDate: new Date(2024, 11, 1),
    description:
      "Shaped product flows and implemented reliable frontend systems for a health-focused digital experience.",
    endDate: new Date(2025, 2, 28),
  },
  {
    company: "NITC",
    role: "Project Developer",
    startDate: new Date(2025, 9, 1),
    description:
      "Maintained and enhanced the Minor Allocation Portal by resolving application issues and automating repetitive processes to improve reliability and operational efficiency.",
    endDate: new Date(2026, 1, 31),
  },
  {
    company: "SSL NITC",
    role: "Lab Admin",
    description:
      "Managed departmental linux lab systems, automate administration using Ansible, and maintain departmental websites through routine updates and security fixes.",
    startDate: new Date(2025, 6, 1),
  },
  {
    company: "JMR Infotech",
    role: "AI Intern",
    startDate: new Date(2026, 3, 17),
    description:
      "Worked on backend development at JMR, building and maintaining APIs, implementing application features, fixing issues, and contributing to scalable software solutions.",
    endDate: new Date(2026, 6, 17),
  },
];
