import { Layout } from "../components/Layout"
import { projects } from "../data/projects"


export const Projects = () => {
    return (
        <Layout>
            <h1 className="text-3xl font-bold mb-6">Projects</h1>

            <p className="mb-12 text-gray-600 text-xl">This is my projects page! Here are some notable projects that I've worked on. Source code can be found on my Github!</p>

            <div className="space-y-10">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="flex flex-col md:flex-row gap-6"
                    >
                        {/* Media */}
                        <div className="w-full h-full rounded-lg overflow-hidden bg-black">
                            {project.mediaType === "video" ? (
                                <video
                                    src={project.media}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <img
                                    src={project.media}
                                    alt={project.title}
                                    className="w-full h-136 object-contain"
                                />
                            )}
                        </div>


                        {/* Text content */}
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl font-semibold mb-2">
                                {project.title}
                            </h2>

                            <p className="text-xl text-gray-600 mb-3">
                                {project.description}
                            </p>

                            <div className="mb-6 flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-sm bg-gray-200 px-2 py-1 rounded"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <p className="text-gray-700 text-lg leading-relaxed mt-4">
                                {project.reflection}
                            </p>

                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}
