import { Layout } from "../components/Layout"

export const NotFound = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-2">Page not found</h1>
      <p className="text-gray-600">
        The page you’re looking for doesn’t exist.
      </p>
    </Layout>
  )
}