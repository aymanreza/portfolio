import gardenPlotVideo from "../assets/gardenplot.mp4"
import trekGif from "../assets/trek.gif"

export interface Project {
  title: string
  description: string
  tech: string[]
  reflection: string[]
  media: string
  mediaType: "image" | "video"
}

export const projects: Project[] = [
  {
    title: "GardenPlot",
    description:
      "A full-stack cloud application for managing garden plots with a relational database and API-driven backend.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MySQL", "REST APIs", "Cloud Deployment"],
    reflection: ["This project was my first deep dive into full-stack development and ended up being one of the most valuable experiences I’ve had. I learned how to design and use APIs, work confidently with SQL, and deploy and manage services using Google Cloud Platform. More than anything, this was the first time I felt comfortable owning an application end to end"],
    media: gardenPlotVideo,
    mediaType: "video"
  },
  {
    title: "OS Development",
    description:
      "A teaching operating system implementing threads, virtual memory, and a custom filesystem.",
    tech: ["C", "Kernel Development", "Thread Scheduling", "Virtual Memory", "File Systems", "Concurrency"],
    reflection: ["Working on this OS project completely changed how I think about software. Building core components like threads, virtual memory, and a filesystem gave me a much deeper understanding of what’s happening beneath high-level abstractions. One of the most rewarding parts was implementing an ELF loader that allowed user programs to run directly in the OS, including classic terminal games like Trek and DOOM."],
    media: trekGif,
    mediaType: "image"
  }
]
