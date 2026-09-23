export default function TrustBanner() {
  const features = [
    {
      id: 'secure',
      title: 'Secure &',
      subtitle: 'Reliable',
      // Shield with lightning / security bolt icon
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-[#FF7A00] filter drop-shadow-[0_2px_8px_rgba(255,122,0,0.4)]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" fillOpacity="0.15" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    },
    {
      id: 'cloud',
      title: 'Cloud Based',
      subtitle: 'Access Anywhere',
      // Cloud with upload / lightning / sparkle icon
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-[#FF7A00] filter drop-shadow-[0_2px_8px_rgba(255,122,0,0.4)]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" fill="currentColor" fillOpacity="0.15" />
          <path d="M12 13v6" />
          <path d="m9 16 3-3 3 3" />
        </svg>
      )
    },
    {
      id: 'interface',
      title: 'User Friendly',
      subtitle: 'Interface',
      // Shield with star / user friendly badge icon
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-[#FF7A00] filter drop-shadow-[0_2px_8px_rgba(255,122,0,0.4)]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" fillOpacity="0.15" />
        </svg>
      )
    },
    {
      id: 'support',
      title: 'Dedicated',
      subtitle: 'Support',
      // Lifebuoy / 24/7 dedicated support icon
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-[#FF7A00] filter drop-shadow-[0_2px_8px_rgba(255,122,0,0.4)]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.15" />
          <circle cx="12" cy="12" r="4" />
          <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
          <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
          <line x1="14.83" y1="9.17" x2="19.07" y2="19.07" />
          <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
        </svg>
      )
    }
  ]

  return (
    <section className="relative bg-[#020C07] py-6 sm:py-8 px-4 sm:px-6 lg:px-8 z-20">
      {/* Glow highlight behind the container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-emerald-600/15 blur-3xl pointer-events-none rounded-full" />

      {/* Main Glassmorphic Pill Banner */}
      <div className="relative max-w-6xl mx-auto rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 bg-gradient-to-r from-[#041910]/95 via-[#062417]/90 to-[#041910]/95 border border-emerald-500/30 shadow-[0_0_35px_rgba(0,135,68,0.2)] backdrop-blur-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center">
          {features.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3.5 sm:gap-4 group transition-transform duration-200 hover:scale-[1.03]"
            >
              {/* Icon Container with subtle orange glow */}
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,122,0,0.15)] group-hover:border-orange-500/50 group-hover:bg-orange-500/15 transition-all">
                {item.icon}
              </div>

              {/* Text content */}
              <div className="text-left">
                <p className="text-sm sm:text-base font-semibold text-white tracking-tight leading-snug font-['Outfit',sans-serif]">
                  {item.title}
                </p>
                <p className="text-xs sm:text-[13px] font-medium text-slate-300 tracking-normal leading-snug mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
