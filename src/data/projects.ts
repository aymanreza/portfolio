export interface Project {
  title: string
  description: string
  tech: string[]
}

export const projects: Project[] = [
  {
    title: "GardenPlot",
    description:
      "A full-stack cloud application for managing garden plots with a relational database and API-driven backend.",
    tech: ["React", "Node.js", "MySQL", "Cloud"]
  },
  {
    title: "Educational OS",
    description:
      "A teaching operating system implementing threads, virtual memory, and a custom filesystem.",
    tech: ["C", "Operating Systems", "Concurrency"]
  }
]
