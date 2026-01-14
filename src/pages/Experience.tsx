import { Layout } from "../components/Layout"
import shure from "../assets/shure.jpg"
import cliffs from "../assets/clevelandcliffs.png"
import handshake from "../assets/handshake.jpg"

export const Experience = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Experience</h1>

        <section className="mb-12 flex flex-col md:flex-row gap-8">
        {/* LEFT: Job description */}
        <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">
            Software Controls Engineering Intern
            </h2>

            <p className="text-gray-600 mb-4">
            Shure Incorporated | May 2025 – August 2025
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
                Debugged embedded software and firmware by tracing event logs,
                sensor data streams, and control logic to identify race conditions
                and logic faults.
            </li>
            <li>
                Wrote Python-based tools to automate test workflows, analyze
                results, and support automated testing and validation.
            </li>
            <li>
                Collaborated with cross-functional teams to translate real-world
                requirements into deployable solutions.
            </li>
            </ul>
        </div>

        {/* RIGHT: Image */}
        <div className="shrink-0">
            <img
            src={shure}
            alt="Shure internship"
            className="w-70 h-70 rounded-lg object-cover border border-gray-200"
            />
        </div>
        </section>


        <section className="mb-12 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">
            Software Systems Engineering Intern
            </h2>

            <p className="text-gray-600 mb-4">
            Cleveland-Cliffs | May 2024 – August 2024
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Analyzed machine logs and sensor data to diagnose software-driven failures in automated systems.</li>
            <li>Developed diagnostic scripts and control logic to detect fault conditions and reduce unplanned downtime.</li>
            <li>Collaborated with engineers to validate fixes through controlled testing and data-driven verification.</li>
            </ul>
        </div>

        <div className="shrink-0">
            <img
            src={cliffs}
            alt="Cleveland-Cliffs internship"
            className="w-70 h-70 rounded-lg object-cover border border-gray-200"
            />
        </div>
        </section>

        <section className="mb-12 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">
            Machine Learning Evaluation Fellow (Part Time)
            </h2>

            <p className="text-gray-600 mb-4">
             Handshake | December 2025 - Present
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li> Provided technical evaluations and training data to improve machine learning model reasoning, accuracy, and task performance. </li>
          <li> Analyzed model outputs and provided structured feedback to improve reasoning quality and reliability. </li>
          <li> Worked with large datasets and automated evaluation pipelines. </li>
            </ul>
        </div>

        <div className="shrink-0">
            <img
            src={handshake}
            alt="Handshake Fellowship"
            className="w-70 h-70 rounded-lg object-cover border border-gray-200"
            />
        </div>
        </section>

    </Layout>
  )
}
