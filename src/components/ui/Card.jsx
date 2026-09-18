export default function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
