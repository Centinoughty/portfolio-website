interface Experience {
  company: string;
  role: string;
  startDate: Date;
  endDate?: Date;
}

export const experiences: Experience[] = [
  {
    company: "CSED NITC",
    role: "Developer",
    startDate: new Date(2024, 12, 1),
    endDate: new Date(2025, 2, 28),
  },
  {
    company: "Pediaverse",
    role: "Product Developer",
    startDate: new Date(2024, 12, 1),
    endDate: new Date(2025, 2, 28),
  },
  {
    company: "NITC Hostels",
    role: "Lead Developer",
    startDate: new Date(2025, 1, 1),
    endDate: new Date(2025, 7, 31),
  },
  {
    company: "NITC",
    role: "Project Developer",
    startDate: new Date(2025, 10, 1),
    endDate: new Date(2026, 1, 31),
  },
];
