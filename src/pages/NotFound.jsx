import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="py-24 text-center max-w-md mx-auto px-4">
      <h1 className="text-6xl font-black text-[#008744] font-['Outfit',sans-serif]">404</h1>
      <h2 className="text-2xl font-bold text-slate-800 mt-2">Page Not Found</h2>
      <p className="text-sm text-slate-500 mt-2">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="inline-block mt-6 px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#FFA000] via-[#FF8000] to-[#FF6000] hover:from-[#FFB020] hover:to-[#E65C00] shadow-md shadow-orange-500/20 transition-all"
      >
        Back to Home
      </Link>
    </div>
  )
}
