import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

interface LayoutProps {
    children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            {/* Navbar */}
            <header className="border-b border-gray-200">
                <div className="container flex h-16 items-center justify-between">
                    <Link to="/" className="font-semibold text-lg">
                        Ayman Reza
                    </Link>

                    <nav className="flex gap-6 text-sm">
                        <Link to="/" className="hover:underline">
                            Home
                        </Link>
                        <Link to="/experience" className="hover:underline">
                            Experience
                        </Link>
                        <Link to="/projects" className="hover:underline">
                            Projects
                        </Link>
                        <Link to="/myself" className="hover:underline">
                            About Me
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Page content */}
            <main className="container py-10">
                {children}
            </main>
            <footer className="border-t border-gray-200 py-6 mt-12">
                <div className="flex justify-center gap-6 text-gray-600">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition"
                        aria-label="GitHub"
                    >
                        <FaGithub size={22} />
                    </a>

                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={22} />
                    </a>

                    <a
                        href="https://instagram.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition"
                        aria-label="Instagram"
                    >
                        <FaInstagram size={22} />
                    </a>
                </div>
            </footer>
        </div>
    )
}
