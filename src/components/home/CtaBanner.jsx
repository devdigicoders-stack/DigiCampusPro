import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="relative bg-gradient-to-b from-[#F3F6FA] via-white to-[#F0F5FA] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Rounded Banner Card */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#030B1E] border border-blue-900/40">
          {/* Background Image (Campus building from hero.png) */}
          <div
            className="absolute inset-0 bg-cover bg-right lg:bg-center bg-no-repeat pointer-events-none"
            style={{ backgroundImage: "url('/hero.png')" }}
          />

          {/* Left-to-right gradient overlay to ensure perfect contrast and text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020716] via-[#041130]/95 lg:via-[#041130]/85 to-transparent pointer-events-none" />

          {/* Banner Content Container */}
          <div className="relative z-10 px-6 sm:px-12 lg:px-16 py-12 sm:py-14 lg:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Left Content */}
            <div className="max-w-xl text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight font-['Outfit',sans-serif] mb-2.5 leading-snug">
                Ready to Transform Your Campus?
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-slate-200/90 leading-relaxed mb-6 font-normal">
                Join hundreds of institutes already using DigyCampusPro. Take the first step towards a smarter, digital future.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-500 hover:to-amber-600 shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white border border-blue-300/40 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all active:scale-95 cursor-pointer"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Right Side: Handwritten Callout matching reference */}
            <div className="hidden lg:flex flex-col items-center justify-center relative select-none pointer-events-none self-start xl:mr-16">
              <span className="text-2xl xl:text-3xl text-white font-['Caveat',cursive] leading-tight font-bold -rotate-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Education <br />
                Reimagined
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
