export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer active:scale-95 disabled:opacity-50 disabled:pointer-events-none'
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#008744] to-[#00A651] hover:from-[#007338] hover:to-[#008744] text-white shadow-md shadow-emerald-600/25',
    secondary: 'bg-white text-slate-700 border border-slate-200 hover:bg-emerald-50/50 hover:border-emerald-300 shadow-sm',
    accent: 'bg-gradient-to-r from-[#FFA000] via-[#FF8000] to-[#FF6000] hover:from-[#FFB020] hover:to-[#E65C00] text-white shadow-md shadow-orange-500/25',
    ghost: 'text-slate-600 hover:text-[#008744] hover:bg-emerald-50'
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3.5 text-base'
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
