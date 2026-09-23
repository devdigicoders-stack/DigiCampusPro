import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { scrollToSection } from '../../utils/smoothScroll'
import { useApp } from '../../context/AppContext'

export default function CtaBanner() {
  const { openDemoModal } = useApp()

  return (
    <section className="relative bg-gradient-to-b from-[#F0FDF4] via-white to-[#E8F5EE] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Rounded Banner Card */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#030F0A] border border-emerald-900/50">
          {/* Background Image (Campus building from hero.png) */}
          <div
            className="absolute inset-0 bg-cover bg-right lg:bg-center bg-no-repeat pointer-events-none"
            style={{ backgroundImage: "url('/hero.png')" }}
          />

          {/* Left-to-right gradient overlay to ensure perfect contrast and text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020C07] via-[#04160E]/95 lg:via-[#04160E]/85 to-transparent pointer-events-none" />

          {/* Banner Content Container */}
          <div className="relative z-10 px-6 sm:px-12 lg:px-16 py-12 sm:py-14 lg:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Left Content */}
            <div className="max-w-xl text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-['Outfit',sans-serif] mb-2.5 leading-snug">
                Ready to Transform Your Campus?
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-emerald-100/80 leading-relaxed mb-6 font-normal">
                Join hundreds of institutes already using DigiCampusPro. Take the first step towards a smarter, digital future.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('contact')
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#FFA000] via-[#FF8000] to-[#FF6000] hover:from-[#FFB020] hover:to-[#E65C00] shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all active:scale-95 cursor-pointer"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={openDemoModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-emerald-300 border border-emerald-500/40 bg-emerald-950/60 hover:bg-emerald-900/60 backdrop-blur-md transition-all active:scale-95 cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Try Live College Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Side: Handwritten Callout matching reference */}
            <div className="hidden lg:flex flex-col items-center justify-center relative select-none pointer-events-none self-start xl:mr-16">
              <span className="text-2xl xl:text-3xl text-[#FFA000] font-['Caveat',cursive] leading-tight font-bold -rotate-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
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
