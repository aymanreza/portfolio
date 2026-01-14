import type { Project } from "../data/projects"

interface ProjectCardProps {
    project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-2">
        {project.title}
      </h3>

      <p className="text-gray-600 mb-4">
        {project.description}
      </p>

      <ul className="flex flex-wrap gap-2 text-sm text-gray-700">
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="bg-gray-100 px-2 py-1 rounded"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  )
}
