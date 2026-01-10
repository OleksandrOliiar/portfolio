export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  current: boolean;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    id: "incode",
    role: "Front end developer",
    company: "Incode Group",
    period: "April 2024 - Present",
    current: true,
    responsibilities: [
      "Creating and designing interactive and user-friendly components for web applications using React",
      "Connecting frontend components with backend APIs to fetch and update data",
      "Designing and styling components to ensure they look good and fit the application's design requirements",
      "Writing tests to ensure code quality and debugging issues that arise during development",
      "Working with other team members, such as designers and backend developers, and documenting code and decisions made during development",
    ],
  },
  {
    id: "vatra",
    role: "Junior React developer",
    company: "Vatra",
    period: "May 2022 - April 2024",
    current: false,
    responsibilities: [
      "Supporting senior developers in various tasks such as coding, testing, debugging, and troubleshooting issues",
      "Writing clean, efficient, and maintainable code under the guidance of more experienced developers",
      "Continuously learning and improving skills in programming languages, frameworks, tools, and best practices",
      "Identifying and fixing bugs in the codebase, and learning to debug and troubleshoot issues effectively",
      "Assisting in deployment processes and ensuring smooth transitions from development to production environments",
    ],
  },
];
