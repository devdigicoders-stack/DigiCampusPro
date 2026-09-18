import { PORTAL_LINKS } from '../constants/portalLinks'

export default function Portals() {
  return (
    <div className="py-20 max-w-5xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-slate-900 text-center mb-8 font-['Outfit',sans-serif]">
        Institutional Portals Gateway
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PORTAL_LINKS.map((portal) => (
          <div key={portal.id} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{portal.badge}</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1">{portal.title}</h3>
            <p className="text-sm text-slate-600 mt-2">{portal.description}</p>
            <a
              href={portal.url}
              className="inline-block mt-4 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Open Gateway →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
