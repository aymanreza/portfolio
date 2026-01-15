import { Layout } from "../components/Layout"
import me from "../assets/me.png"
import resume from "../assets/resume.pdf"


export const Home = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-25 mb-50 flex items-center gap-10">
        <div>
          <h1 className="text-5xl font-bold tracking-tight mb-10">
            Hi, I’m Ayman!
          </h1>

          <p className="text-2xl text-gray-600 max-w-2xl mb-6">
            Welcome to my website!
          </p>

          <p className="text-2xl text-gray-600 max-w-2xl">
            I’m a software engineer focused on machine learning systems,
            cloud infrastructure, and backend development.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition"
            >
              View Resume
            </a>
          </div>

        </div>

        {/* Image */}
        <div className="shrink-0">
          <img
            src={me}
            alt="Photo of Ayman Reza"
            className="w-150 h-150 rounded-lg object-cover object-[50%_30%] border border-gray-200"
          />
        </div>

      </section>
    </Layout>
  )
}
