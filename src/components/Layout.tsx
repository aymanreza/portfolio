import type { ReactNode } from "react"
import { Link } from "react-router-dom"

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
                <Link to="/myself" className="hover:underline">
                    About
                </Link>
            </nav>
            </div>
        </header>

      {/* Page content */}
      <main className="container py-10">
            {children}
      </main>
    </div>
  )
}
