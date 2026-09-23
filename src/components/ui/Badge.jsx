export default function Badge({ children, variant = 'emerald', className = '' }) {
  const variants = {
    emerald: 'bg-emerald-50 text-[#008744] border-emerald-200',
    primary: 'bg-emerald-50 text-[#008744] border-emerald-200',
    orange: 'bg-orange-50 text-[#FF7A00] border-orange-200',
    accent: 'bg-orange-50 text-[#FF7A00] border-orange-200',
    blue: 'bg-sky-50 text-[#0077D4] border-sky-200',
    amber: 'bg-orange-50 text-[#FF7A00] border-orange-200',
    slate: 'bg-slate-100 text-slate-700 border-slate-200'
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${variants[variant] || variants.emerald} ${className}`}
    >
      {children}
    </span>
  )
}
