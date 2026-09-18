import { ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Request a Demo',
      description: 'Schedule a free demo with our team.',
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="4" rx="2" fill="currentColor" fillOpacity="0.1" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
          <path d="M8 14h.01" />
          <path d="M12 14h.01" />
          <path d="M16 14h.01" />
          <path d="M8 18h.01" />
          <path d="M12 18h.01" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Setup & Customize',
      description: 'We configure as per your needs.',
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" fill="currentColor" fillOpacity="0.1" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Go Live',
      description: 'Start managing your campus digitally.',
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" fill="currentColor" fillOpacity="0.1" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      )
    }
  ]

  return (
    <section className="relative bg-gradient-to-r from-[#F8FAFD] via-white to-[#F0F5FA] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle background abstract curves */}
      <div className="absolute right-0 top-0 w-96 h-full bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 shadow-sm mb-3">
            HOW IT WORKS
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0B132B] tracking-tight font-['Outfit',sans-serif]">
            Get Started in 3 Simple Steps
          </h2>
        </div>

        {/* Content Row: 3 Steps + Seamless Floating Cap */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 xl:gap-8">
          {/* Left: 3 Step Cards Flow */}
          <div className="w-full lg:flex-1 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col md:flex-row items-center w-full">
                {/* Step Card */}
                <div className="w-full bg-white rounded-2xl p-5 sm:p-6 shadow-[0_4px_25px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 border border-blue-100/80 flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>

                  {/* Text Content */}
                  <div className="text-left">
                    <span className="text-blue-600 font-black text-lg sm:text-xl font-['Outfit',sans-serif] block leading-none mb-1">
                      {step.number}
                    </span>
                    <h3 className="text-slate-900 font-bold text-base sm:text-[17px] font-['Outfit',sans-serif] tracking-tight leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-[13px] mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow Divider between cards */}
                {index < steps.length - 1 && (
                  <div className="py-2 md:py-0 md:px-2.5 text-slate-700 shrink-0">
                    <ArrowRight className="w-5 h-5 hidden md:block" />
                    <span className="text-xs font-bold text-slate-400 md:hidden">↓</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Seamless Floating 3D Graduation Cap & Diploma with Handwritten Callout */}
          <div className="w-full lg:w-auto relative flex items-center justify-center shrink-0 pt-4 lg:pt-0">
            {/* Handwritten Script Callout with curved arrow */}
            <div className="absolute -top-6 -right-2 sm:right-0 lg:-top-8 lg:-right-4 z-10 pointer-events-none select-none">
              <span className="text-xl sm:text-2xl text-[#1E4ED8] font-['Caveat',cursive] leading-tight font-bold -rotate-6 block text-left">
                From Admission <br />
                to Alumni <br />
                — All in One Place
              </span>
              <svg
                className="w-10 h-10 text-[#1E4ED8] ml-4 -mt-1 opacity-90"
                viewBox="0 0 50 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 8 10 Q 24 24 18 40" />
                <path d="M 12 34 L 18 40 L 24 35" />
              </svg>
            </div>

            {/* Seamless 3D Graduation Cap & Diploma Image (mix-blend-multiply eliminates background box!) */}
            <div className="relative w-72 sm:w-80 lg:w-[320px] xl:w-[350px]">
              <img
                src="/grad_cap_seamless.jpg"
                alt="From Admission to Alumni - All in One Place"
                className="w-full h-auto object-contain mix-blend-multiply pointer-events-none select-none transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
