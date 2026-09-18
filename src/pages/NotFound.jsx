import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="py-24 text-center max-w-md mx-auto px-4">
      <h1 className="text-6xl font-black text-blue-600 font-['Outfit',sans-serif]">404</h1>
      <h2 className="text-2xl font-bold text-slate-800 mt-2">Page Not Found</h2>
      <p className="text-sm text-slate-500 mt-2">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="inline-block mt-6 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </div>
  )
}
