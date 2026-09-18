export default function WhyChooseUs() {
  const cards = [
    {
      id: 'all-in-one',
      title: 'All-in-One Solution',
      subtitle: 'Complete campus automation',
      // Multi-layered hexagonal / emblem icon
      icon: (
        <svg
          className="w-8 h-8 sm:w-9 sm:h-9 text-[#FBBF24] shrink-0 filter drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="currentColor" fillOpacity="0.15" />
          <path d="M12 22V12" />
          <path d="M21 7l-9 5-9-5" />
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 'easy-to-use',
      title: 'Easy to Use',
      subtitle: 'Simple & intuitive interface',
      // Interactive user nodes / intuitive touch icon
      icon: (
        <svg
          className="w-8 h-8 sm:w-9 sm:h-9 text-[#FBBF24] shrink-0 filter drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2" />
          <path d="M12 2v3" />
          <path d="M12 19v3" />
          <path d="m4.93 4.93 2.12 2.12" />
          <path d="m16.95 16.95 2.12 2.12" />
          <path d="M2 12h3" />
          <path d="M19 12h3" />
          <path d="m4.93 19.07 2.12-2.12" />
          <path d="m16.95 7.05 2.12-2.12" />
        </svg>
      )
    },
    {
      id: 'secure-reliable',
      title: 'Secure & Reliable',
      subtitle: 'Your data, our priority',
      // Shield with security bolt icon
      icon: (
        <svg
          className="w-8 h-8 sm:w-9 sm:h-9 text-[#FBBF24] shrink-0 filter drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" fillOpacity="0.15" />
          <path d="M12 8v5" />
          <circle cx="12" cy="16" r="1" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 'scalable',
      title: 'Scalable',
      subtitle: 'Grows with your institute',
      // Growth bar chart with upward trending graph icon
      icon: (
        <svg
          className="w-8 h-8 sm:w-9 sm:h-9 text-[#FBBF24] shrink-0 filter drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3v18h18" />
          <path d="m7 14 4-4 4 4 6-6" />
          <path d="M21 8V4h-4" />
          <rect x="7" y="15" width="2" height="3" fill="currentColor" />
          <rect x="11" y="12" width="2" height="6" fill="currentColor" />
          <rect x="15" y="9" width="2" height="9" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 'dedicated-support',
      title: 'Dedicated Support',
      subtitle: 'Always here to help',
      // 24/7 Support ring / lifebuoy icon
      icon: (
        <svg
          className="w-8 h-8 sm:w-9 sm:h-9 text-[#FBBF24] shrink-0 filter drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]"
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
          <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
          <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
        </svg>
      )
    }
  ]

  return (
    <section id="why-us" className="relative bg-[#020716] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20">
      {/* Background ambient lighting and subtle texture */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative">
        {/* Handwritten script & curved chalk arrow in top right */}
        <div className="hidden lg:flex flex-col items-start absolute -top-4 right-2 xl:right-6 pointer-events-none select-none">
          <span className="text-xl xl:text-2xl text-white font-['Caveat',cursive] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] -rotate-3">
            Empowering <br />
            Every Learner
          </span>
          <svg
            className="w-10 h-10 text-white ml-6 -mt-1 opacity-90 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            viewBox="0 0 50 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M 10 12 Q 26 22 20 38" />
            <path d="M 14 32 L 20 38 L 26 33" />
          </svg>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 shadow-sm mb-4">
            WHY CHOOSE DIGYCAMPUSPRO
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white tracking-tight leading-tight mb-3 font-['Outfit',sans-serif]">
            More Than Just an ERP
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed font-normal">
            We don't just provide software — we deliver a smarter way to manage education.
          </p>
        </div>

        {/* 5 Feature Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-b from-[#05173B]/95 via-[#071E4B]/90 to-[#030E26]/95 border border-blue-500/30 hover:border-blue-400/80 rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 text-left transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(20,70,180,0.35)] group cursor-default"
            >
              {/* Golden Icon Container */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-400/10 border border-amber-400/25 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.15)] group-hover:scale-110 group-hover:border-amber-400/50 group-hover:bg-amber-400/15 transition-all duration-300">
                {card.icon}
              </div>

              {/* Text Info */}
              <div>
                <h3 className="text-xs sm:text-sm lg:text-[14px] font-bold text-white tracking-tight leading-snug font-['Outfit',sans-serif] group-hover:text-amber-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-slate-300/80 mt-0.5 leading-snug">
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
