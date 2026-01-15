import { Layout } from "../components/Layout"
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"
import bears from "../assets/meAndDaBears.jpeg"
import standing from "../assets/meStanding.jpeg"
import cubs from "../assets/meCubs.jpeg"
import funny from "../assets/meFunny.jpeg"

export const Myself = () => {
  return (
    <Layout>
      <section className="mb-12 pt-20 flex flex-col md:flex-row gap-12">
        {/* LEFT: Text */}
        <div className="max-w-2xl flex flex-col justify-center space-y-4 ">
          <h1 className="text-3xl font-bold">
            About Me
          </h1>

          <p className="mb-12 text-gray-600 text-xl">
            I grew up in Grayslake, Illinois, a small town in the Chicagoland suburbs.
            I attended the University of Illinois at Urbana-Champaign for Electrical
            Engineering. As I took more classes in my curriculum, I began to fall in
            love with software and computers.
          </p>

          <p className="mb-12 text-gray-600 text-xl">
            During my sophomore year, I officially switched into Computer Engineering
            and completed my degree in three and a half years, along with a minor in
            Business. I am currently pursuing my Master’s in Electrical & Computer
            Engineering at UIUC.
          </p>

          <p className="mb-12 text-gray-600 text-xl">
            Outside of programming, I’m a huge sports fan. I love basketball (Go Bulls),
            the NFL (Bear Down!), and video games. Some of my favorite games include Mortal
            Kombat, Minecraft, and Grand Theft Auto.
          </p>

          <h1 className="text-3xl font-bold">
            Lets Connect!
          </h1>

          <p className="mb-12 text-gray-600 text-xl">
            Below are my socials! Feel free to contact me!
          </p>

          <div className="flex gap-6 mt-4">
            <a
              href="https://www.linkedin.com/in/aymanreza11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={50} />
            </a>

            <a
              href="https://www.instagram.com/aymanreza_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition"
              aria-label="Instagram"
            >
              <FaInstagram size={50} />
            </a>

            <a
              href="https://github.com/aymanreza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition"
              aria-label="GitHub"
            >
              <FaGithub size={50} />
            </a>
          </div>

        </div>

        {/* RIGHT: Images */}
        <div className="grid grid-cols-2 gap-4 shrink-0">
          {[standing, bears, cubs, funny].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Photo of Ayman"
              className="w-100 h-100 rounded-lg object-cover border border-gray-200"
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}