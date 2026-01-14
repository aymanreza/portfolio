import { Layout } from "../components/Layout"
import me from "../assets/me.png"

export const Home = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-40 mb-12 flex items-center gap-10">
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
